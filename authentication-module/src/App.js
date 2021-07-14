import './App.css';
import { Login } from "./Components/Login";
import {Admin} from "./Components/Admin";
import Teacher from "./Components/Teacher";
import Student from "./Components/Student";
import Parent from "./Components/Parent";
import Forgotpassword from "./Components/Forgotpassword";
import Admindashboard from "./Components/Admindashboard";
import { BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <Login />
              </>
            );
          }}
        ></Route>
        <Route
          path="/admin"
          render={() => {
            return (
              <>
                <Admin />
              </>
            );
          }}
        ></Route>
        <Route
          path="/admindashboard"
          render={() => {
            return (
              <>
                <Admindashboard />
              </>
            );
          }}
        ></Route>
        <Route
          path="/teacher"
          render={() => {
            return (
              <>
                <Teacher />
              </>
            );
          }}
        ></Route>
        <Route
          path="/student"
          render={() => {
            return (
              <>
                <Student />
              </>
            );
          }}
        ></Route>
        <Route
          path="/parent"
          render={() => {
            return (
              <>
                <Parent />
              </>
            );
          }}
        ></Route>
        <Route
          path="/forgotpassword"
          render={() => {
            return (
              <>
                <Forgotpassword />
              </>
            );
          }}
        ></Route>
      </Router>
    </>
  );
}

export default App;
