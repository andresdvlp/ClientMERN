import React, { useState } from 'react';
import { Tab } from "semantic-ui-react"
import {RegisterForm, LoginForm} from "../../../components/Admin/Auth" // <-- a veces la ruta de acá falla. toca poner el /RegisterForm
import { Icon } from "../../../assets";
import "./Auth.scss";


export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);



  const panes = [
    {
      menuItem: "Sign In",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      )
    },
    {
      menuItem: "New Account",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    }
  ]


  return (
    <div className='auth'>
      <Icon.Welcome className='logo' />
      <Tab panes={panes} className="auth_forms" activeIndex={activeIndex} onTabChange={(_, data) => setActiveIndex(data.activeIndex)} />


    </div>
  )
}
