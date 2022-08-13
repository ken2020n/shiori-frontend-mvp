import React, {useState, useEffect} from 'react';
import {Stack, Button, Icon, TextField} from '@mui/material';
import {
    createGoal, getGoals
} from "../api/api";

require('./Goal.css');

export default function Goal({user, setGoals}) {

    const [goalTitle, setGoalTitle] = useState("");
    const handleCreateGoal = () => {
        if(!user || !goalTitle) {
            return;
        }

        console.log("user: ", user);
        console.log("goal: ", goalTitle);

        createGoal(user.id, goalTitle).then(res => {
            if (res.status === 200) {
                console.log(res.data);
                setGoals(res.data);
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