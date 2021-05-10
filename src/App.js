import React from 'react';
import './App.css';
// import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from "./components/home/Home";
// import Genres from './components/genres/Genres';
import ComingSoon from './components/comingSoon/ComingSoon';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genres" component={Genres} />
        </Switch> */}
        <ComingSoon />
      </Router>
    </>
  );
}

export default App;
