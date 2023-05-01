import Header from "./Header"
import FormInput from "./FormInput"
import Btn from "./Btn"
import SwitchLink from "./SwitchLink"
import { useContext } from "react"
import { SwitchPageContext } from "../App";

function SignUp() {
  const switchPage = useContext(SwitchPageContext);

  return (
    <div className="container">
      {/* Login Text */}
      <Header text={'Sign Up'} />
      <form onSubmit={()=>{switchPage.setLogin(3)}}>
        {/* Inputs */}
        <FormInput type={'text'} label={'First Name'}/>
        <FormInput type={'text'} label={'Last Name'}/>
        <FormInput type={'email'} label={'Email'}/>
        <FormInput type={'password'} label={'Password'}/>
        <FormInput type={'password'} label={'Confirm Password'}/>
        {/* Login Button */}
        <Btn text={"Sign Up"}/>
      </form>
      {/* Sign up Link */}
      <SwitchLink text = {'Already a member?'} linkText={'Login'}/>
    </div>
  )
}

export default SignUp