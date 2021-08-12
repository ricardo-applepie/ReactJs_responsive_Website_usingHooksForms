import "./styles/custom.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage  from "./pages/homepage/homepage";
import BookADemo from "./pages/book_a__demo/bookADemo";
import Login from "./pages/login/Login";
import LoginReset from "./pages/login_reset/LoginReset";
import ResetUpdate from "./pages/rest_update/reset_update";
import LoginConfirmation from "./pages/rest_confirm/LoginConfirmation";
import Register from "./pages/register/register";
function App() {
  return (
    <div className="page__width">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route  path="/book">
            <BookADemo/>
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route  path="/confirm">
            <LoginConfirmation/>
          </Route>
          <Route  path="/reset">
            <LoginReset/>
          </Route>
          <Route  path="/update">
            <ResetUpdate/>
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
         
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
