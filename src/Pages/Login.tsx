import { useEffect, useState } from "react";

// import MyTable from "./Data";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../Components/FormFields";
import Input from "../Components/Input";
import Button from "../Components/Button";
import FormExtra from "../Components/FormExtra";
import Sidebar from "../Components/SideBar";

const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  useEffect(() => {
    if (isLoggedIn) {
      const role = localStorage.getItem("role");
      navigate(`/${role}`);
    }
  }, [isLoggedIn]);
  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const authenticateUser = (token: any, password: any) => {
    const dummyToken = "dummy_token";
    const role =
      token === "12345" ? "user" : token === "67890" ? "admin" : null;
    if (role && (password === "12345" || password === "67890")) {
      localStorage.setItem("token", dummyToken);
      localStorage.setItem("role", role); // Store the role in localStorage
      console.log("Token set in localStorage:", localStorage.getItem("token"));
      alert("Authentication success! Dummy token set.");
      return true;
    }
    return false;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (authenticateUser(loginState?.tokenNumber, loginState?.password)) {
      const role = localStorage.getItem("role"); // Get the role from localStorage
      navigate(`/${role}`);
    } else {
      alert("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div id="main">
      <div className="flex justify-between content-center   gap-5 space-y-6">
        <div className=" hidden md:block md:w-7/12 w-1/2">
          <img src={login} alt="..." className="w-full h-auto" />
        </div>
        <div className="container mx-auto w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mt-44">
              <p className="text-4xl font-bold ml-5 text-gray-700 text-center text-welcomingtext">
                Hi! Welcome
              </p>
              <p className="text-xxl ml-14 text-wrap mt-4 ">
                Please enter your details to access the portal
              </p>
              <div className="ml-10">
                {fields?.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>

              <div>
                <div className="ml-10">
                  <FormExtra />
                </div>
              </div>
              <div className="ml-10">
                <Button handleSubmit={handleSubmit} text="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
