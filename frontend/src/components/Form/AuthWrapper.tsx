import React, { useState } from "react";
import StyledPanel from "./StyledPanel";
import LoginForm from "./LoginForm";
//import RegisterForm from "../Forms/RegisterForm";
import Button from "../../ui/elements/Button/Button";
import { panels } from "../../helpers/panels";

const AuthWrapper = (props) => {
  const {changeForm} = props; 
  const [state, setState] = useState<'register' | 'login'>('register');
  const handleClick = () => {
    if(state === 'register') {
      setState('login') 
      //changeForm(<RegisterForm/>);
    }else{
      setState('register')
      changeForm(<LoginForm/>)
    }
  }
  const {title, description, button} = panels[state]
    return (
        
            <div className="panel__content--overlay">
                <h1 className="panel__title">{title}</h1>
      <Button text="Sign In" backgroundColor="navy"/>
                <Button text={button}>{}</Button>
            </div>
    )
}

export default AuthWrapper