import { useContext } from "react"
import { SwitchPageContext } from "../App";


function SwitchLink({text,linkText}) {
  const switchPage = useContext(SwitchPageContext);

  return (
    <p className="text">{text} <a href="#" onClick={()=>{switchPage.setLogin(switchPage.login===1 ? 0 : 1)}}>{linkText}!</a></p>
  )
}

export default SwitchLink