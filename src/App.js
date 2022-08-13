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
    const DEFAULT_TIME = 3;

    const [user, setUser] = useState();
    const [goals, setGoals] = useState();
    const [selectedGoalId, setSelectedGoalId] = useState();
    const [selectedGoalTitle, setSelectedGoalTitle] = useState();

    // user login
    useEffect(() => {
        if (!user) {
            return;
        }
        getGoals(user.id).then(res => {
            if (res.status === 200) {
                setGoals(res.data);
            }
        });
    }, [user]);

    // goals
    useEffect(() => {
    }, [goals]);

    useEffect(() => {
        if(!goals || !selectedGoalId) {
            return;
        }
        setSelectedGoalTitle(goals[selectedGoalId - 1].title);
    }, [selectedGoalId]);

    return (
        <div className="App">
            <Header
                setUser={setUser}
            />
            <div id="Content">
                <Timer time={DEFAULT_TIME} selectedGoalTitle={selectedGoalTitle}/>
                <hr/>
                <Goal
                    user={user}
                    setGoals={setGoals}
                />
                <hr/>
                <Task
                    goals={goals}
                    setSelectedGoalId={setSelectedGoalId}
                />
            </div>
        </div>
    );
}

export default App;
