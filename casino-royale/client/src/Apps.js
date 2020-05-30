import React from "react";
import Blackjack from "./components/blackjack/app/";

import "./App.css"


import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from 'react-router-dom';

function App() {
    return(

<div class = "app">

    <h1>Welcome to CASINO ROYALE</h1>
    <h2>Choose your game!</h2>


    <Router>
        <div><Link to = "/Blackjack"  button type = "button" className = "btn btn-lg btn-primary">
                        <h4>BLACKJACK</h4>
       </Link> </div>
       <Switch>

        <Route path = "/Blackjack">
            <Blackjack>
    
       
       </Blackjack>
       </Route>
       </Switch>
       
       
       
       <div><Link to = "/Baccarat"  button type = "button" class = "btn btn-lg btn-primary">
                        <h4>BACCARAT (IN Construction)</h4>
                        </Link></div>
       
                        
                        </Router>                
                        </div>  
    )}
 
export default App;
