import React from "react";
import Home from "./component/home";
import Sidebar from "./component/sidebar";

function App() {
   return (
      <div className="w-ful flex flex-wrap justify-center">
      <div className="mt-3">
         <Sidebar />
      </div>
      <div className="mt-3 flex-wrap max-w-[700px]">
      <Home />
      </div>
    </div>
    
   );
}

export default App;