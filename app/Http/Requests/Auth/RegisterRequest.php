<?php 
namespace VanguardLTE\Http\Requests\Auth
{
    class RegisterRequest extends \VanguardLTE\Http\Requests\Request
    {
        public function rules()
        {
            $rules = [
                'username' => 'required', 
                'password' => 'required'
            ];
            if( settings('tos') ) 
            {
                $rules['tos'] = 'accepted';
            }
            if( settings('use_email') ) 
            {
                $rules['email'] = 'required';
            }
            return $rules;
        }
        public function messages()
        {
            return ['tos.accepted' => trans('app.you_have_to_accept_tos')];
        }
    }
}
