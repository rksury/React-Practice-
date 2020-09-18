import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './CssFile/First.css';
import FirstApp from "./Component/FirstApp";
import SecondApp from "./Component/SecondApp";
import ThirdApp from "./Component/ThirdApp";
import {A1app} from "./Component/MultipleApp";
import {A2app} from "./Component/MultipleApp";
import {A3app} from "./Component/MultipleApp";
import {A4app} from "./Component/MultipleApp";
import {A5app} from "./Component/MultipleApp";
import MouseTracker from "./Mouse-Component/MouseTracker";
import JSXPerameter from "./Component/JSXPerameter";

class App extends Component{
    render()
    {
        return (
            <div className="App">
                <FirstApp/>
                <Router>
                    <div>
                        <Route path="/s"><SecondApp/></Route>
                        <Route path="/t"><ThirdApp a="Ritesh" b="Suryavanshi"/></Route>
                        <Route path="/m"><MouseTracker/></Route>

                        <Route path="/1"><A1app/></Route>
                        <Route path="/2"><A2app/></Route>
                        <Route path="/3"><A3app/></Route>
                        <Route path="/4"><A4app/></Route>
                        <Route path="/5"><A5app/></Route>

                        <Route path="/jsx"><JSXPerameter/></Route>

                    </div>
                </Router>
            </div>

        );
    }
}

export default App;
