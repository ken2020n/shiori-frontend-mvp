// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer";
import Goal from "./components/Goal";
import Task from "./components/Task";
import React, {useState, useEffect} from 'react';

function App() {
    // const DEFAULT_TIME = 25 * 60;
    const DEFAULT_TIME = 1;

    return (
        <div className="App">
            <Header
            />
            <div id="Content">
                <Timer time={DEFAULT_TIME}/>
                <hr/>
                <Goal/>
                <hr/>
                <Task/>
            </div>
            {/*<header className="App-header">*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {/*<p>*/}
            {/*  Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<a*/}
            {/*  className="App-link"*/}
            {/*  href="https://reactjs.org"*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  Learn React*/}
            {/*</a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
