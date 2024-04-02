import React from "react";
import Home from "./component/home";
import Sidebar from "./component/sidebar";

function App() {
   return (
      <div className="w-[100%] flex">
         <Sidebar />
         <Home />
        
      </div>
   );
}

export default App;