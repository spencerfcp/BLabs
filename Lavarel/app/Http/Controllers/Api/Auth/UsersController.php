<?php
namespace app\Http\Controllers\Api\Auth;


use App\Http\Controllers\Controller;
use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;


class UsersController extends Controller
{
    use Helpers;

    public function store(Request $request)
    {
        $data   =   $request->get('user');
        $validator  =   \Validator::make($data,[
            'email'     =>  'required|email|unique:users',
            'password'  =>  'required'
        ]);
        if($validator->fails()){
            throw new StoreResourceFailedException('Invalid user data',$validator->errors());
        }
        $user = User::create(['email'=>$data['email'],'password'=>bcrypt($data['password'])]);

        return response()->json(array('id' => $user->id));
    }

    function update(Request $request){
        $password   =   $request->get('password');
        $token   =   $request->get('token');
        $user_id = \JWTAuth::toUser($token)->id;
        DB::table('users')
            ->where('id', $user_id)
            ->update(['password' => bcrypt($password)]);
        return response()->json(array('result'=>'success'));


    }
}