import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         <li>
            <Link to="/HomeTest/">StartTest</Link>
          </li>
          <li>
            <Link to="/ShowResult/">getResult</Link>
          </li>
          <li>
          <Link to="/contact/">CONTACT</Link>
          </li>
          
            
          
        </ul>
       
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;