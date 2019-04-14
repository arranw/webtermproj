import React, { useState, useEffect } from "react";
import "./quiz.css";
import Answer from "./Answer";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [testResult, setTestResult] = useState();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const questions = [];
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmldoc = xhr.responseText;
        var XMLParser = require("react-xml-parser");
        var x = new XMLParser().parseFromString(xmldoc);

        const qrecs = x.getElementsByTagName("question");
        for (let i = 0; i < qrecs.length; i++) {
          const question = {
            num: "",
            title: "",
            a: "",
            b: "",
            c: "",
            d: ""
          };
          question.num = qrecs[i].children[0].value;
          question.title = qrecs[i].children[1].value;
          question.a = qrecs[i].children[2].value;
          question.b = qrecs[i].children[3].value;
          question.c = qrecs[i].children[4].value;
          question.d = qrecs[i].children[5].value;
          questions.push(question);
        }
        const arecs = x.getElementsByTagName("rightanswers");
        setRightAnswers(arecs[0].value.split(","));
        setChosenAnswers(new Array(qrecs.length).fill(""));
      }
    };
    xhr.open("GET", "res/FinalQuiz.xml", true);
    xhr.send();
    setQuestions(questions);
  }, []);

  function chooseAnswer(num, choice) {
    if (testResult === undefined) {
      let temp = [...chosenAnswers];
      temp[num - 1] = choice;
      setChosenAnswers(temp);
    }
  }

  function checkTest() {
    let score = 0;
    for (let i = 0; i < rightAnswers.length; i++) {
      if (rightAnswers[i].toUpperCase() === chosenAnswers[i].toUpperCase()) {
        score++;
      }
    }
    setTestResult(score);
  }

  return (
    <div className="container">
      <h1 className="display-4 text-center">Final Quiz</h1>
      {questions.map(question => (
        <div key={question.num} className="mb-3">
          <h5>
            {question.num}. {question.title}
          </h5>
          <ul className="list-group">
            <Answer
              text={question.a}
              letter="A"
              num={question.num}
              chooseAnswer={chooseAnswer}
              chosenAnswers={chosenAnswers}
            />
            <Answer
              text={question.b}
              letter="B"
              num={question.num}
              chooseAnswer={chooseAnswer}
              chosenAnswers={chosenAnswers}
            />
            <Answer
              text={question.c}
              letter="C"
              num={question.num}
              chooseAnswer={chooseAnswer}
              chosenAnswers={chosenAnswers}
            />
            <Answer
              text={question.d}
              letter="D"
              num={question.num}
              chooseAnswer={chooseAnswer}
              chosenAnswers={chosenAnswers}
            />
          </ul>
        </div>
      ))}
      <div className="row">
        <div className="col-md-4">
          <button
            className="btn btn-secondary form-control mb-3"
            onClick={() => {
              setTestResult();
              setChosenAnswers(new Array(rightAnswers.length).fill(""));
            }}
          >
            Reset
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary form-control mb-3"
            onClick={() => {
              checkTest();
            }}
          >
            Check
          </button>
        </div>
        <div className="col-md-4">
          <h2 className="text-center">
            {testResult}/{rightAnswers.length}
          </h2>
        </div>
      </div>
    </div>
  );
}
