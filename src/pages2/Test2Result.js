import { Outlet, Link, useLocation } from "react-router-dom";


import { useEffect } from "react";

import { useState } from "react";

const userRes = [];

function ShowResult2() {
 // const {props} =useParams()
  const [Res, setRes] = useState(userRes);
//alert(props)
  useEffect(()=>{
    GetResult();
  });
  const location=useLocation()
  
  function GetResult() {
     const userRes = location.state.map((item) => {
      let attemptedOption = item.options.find((o) => o.checked === true);
      const userResObj = item;
      userResObj.userResId = attemptedOption?.id;
  
      return userResObj;
    });

    setRes(userRes);
  }
 

  return (
    <>
    <nav className="nav">
        <ul>
          <li>
          <Link to="/Home/">HOME</Link>
             </li>
           <li>
            <Link to="/HomeTest2/">START TEST</Link>
          </li>
          <li>
          <Link to="/contact/">CONTACT</Link>
          
          </li>
        </ul>
      </nav>

      <Outlet />
        
      <div className="tablebox">
        
          <table id="customers">
            <thead>
              <tr>
                <th>S.r.n</th>
                <th>QuizeId</th>
                <th>Quize</th>
                <th>option1</th>
                <th>option2</th>
                <th>option3</th>
                <th>option4</th>
                <th>selectedOp Id</th>
                <th>Attempted/UnAttempted</th>
                <th>answerStatus</th>
              </tr>
            </thead>
            { Res.map((res, i) => (
                <tr>
                  
                  <td>{i+1}</td>
                  <td>{Res[i].question.id}</td>
                  <td>{Res[i].question.label}</td>
                  <td>{Res[i].options[0].label}</td>
                  <td>{Res[i].options[1].label}</td>
                  <td>{Res[i].options[2].label}</td>
                  <td>{Res[i].options[3].label}</td>
                  <td>{Res[i].userResId}</td>
                  <td>{Res[i].userResId ? "Attempted" : "Unattempted"}</td>
                  <td>
                    {Res[i].correctAnswerId === Res[i].userResId
                      ? "Correct"
                      : Res[i].userResId
                      ? "incorrect"
                      : "left"}
                  </td>
                </tr>
              ))}
          </table>
        
      </div>
    </>
  );
}
export default ShowResult2;
