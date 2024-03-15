//import React,{useEffect } from "react"; 

function Quizlist(props){
function getColor(items){
const call= props.data.find(e=> e.question.color==="gray");
 if(call){

  
call.question.color=""}
  items.color="gray"
}
    return(
      
         <div style={{width:"40%",textAlign:"center",marginLeft:"0px"}} className="mainquizList">
            
          <table id="customers">
            <thead>
              <tr className="tr">
                <th style={{background:"#bc8e8e"}}>S.r.n</th>
                <th>Questions</th>
                </tr>
                </thead>
             <tr/>
                
           { props.data.map((c,i)=>
           <tr className="tr">
                <td>{c.id}</td>

            <td style={{width:"100%", backgroundColor:props.data[i].question.color}} className="quizlist" onClick={()=>props.QuizCountHandler(JSON.parse(c.id),"n")+getColor(props.data[i].question)}>{c.question.label}</td>
            
            </tr>

            )}
          </table> 

            
            
           
            </div>
             
        
    )
}
export default Quizlist