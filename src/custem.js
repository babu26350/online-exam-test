import { useRef, useState } from "react";
import { useEffect } from "react";
import ShowResult from "./result";

const userRes = [];
const radVal = [false, false, false, false];

const Home = () => {
  const [data, setData] = useState(null);
  const [res, setRes] = useState(userRes);
  const [count, setCount] = useState(1);
  const [rad, setRad] = useState(radVal);

  useEffect(() => {
    fetch("https://654f6363358230d8f0cd4325.mockapi.io/content/person/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  let ref = useRef("");

  function setval(d) {
    for (var a = 0; a < radVal.length; a++) {
      radVal[a] = false;
    }
    setRad(radVal);

    var counter = count + d;

    let indexVal = "";
    let rest1 =
      userRes.findIndex((x) => x.QuizeId === JSON.stringify(counter)) === -1;

    if (rest1 === false) {
      indexVal = userRes.findIndex(
        (x) => x.QuizeId === JSON.stringify(counter)
      );

      console.log(indexVal + "i");
      let currentrad = userRes[indexVal].userAnswerId;

      radVal[currentrad] = true;
      setRad(radVal);
    } else {
      for (var i = 0; i < radVal.length; i++) {
        radVal[i] = false;
        setRad(radVal);
      }
    }
  }

  function myFunc(item, key) {
    if (
      data[count - 1].correctAnswerId === JSON.stringify(JSON.parse(key) + 1)
    ) {
      ref.current = "correct";
    } else {
      ref.current = "incorrect";
    }

    console.log(data[count - 1].correctAnswerId + "cor");

    // let rest=  userRes[count-1]===undefined
    let rest =
      userRes.findIndex((x) => x.QuizeId === JSON.stringify(count)) === -1;
    if (rest === false) {
      let replaceIndex = userRes.findIndex(
        (x) => x.QuizeId === JSON.stringify(count)
      );
      userRes[replaceIndex] = {
        Quize: data[count - 1].Quize,
        QuizeId: data[count - 1].id,
        op1: data[count - 1].op1,
        op2: data[count - 1].op2,
        op3: data[count - 1].op3,
        op4: data[count - 1].op4,
        selectedOp: item,
        correctAnswerId: data[count - 1].correctAnswerId,
        userAnswerId: key,
        answerStatus: ref.current,
      };
    } else {
      userRes.push({
        Quize: data[count - 1].Quize,
        QuizeId: data[count - 1].id,
        op1: data[count - 1].op1,
        op2: data[count - 1].op2,
        op3: data[count - 1].op3,
        op4: data[count - 1].op4,
        selectedOp: item,
        correctAnswerId: data[count - 1].correctAnswerId,
        userAnswerId: key,
        answerStatus: ref.current,
      });
    }
    setRes(userRes);
    setval(0);
    console.log(res);
    console.log(userRes);
    console.log(radVal);
    //setval();

    const dataCopy = JSON.parse(JSON.stringify(data));
    setData(dataCopy);
  }
  const increment = () => {
    if (count === data.length) {
      setCount((c) => c + 0);
    } else {
      setCount((c) => c + 1);
    }

    setval(+1);
  };

  const decrement = () => {
    if (count === 1) {
      setCount((c) => c + 0);
    } else {
      setCount((c) => c - 1);
    }

    setval(-1);
  };

  return (
    <div className="quizbox">
      {data && (
        <div className="quiz">
          <p>
            {count}.{data[count - 1].Quize}
            {JSON.parse(rad[0])}
          </p>
          <label>
            <input
              type="radio"
              value="option1"
              checked={JSON.parse(radVal[0])}
              onClick={myFunc.bind(this, data[count - 1].op1, "0")}
            />
            A.{data[count - 1].op1}
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              value="option1"
              checked={JSON.parse(radVal[1])}
              onClick={myFunc.bind(this, data[count - 1].op2, "1")}
            />
            A.{data[count - 1].op2}
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              value="option1"
              checked={JSON.parse(radVal[2])}
              onClick={myFunc.bind(this, data[count - 1].op3, "2")}
            />
            A.{data[count - 1].op3}
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              value="option1"
              checked={JSON.parse(radVal[3])}
              onClick={myFunc.bind(this, data[count - 1].op4, "3")}
            />
            A.{data[count - 1].op4}
          </label>{" "}
          <br />
          {count === 1 || (
            <button className="buttonstyle" onClick={decrement}>
              BACK
            </button>
          )}
          {count === data.length || (
            <button className="buttonstyle" onClick={increment}>
              NEXT
            </button>
          )}
        </div>
      )}

      <ShowResult res={userRes} count={count} />
    </div>
  );
};
export default Home;
