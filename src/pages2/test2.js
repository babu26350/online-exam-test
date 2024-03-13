import { Outlet, Link, useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

import QuestionsCount from "./QuestionsCounter";
import { useState } from "react";

import Quizlist from "./QuistionsList";


const HomeTest2 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("green");
  
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setTime((c) => c + 1);
      console.log(interval);
      if (time === 20) {
        setnColor();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  if(data){
if(count>=2){
  data[count-2].question.color=""

}
data[count-1].question.color="gray"
if(count<data.length)
data[count].question.color=""
  }
    
  function getResult() {
    navigate("/ShowResult2/", { state: data });
  }
  function QuizCountHandler(item1, item2) {
    if (item2 === "n") {
      setCount(item1);
    } else {
      setCount((c) => c + item1);
    }
  }
  function setnColor() {
    setColor((c) => (c = "red"));
  }
  useEffect(() => {
    fetch("https://654f6363358230d8f0cd4325.mockapi.io/content/ret/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function myFunc(item) {
    for (var i = 0; i < data[count - 1].options.length; i++) {
      data[count - 1].options[i].checked = false;
    }

    item.checked = true;

    setData(JSON.parse(JSON.stringify(data)));
    console.log(data);
  }

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Home/">HOME</Link>
          </li>

          <li className="active">
            <Link to="/HomeTest2/">START TEST</Link>
          </li>
          <li>
            <Link to="/contact/">CONTACT</Link>
          </li>
          <li className="contact" onClick={getResult}>
            <Link>SUBMIT</Link>
          </li>
        </ul>
        <ul
          style={{
            width: "150px",
            height: "40px",
            background:"white",
            padding: "10px",
            marginRight: "30px",
            borderRadius:"10px"
          }}
          
        >
          <span style={{ color: color,display:"inline-block",marginTop:"7px",marginLeft:"11px" }}>
            {time === 50 && getResult()}Running:{time}/50
          </span>
        </ul>
      </nav>

      <Outlet />

      {data && (
        // showResult ||(

        <>
          <div className="asidemain">
            <Quizlist QuizCountHandler={QuizCountHandler} data={data} count={count} />
            <div className="quizbox">
              <div className="headerbox">
                <h2 className="headstyle">ONLINE TEST</h2>
              </div>

              <div className="countbox">
                <div style={{ textAlign: "left" }} className="questionList">
                  <p style={{color:"white"}} className="question bottom">
                    {data[count - 1].question.id}.
                    {data[count - 1].question.label}
                  </p>

                  <br />

                  <label className="questions">
                    <input
                      type="radio"
                      value="option1"
                      checked={data[count - 1].options[0].checked}
                      onClick={myFunc.bind(this, data[count - 1].options[0])}
                    />
                    A.{data[count - 1].options[0].label}
                  </label>
                  <br />
                  <br />
                  <label className="questions">
                    <input
                      type="radio"
                      value={data[count - 1].options[1].label}
                      checked={data[count - 1].options[1].checked}
                      onClick={myFunc.bind(this, data[count - 1].options[1])}
                    />
                    B.{data[count - 1].options[1].label}
                  </label>
                  <br />
                  <br />

                  <label className="questions">
                    <input
                      type="radio"
                      value="option3"
                      checked={data[count - 1].options[2].checked}
                      onClick={myFunc.bind(this, data[count - 1].options[2])}
                    />
                    B.{data[count - 1].options[2].label}
                  </label>
                  <br />
                  <br />
                  <label className="questions">
                    <input
                      type="radio"
                      value="option1"
                      checked={data[count - 1].options[3].checked}
                      onClick={myFunc.bind(this, data[count - 1].options[3])}
                    />
                    D.{data[count - 1].options[3].label}
                  </label>
                  <br />
                  <br />

                  <QuestionsCount
                    QuizCountHandler={QuizCountHandler}
                    count={count}
                    data={data}
                  />
                </div>

                {/*  <div className="questionList">
          <p  className="question ">
            <h5 style={{color:color}}>{time===50 && getResult()}Running:{time}/50</h5>
            </p>
          <br />
          *<button
          className="buttonstyle"
          onClick={()=>setShowResult(true)+ getResult}
        >
          SUBMIT
        </button>*/}

                {/* <button
          className="buttonstyle"
          onClick={getResult}
        >
          SUBMIT
        </button>
      </div>*/}
              </div>
              <div className="headerbox">
                <h6>
                  Note:- Every question have equal marks ,Try to attempt the
                  question within time limited time duration
                </h6>
              </div>
            </div>
          </div>
        </>
        //)
      )}

      {/*  {showResult &&  <ShowResult2 data={data} />} */}
    </>
  );
};
export default HomeTest2;
