import Forgot from "../Components/Forgot"
import Header from "../Components/Header"
import Input from "../Components/Input"


const ForgetPassword = () => {
  return (
    <div>
        <Header
                heading="Forgot Password"
                paragraph="Enter your email for
                 the verification proccess,we will send 4 digits code to your email."
                linkName="Signup"
                linkUrl="/signup"
                />
                <Forgot/>
    </div>
  )
}

export default ForgetPassword
