import { useState } from "react";
  function ShowResult(props){
    const [val,setVal]=useState(false)
    function getresult(){
        setVal(!val)
    }
props.res.sort(function(a,b) {
    return a.QuizeId-b.QuizeId
})
return(<> 
            
            <button style={{display:"block",height:"30px"}} type="button" onClick={getresult}>checknow</button>

<div className="tablebox"> 
          
           
        
{val &&
   <table id="customers">
   <thead>
    <tr>
       <th>QuizeId</th>
       <th>Quize</th>
       <th>option1</th>
       <th>option2</th>
       <th>option3</th>
       <th>option4</th>
       <th>selectedOp</th>
       <th>answerStatus</th>   
        </tr>
   </thead>
   {val &&
   props.res.map((res,i)=> 
  
   <tr> 
    <td>{props.res[i].QuizeId}</td>
    <td>{props.res[i].Quize}</td>
    <td>{props.res[i].op1}</td>
    <td>{props.res[i].op2}</td>
    <td>{props.res[i].op3}</td>
    <td>{props.res[i].op4}</td>
    <td>{props.res[i].selectedOp}</td>
    <td>{props.res[i].answerStatus}</td>
     </tr>)}
    </table>
}
     
 </div>
  </>
)
}
export default ShowResult;
