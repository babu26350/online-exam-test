import { BrowserRouter,Route,Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Contact } from "./pages/contact";

import Layout from "./pages/nav";
import HomeTest from "./pages/TestRun";
import ShowResult from "./pages/TestResult";

function App() {
  return (<>
   <BrowserRouter> 
  
  
      
    <Routes>
   <Route path="*" element={<Layout />}></Route>
   <Route path= "/" element={<Home />}></Route>
   <Route exact path= "HomeTest/" element={<HomeTest />}></Route>
   <Route exact path= "/ShowResult/" element={<ShowResult />}></Route>
   <Route exacxt path= "/home/" element={<Home/>}></Route>
   <Route exacxt path= "/contact/" element={<Contact/>}></Route>
   
   </Routes>
    </BrowserRouter>
     </>
   );
}

export default App;
