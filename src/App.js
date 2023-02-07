import React from "react";
import { ReactDOM } from "react-dom/client";
import './App.css'
import IntroPage from "./IntroPage"
import MainContent from './MainContent'


function App() {

  ///// flag for switching component..
  const [switchcompo, setSwichcompo] = React.useState(false);

  function Switch_Compo() {
    setSwichcompo(true);
  };

  return (
    <div className="app">
      {(switchcompo === true) ?
        <MainContent />
        :
        <IntroPage
          onclick={Switch_Compo}
        />}

    </div>
  )
}


export default App;