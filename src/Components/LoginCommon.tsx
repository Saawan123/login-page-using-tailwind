import { useState } from "react";
import { loginFields } from "./FormFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
// import MyTable from "./Data";
import login from "../assets/login.png";
const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginCommon() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const authenticateUser = () => {
    alert("authentication success");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    authenticateUser();
  };
  return (
    <div className="flex justify-between content-center  gap-5 space-y-6">
      <div className="hidden sm:block md:w-7/12">
        <img src={login} className="overflow-hidden" alt="..." />
      </div>
      <form>
        <div className="mt-44">
          <p className="text-4xl font-bold text-gray-700 text-center text-welcomingtext">Hi! Welcome</p>
          <p className="text-2xl mt-4 md:w-screen">Please enter your details to access the portal</p>
          <div className="ml-14">
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
            <div className="ml-14">
              <FormExtra />
            </div>
          </div>
          <div className="ml-14">
            <FormAction handleSubmit={handleSubmit} text="Login" />
          </div>
        </div>
      </form>
    </div>
  );
}
