import { Outlet, Link, useLocation } from "react-router-dom";


import { useEffect } from "react";

import { useState } from "react";

const userRes = [];

function ShowResult() {
 // const {props} =useParams()
  const [Res, setRes] = useState(userRes);
  const [Res1, setRes1] = useState(Res);
  
  const [selectedValue, setSelectedValue] = useState("");
//alert(props)

  useEffect(()=>{
    GetResult();
    
  },[]);
  
  const location=useLocation()
  
  function GetResult() {
    
     const userRes = location.state.map((item) => {
      let attemptedOption = item.options.find((o) => o.checked === true);
      const userResObj = item;
      userResObj.userResId = attemptedOption?.id;
  
      return userResObj;
    });

    setRes(userRes);
    setRes1(userRes);

    console.log(userRes)
  }
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  
  
    if(value==="Left"){
 var val0=Res.filter(res=>res.userResId===undefined)
 setRes1(val0)   
  }

   else if(value==="Correct"){
   let val1=Res.filter(res=>res.userResId===res.correctAnswerId)
   
    setRes1(val1)     
  }
  else if(value==="All"){
    
    
     setRes1(Res)     
   }
     else {
    var val2=Res.filter(res=>res.userResId!==res.correctAnswerId && res.userResId!== undefined)
     setRes1(val2)   
     }

  
     // Pass the selected value to the parent component
  };

  return (
    <>
    <nav className="nav">
        <ul>
          <li>
          <Link to="/Home/">HOME</Link>
             </li>
           <li>
            <Link to="/HomeTest/">TEST</Link>
          </li>
          <li>
          <Link to="/contact/">CONTACT</Link>
          
          </li>
        </ul>
      </nav>

      <Outlet />
       {Res && 
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
                <th>answerStatus
                <label htmlFor="filterSelect"></label>
      <select id="filterSelect" value={selectedValue} onChange={handleFilterChange}>
        
        
        <option value="All">All</option>
        <option value="Incorrect">Incorrect</option>
        <option value="Correct">Correct</option>
        <option value="Left">Left</option>
      </select>
                </th>
              </tr>
            </thead>
             {Res1.map((res, i) => (
                <tr>
                  
                  <td>{i+1}</td>
                  <td>{res.question.id}</td>
                  <td>{res.question.label}</td>
                 <td>{res.options[0].label}</td> 
                  <td>{res.options[1].label}</td>
                  <td>{res.options[2].label}</td>
                  <td>{res.options[3].label}</td>
                  <td>{res.userResId}</td>
                  <td>{res.userResId ? "Attempted" : "Unattempted"}</td>
                  <td>
                    {res.correctAnswerId === res.userResId
                      ? "Correct"
                      : res.userResId
                      ? "incorrect"
                      : "left"}
                  </td>
                </tr>
                    
              ))}

          </table>
            
      </div>
}
    </>
  );
}
export default ShowResult;
