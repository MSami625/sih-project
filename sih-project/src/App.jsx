import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Story from "./Story";
import Hero from "./Hero"
import Details from "./Details"












function App(){

    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" Component={Hero}/>
             <Route path="/story" Component={Story} />
             <Route path="/details" Component={Details} />
          </Routes>
        </Router>
      </>
    );
   }

export default App;
