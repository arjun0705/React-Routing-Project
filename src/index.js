
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Mounting from './Components/Mounting'
import Updating from './Components/Updating';
import Unmounting from './Components/Unmounting';


const routing = (
  <Router>
    <div style={{ backgroundColor: 'yellowgreen', textAlign: 'center', padding: '40px', margin: '10px', border: '2px solid black' }}>


      <h1 style={{ color: "black", border: '2px solid black', backgroundColor: 'grey', }}> Component Life Cycle </h1>

      <nav style={{ display: 'inline-block' }}>
        <button style={{ border: '1.5px solid black' }}>
          <Link style={{ padding: '8px', display: 'inline-block', color: 'black' }} to="/mounting"> Mounting </Link>
        </button>
        {'  '}

        <button style={{ border: '1.5px solid black' }}>
          <Link style={{ padding: '8px', display: 'inline-block', color: 'black' }} to="/updating"> Updating </Link>
        </button>
        {'  '}
        <button style={{ border: '1.5px solid black' }}>
          <Link style={{ padding: '8px', display: 'inline-block', color: 'black' }} to="/unmounting"> Unmounting </Link>
        </button>
      </nav>


    </div>

    <Route exact path="/" component={App} />
    <Route path="/mounting" component={Mounting} />
    <Route path="/updating" component={Updating} />
    <Route path="/unmounting" component={Unmounting} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));