import { useState } from "react";
import Input from "../Components/Input";
import ToastifyShow from "../Components/ToastifyShow";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

// Dummy user data
let users = [
  { token: "12345", password: "12345" },
  // ... other users
];

export default function Forgot() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = users.find((u) => u.token === token);
    if (user && (user.password === currentPassword || currentPassword === "")) {
      user.password = newPassword;
      ToastifyShow("Password successfully changed!", "success");
      navigate("/login");
    } else {
      ToastifyShow("Invalid credentials. Please try again.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <Input
        handleChange={(e: any) => setToken(e.target.value)}
        value={token}
        labelText="Token"
        labelFor="token"
        id="token"
        name="token"
        type="token"
        isRequired={true}
        placeholder="Enter your token"
      />
      <Input
        handleChange={(e: any) => setCurrentPassword(e.target.value)}
        value={currentPassword}
        labelText="Current Password"
        labelFor="currentPassword"
        id="currentPassword"
        name="currentPassword"
        type="password"
        // isRequired={true}
        placeholder="Enter your current password (if know)"
      />
      <Input
        handleChange={(e: any) => setNewPassword(e.target.value)}
        value={newPassword}
        labelText="New Password"
        labelFor="newPassword"
        id="newPassword"
        name="newPassword"
        type="password"
        isRequired={true}
        placeholder="Enter your new password"
      />
      <Button handleSubmit={handleSubmit} text="Change Password" />
    </form>
  );
}
