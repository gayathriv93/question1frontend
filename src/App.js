// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Formcomp from './formComp';
import CustomerDB from './customerDB';
import Editform from './editForm.js';

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <nav >
          <Link className=" text-decoration-none p-2 ms-2 bg-secondary text-white border rounded " to="/CustomerDetails">CustomerDetails</Link>
          <Link className="text-decoration-none p-2  bg-secondary text-white border rounded " to="/CustomerDB">CustomerDB</Link>
          <Link className="text-decoration-none p-2  bg-secondary text-white border rounded " to="/EditableForm">Edit Details</Link>

        </nav>
        <Switch>
          <Route exact path="/CustomerDetails">
            <Formcomp />
          </Route>
          <Route exact path="/CustomerDB">
            <CustomerDB />
          </Route>
         
          <Route path={"/CustomerDB/:id"} >
            <Editform />
          </Route>
          <Route exact path="/">
            <Formcomp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
