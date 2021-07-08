import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Genres from './components/genres/Genres';
import Picks from './components/cards/Cards';
import Schedule from './components/schedule/Schedule';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/picks" component={Picks} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/genres" component={Genres} />
            {/* <ComingSoon /> */}
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
