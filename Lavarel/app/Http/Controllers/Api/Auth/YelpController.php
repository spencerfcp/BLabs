<?php

namespace app\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;



class YelpController extends Controller
{
    use Helpers;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function search(Request $request) {
        $search_terms = $request->only('search_term', 'search_location', 'search_sort', 'token');
        $search_term = isset($search_terms['search_term']) ? $search_terms['search_term'] : '';
        $search_location = isset($search_terms['search_location']) ? $search_terms['search_location'] : '';
        $search_sort = isset($search_terms['search_sort']) ? $search_terms['search_sort'] : 0;
        $token = $search_terms['token'];
        $user_id = \JWTAuth::toUser($token)->id;
        $yelp = new \Yelp();
        $results = $yelp->query_api($search_term, $search_location, $search_sort);
        if($search_term !='' || $search_location !='') {
            DB::table('search_history')->insert(
                ['searchterm' => $search_term, 'created_at'=> date('Y-m-d') , 'searchlocation' => $search_location, 'user_id' => $user_id]
            );
        }

        return response()->json($results->businesses);
    }

    public function searchHistory(Request $request) {
        //$normalizer = new ObjectNormalizer();
        $token = $request->get('token');
        $user_id = \JWTAuth::toUser($token)->id;
        $search_history = DB::select('select * from search_history where user_id = ? order by created_at DESC limit 15', [$user_id]);
        //$api_search_history =  $this->normalizeResult((object) $search_history);
        return $search_history;

    }

    public function passReset()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function initLocation() {
        return response()->json(array());
    }
    public function initHistory() {
        return response()->json(array());
    }

    public function normalizeResult($data){
        $normalizedResponse= array('data');
        foreach($data as $result) {
            $id = $result['id'];
            $data = array('id' => $id, 'attributes' => array());
            foreach($result as $key=>$value) {
                if($key != 'id') {
                    $data['attributes'][$key]= $value;
                }
            }
            array_push($normalizedResponse['data'], $data);


        }

        return json_encode($normalizedResponse, true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
