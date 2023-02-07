import React from "react";
import { ReactDOM } from "react-dom/client";
import './Question.css'

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i].value;
        array[i].value = array[j].value;
        array[j].value = temp;
    };


}




function Question(prop) {

    const [optionObj, setOptionobj] = React.useState([]);

    React.useEffect(() => {
        setOptionobj(prop.option);
        shuffleArray(optionObj);
    }, [prop.question_name])

    ///// check out

    function checkOut(id) {
        setOptionobj(prev => prev.map(item => {
            return (item.id === id) ? { ...item, choosen: !item.choosen } : item;
        }))
    };

    let opt_no = 0;



    const options = optionObj.map(item => {
        opt_no = opt_no + 1;
        let color_option = "#897fff";
        if (prop.correct_answer === item.value && prop.Answercheck === true) {
            color_option = "green";
        }
        else if (item.choosen === true && prop.Answercheck === true) {
            color_option = "red";
        }
        else if (item.choosen === true) {
            color_option = "rgb(27 7 255)"
        }
        return (
            <p onClick={() => checkOut(item.id)} style={{ backgroundColor: color_option }} id="item">{prop.que_no}.{opt_no} : {item.value}</p>
        )
    });

    return (

        <div className="form">
            <h3>Q{prop.que_no} : {prop.question_name}</h3>
            <div className="options">
                {options}
            </div>
        </div>

    )
};


export default Question;




/*if(prop.correct_answer === item.value && check_answer === true)
        {
            color_option = "green";
        }
        else if(item.choosen === true && check_answer === true)
        {
            color_option = "red";
        }
        else if(item.choosen === true)
        {
            color_option = "rgb(27 7 255)"
        }*/