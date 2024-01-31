import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ToastifyShow from "../Components/ToastifyShow";

const UserProfile = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello, Welcome to User Profile</h1>
      <Button
        onClick={() => {
          localStorage.clear();

          navigate("/login");
          ToastifyShow("Logged out successfully","success")
        }}
      >
        Go Back To Login Screen
      </Button>
    </div>
  );
};

export default UserProfile;
