import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />
            <h1>I AM PROFILE PAGE</h1>
          </Route>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Tinder Cards */}
        {/* Button below tinder cards */}

        {/* Chat screen */}
        {/* Individual Chat Screen */}
      </Router>
    </div>
  );
}

export default App;
