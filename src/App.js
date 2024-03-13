import { BrowserRouter,Route,Routes } from "react-router-dom";

import { Home } from "./pages2/Home";
import { Contact } from "./pages2/contact";
//import ShowResult2 from "./pages2/Test2Result";
import Layout from "./pages2/nav";
import HomeTest2 from "./pages2/test2";
import ShowResult2 from "./pages2/Test2Result";
//import HomeTest2 from "./pages2/test2"
function App() {
  return (<>
   <BrowserRouter> 
  
  
      
    <Routes>
   <Route path="*" element={<Layout />}></Route>
   <Route path= "/" element={<Home />}></Route>
   <Route exact path= "HomeTest2/" element={<HomeTest2 />}></Route>
   <Route exact path= "/ShowResult2/" element={<ShowResult2 />}></Route>
   <Route exacxt path= "/home/" element={<Home/>}></Route>
   <Route exacxt path= "/contact/" element={<Contact/>}></Route>
   
   </Routes>
    </BrowserRouter>
     </>
   );
}

export default App;
