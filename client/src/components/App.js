import React, { Component } from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Navbar}/>
            <Route path="/users" component={Users} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
