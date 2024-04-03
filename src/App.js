import React from "react";
import Home from "./component/home";
import Sidebar from "./component/sidebar";

function App() {
   return (
      <div className="w-full flex-col justify-center">
      <div className="mt-3">
         <Sidebar />
      </div>
      <div className="mt-3">
      <Home />
      </div>
    </div>
    
   );
}

export default App;