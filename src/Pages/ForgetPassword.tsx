import { useState } from "react";
import Input from "../Components/Input";
import ToastifyShow from "../Components/ToastifyShow";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

// Dummy user data
let users = [
  { email: "user@test.com", password: "12345" },
  { email: "admin@test.com", password: "67890" },
  // ... other users
];

export default function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = users.find((u) =>console.log(u,"uuuuu"));
    if (user && (user.password === currentPassword || currentPassword === "")) {
      console.log("hello123", user);
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
        handleChange={(e: any) => setEmail(e.target.value)}
        value={email}
        labelText="Email"
        labelFor="email"
        id="email"
        name="email"
        type="email"
        isRequired={true}
        placeholder="Enter your email"
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
