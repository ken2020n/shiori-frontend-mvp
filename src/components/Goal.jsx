import React, {useState, useEffect, useRef} from 'react';
import {Stack, Button, Icon, TextField} from '@mui/material';
import {
    createGoal, getGoals
} from "../api/api";

require('./Goal.css');

export default function Goal({user, setGoals}) {

    const inputRef = useRef(null);

    const [goalTitle, setGoalTitle] = useState("");
    const handleCreateGoal = () => {
        if(!user || !goalTitle) {
            return;
        }

        console.log("user: ", user);
        console.log("goal: ", goalTitle);
        console.log("handleCreateGoal");

        createGoal(user.id, goalTitle).then(res => {
            console.log("GOGOGO");
            if (res.status === 200) {
                getGoals(user.id).then(res => {
                    if (res.status === 200) {
                        setGoals(res.data);
                    }
                });
            }
        });
    }

    return (
        <div>
            <Stack spacing={2} direction="row">
                <TextField
                    fullWidth
                    id=""
                    label="Goal"
                    inputRef={inputRef}
                    variant="outlined"
                    onChange={(event) => setGoalTitle(event.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleCreateGoal}
                >
                    Create
                </Button>
            </Stack>
        </div>
    );
}