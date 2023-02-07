import React from "react";
import { ReactDOM } from "react-dom/client";
import './App.css'


function IntroPage(prop) {

    


    return (
        <div className="intropage">
            <h1>Quizzical</h1>
            <p>Play a quick quiz to check, Where you stand!</p>
            <button onClick={prop.onclick}>Start Quiz</button>


            <br />
            <br />
            <p>Made With ❤️ by @vishvamitra</p>
        </div>
    )
}


export default IntroPage;