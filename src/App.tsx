import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";


function App() {
  
  return (
      <>
        <Router>
          <Header/>
          <AnimRoutes/>
        </Router>
      </>    
  )
}



export default App
