
import { useEffect } from "react";
import ShowResult from "./result";
import { useState } from "react";
const userRes = [];

const HomeTest = () => {
  const [data, setData] = useState(null);

  const [count, setCount] = useState(1);
  

  useEffect(() => {
    fetch("https://654f6363358230d8f0cd4325.mockapi.io/content/ret/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  function myFunc(item) {
    for(var i=0;i<data[count-1].options.length;i++){
      data[count-1].options[i].checked=false
   
  }
  
    item.checked=true
    console.log(data)
  setData(JSON.parse(JSON.stringify(data)))
    
    
  }
function setValue(){
  alert("yes")
  //data[count].question.color="gray"
}
setValue()
  const increment = () => {

    if (count === data.length) {
      setCount((c) => c + 0);
    } else {
      setCount((c) => c + 1);
      
    }

    
  };

  const decrement = () => {
    if (count === 1) {
      setCount((c) => c + 0);
    } else {
      setCount((c) => c - 1);
    }

    
  }

  
  return (
    <div className="quizbox">
      {data && (
        <div className="quiz">
          <p>
          {data[count-1].question.id}.{data[count-1].question.label}
          </p>
          <label>
            <input
              type="radio"
              value="option1"
              checked={data[count-1].options[0].checked}
              onClick={myFunc.bind(this,data[count-1].options[0])}
            />
            A.{data[count-1].options[0].label}
          </label>{" "}
          <br />
          <label>
          <input
              type="radio"
             value={data[count-1].options[1].label}
            
              checked={data[count-1].options[1].checked}
              onClick={myFunc.bind(this,data[count-1].options[1])}
            />
            B.{data[count-1].options[1].label}
            </label>
          <br />
          <label>
          <input
              type="radio"
              value="option3"
              checked={data[count-1].options[2].checked}
              onClick={myFunc.bind(this,data[count-1].options[2])}
            />
            B.{data[count-1].options[2].label}
            c.{}
          </label>
          <br />
          <label>
          <input
              type="radio"
              value="option1"
              checked={data[count-1].options[3].checked}
              onClick={myFunc.bind(this,data[count-1].options[3])}
            />
          D.{data[count-1].options[3].label}
            
          </label>
          <br />
          {count === 1 || (
            <button className="buttonstyle" onClick={decrement}>
              BACK
            </button>
          )}
          {count === data.length+1 || (
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
export default HomeTest;
