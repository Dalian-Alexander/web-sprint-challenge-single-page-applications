import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/pizza'>
              <Form />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
};
export default App;
