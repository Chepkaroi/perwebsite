import React from "react";
import Home from "./component/home";
import Sidebar from "./component/sidebar";
import About from "./component/about";
import Contact from "./component/contact";

function App() {
   return (
      <div className="flex flex-wrap ml-[7%]  justify-center">
         <div className="w-full  md:w-1/4">
            <Sidebar />
         </div>
         <div className="w-full md:w-3/4 flex flex-wrap justify-center">
            <Home />
            <About />
            <Contact />
         </div>
      </div>
   );
}

export default App;
