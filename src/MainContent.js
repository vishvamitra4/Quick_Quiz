import React from "react";
import { ReactDOM } from "react-dom/client";
import './App.css'
import Question from "./components/Question";
import nextId from "react-id-generator";

function MainContent() {



    ///////////////////// //////  ///// ////// ///// ///////// /////  //////
    const [Qarr, setQarr] = React.useState([]);
    const [flag, setflag] = React.useState(true);
    const [check, setcheck] = React.useState(false);

    /////// get new questions......
    React.useEffect(() => {

        setcheck(false);
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then((response) => response.json())
            .then((data) => setQarr(data.results));

    }, [flag])


    let que_no = 0;

    const AllQuestion = Qarr.map(item => {
        const option = [...item.incorrect_answers];
        option.push(item.correct_answer);
        const Obj_option = [];
        for (let i = 0; i < 4; i++) {
            Obj_option.push(
                {
                    value: option[i],
                    choosen: false,
                    id: nextId()
                }
            )
        }

        que_no = que_no + 1;
        return (

            <Question
                que_no={que_no}
                question_name={item.question}
                option={Obj_option}
                Answercheck={check}
                correct_answer={item.correct_answer}
            />
        )
    })





    return (
        <div className="main-content">
            <h1>Quizzical</h1>
            {AllQuestion}
            <button onClick={() => setcheck(true)}>Check Answer</button>
            <button onClick={() => setflag(prev => !prev)}>New Questions</button>
        </div>
    )
}


export default MainContent;