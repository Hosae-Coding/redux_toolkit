import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../components/features/user';

const Login = () => {
   const dispatch = useDispatch();
   return (
      <div>
         <button
            onClick={() => {
               dispatch(
                  login({ name: 'jone', age: '21', email: 'jone@gmail.com' })
               );
            }}
         >
            Login
         </button>

         <button
            onClick={() => {
               dispatch(logout());
            }}
         >
            logout
         </button>
      </div>
   );
};

export default Login;
