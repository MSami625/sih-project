import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Story from "./StoryChildren";
import Hero from "./Hero"
import StoryAdult from "./StoryAdult"
import StoryChildrenHindi from "./StoryChildrenHindi"
import Details from "./Details"












function App(){

    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" Component={Hero}/>
             <Route path="/story-children" Component={Story} />
             <Route path="/story-adults" Component={StoryAdult} />
             <Route path="/story-children-hindi" Component={StoryChildrenHindi} />
             <Route path="/details" Component={Details} />
          </Routes>
        </Router>
      </>
    );
   }

export default App;
