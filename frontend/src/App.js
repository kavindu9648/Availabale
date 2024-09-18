import "./App.css";
import Header from "./components/header";
import Addstudent from "./components/Addstudent";
import AllStudents from "./components/AllStudents";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <AllStudents />
        <Addstudent />
      </div>
    </Router>
  );
}

export default App;
