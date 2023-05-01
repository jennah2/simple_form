import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import SignedUp from "./components/SignedUp";
import { useState, createContext } from "react";

export const SwitchPageContext = createContext();

function App() {
  const [login, setLogin] = useState(0);

  const switchPageFunction = () => {
    switch (login) {
      case 0:
        return <Login />;
      case 1:
        return <SignUp />;
      case 2:
        return <LoggedIn />;
      case 3:
        return <SignedUp />;
    }
  };

  return (
    <SwitchPageContext.Provider value={{ login, setLogin }}>
      {switchPageFunction()}
    </SwitchPageContext.Provider>
  );
}

export default App;
