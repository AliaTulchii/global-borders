import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import "./utils/i18n";
import Footer from "./section/Footer";

function App() {
  
  return (
      <>
        <Router>
          <Header/>
          <AnimRoutes/>
          <Footer/>
        </Router>
      </>    
  )
}



export default App
