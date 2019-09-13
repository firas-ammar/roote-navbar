import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


class App extends Component {
      
      render() {
        return (
          <Router>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Services'} className="nav-link" >
            <UncontrolledButtonDropdown>
        <DropdownToggle >
        Services
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >For entrepreneurs</DropdownItem>
          <DropdownItem divider /> 
          <DropdownItem>For Students</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>For Hobbyists</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
            </Link></li>
            <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
            </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Contact' component={Contact} />
              <Route  exact path='/Services' component={Services} />
          </Switch>
          </div>
          </Router>

        );
      }
    }

export default App;
