
import { Outlet, Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
 export const Home = ()=>{

  

  
   return (<> 
     <nav className="nav">
        <ul>
          
        <li className="active">
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

        <div className="asidemain">


        <h1 className="h1"><Link to="/HomeTest/">Welcome To Online Test </Link>  </h1>
        </div>
         </>
    )
    
     }
     