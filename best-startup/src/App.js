import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap'
import Navibar from './Components/Navibar';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';


function App() {
  return (
    <>
    <Router>
    <Navibar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/about' component={About} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
