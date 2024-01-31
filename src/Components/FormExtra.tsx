import { useState } from "react";
import ModalShow from "./ModalShow";
import Forgot from "../Pages/ForgetPassword";

export default function FormExtra() {
  const [modal, setShowModal] = useState(false);

  // Define the props that you want to pass to the ModalShow component
  const handleClose = () => {
    setShowModal(false);
  };

  const handleApi = () => {
    ("");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <div
          className="font-medium text-green-600 hover:text-green-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Forgot Your Password?
        </div>


         {modal && (
          <ModalShow
            handleView={modal}
            handleApi={handleApi}
            handleClose={handleClose}
            title="Change Your Password"
            title1={<Forgot />}
  
            // title2="Confirm"
            // cancelBtn="Cancel"
            // Add any other props that are required by ModalShow
          />
        )}
            </div>
    </div>
  );
}
