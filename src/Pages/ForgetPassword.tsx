import { useState } from "react";
import { loginFields } from "../Components/FormFields";
import Input from "../Components/Input";
import Button from "../Components/Button";

const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

export default function Forgot() {
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
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field: any) => (
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
      <Button handleSubmit={handleSubmit} text="Update Password" />
    </form>
  );
}
