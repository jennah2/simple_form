import Header from "./Header"
import FormInput from "./FormInput"
import Btn from "./Btn"
import SwitchLink from "./SwitchLink"
import { useContext } from "react"
import { SwitchPageContext } from "../App";

function Login() {
  const switchPage = useContext(SwitchPageContext);

  return (
    <div className="container">
      {/* Login Text */}
      <Header text={'Login'} />
      <form onSubmit={()=>{switchPage.setLogin(2)}}>
        {/* Inputs */}
        <FormInput type={'email'} label={'Email'}/>
        <FormInput type={'password'} label={'Password'}/>
        {/* Login Button */}
        <Btn text={'Login'}/>
      </form>
      {/* Sign up Button */}
      <SwitchLink text = {'New member?'} linkText={'Sign Up'}/>
    </div>
  )
}

export default Login