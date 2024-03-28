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
            <Link to="/HomeTest/">TEST</Link>
          </li>
          <li>
            <Link to="/ShowResult/">RESULT</Link>
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