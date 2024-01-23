// import React, { useState } from 'react';
// import InputField from '../Components/Input';
// import Button from '../Components/Button';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log('Login clicked');
//   };

//   return (
//     <div className="flex items-center  justify-center h-screen   ">
//       <form className="bg-gray-200 bg-gradient-to-r from-sky-500 to-indigo-500 p-8 h-4/5 rounded-md">
//         <h2 className="text-2xl font-bold mb-4 mt-40 ">Login</h2>
//         <div className="input-field ">
//           <InputField value={username} onChange={(e:any) => setUsername(e.target.value)} placeholder="Username" />
//         </div>
//         <div className="input-field">
//           <InputField value={password} onChange={(e:any) => setPassword(e.target.value)} type="password" placeholder="Password" />
//         </div>
//         <div className="submit-button ">
//           <Button label="Login" onClick={handleLogin} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import Header from "../Components/Header"
import LoginCommon from "../Components/LoginCommon"


export default function LoginPage(){
    return(
        <>
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
              <LoginCommon/>
        </>
    )
}