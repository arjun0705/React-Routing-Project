import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mounting from './Components/Mounting';

import Updating from './Components/Updating';
import Unmounting from './Components/Unmounting';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          </nav>
          <hr />
          <Switch>
              <Route exact path='/mounting' component={Mounting} />
              <Route path='/unmounting' component={Unmounting} />
              <Route path='/updating' component={Updating} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;