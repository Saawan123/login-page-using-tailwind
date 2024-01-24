
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignUp';
import ForgetPassword from "./Pages/ForgetPassword";
function App() {
  return (
   
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/forget-password" element={<ForgetPassword/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;