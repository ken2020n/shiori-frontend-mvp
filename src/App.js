import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer";
import Goal from "./components/Goal";
import Task from "./components/Task";
import React, {useState, useEffect} from 'react';
import {
    getGoals
} from "./api/api";

function App() {
    // const DEFAULT_TIME = 25 * 60;
    const DEFAULT_TIME = 1;

    const [user, setUser] = useState();
    const [goals, setGoals] = useState();
    const [selectedGoal, setSelectedGoal] = useState();

    // user login
    useEffect(() => {
        if (!user) {
            return;
        }
        getGoals(user.id).then(res => {
            if(res.status === 200) {
                setGoals(res.data);
            }
        });
    }, [user]);

    // goals
    useEffect(() => {
        console.log("GOALS: ", goals);
    }, [goals]);


    return (
        <div className="App">
            <Header
                setUser={setUser}
            />
            <div id="Content">
                <Timer time={DEFAULT_TIME}/>
                <hr/>
                <Goal/>
                <hr/>
                <Task goals={goals}/>
            </div>
        </div>
    );
}

export default App;
