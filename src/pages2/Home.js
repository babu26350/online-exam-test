
import { Outlet, Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
 export const Home = ()=>{

  const Student={
    firstName:"babu",
    lastName:"joshi",
    fullName:function(){
   return   this.firstName+this.lastName
    }}
   const Student1={firstName:"raju",
            lastName:"joshi"
          }
   const fullname = Student.fullName.call(Student1)
console.log(fullname)

  
   return (<> 
     <nav className="nav">
        <ul>
          
        <li className="active">
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

        <div className="asidemain">


        <h1 className="h1">Welcome To  Online Test  </h1>
        </div>
         </>
    )
    
     }
     