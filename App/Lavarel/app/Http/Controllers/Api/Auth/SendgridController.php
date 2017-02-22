<?php

namespace app\Http\Controllers\Api\Auth;


use App\Http\Controllers\Controller;
use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Symfony\Component\HttpFoundation\Response;

class SendgridController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $yelp = new \Yelp();
        $results = $yelp->query_api('club');
        //var_dump($results->businesses);
        $sendgrid = new \SendGrid(getenv('SENDGRID_USER'), getenv('SENDGRID_SECRET'));
        $emailer    = new \SendGrid\Email();
        $emailer->addTo('spencerfcp@gmail.com')
            ->setFrom('jeff@nectyr.com')
            ->setFromName('Jeff')
            ->setSubject('Test Message from Laravel')
            ->setHtml('HELLLLOOOOO');
       // $result = $sendgrid->send($emailer);

        return view('cars.show', array('cars' => $results->businesses));
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
