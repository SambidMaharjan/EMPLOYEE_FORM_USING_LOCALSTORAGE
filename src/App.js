import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeRecord from "./EmployeeRecord";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EmployeeForm />
        </Route>
        <Route path="/employee-record">
          <EmployeeRecord />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
