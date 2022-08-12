import React, {useState, useEffect} from 'react';
import {Stack, Button, Icon, TextField} from '@mui/material';

require('./Goal.css');

export default function Goal() {

    const [goal, setGoal] = useState("");
    const handleCreateGoal = () => {
        console.log("goal: ", goal);
    }

    return (
        <div>
            <Stack spacing={2} direction="row">
                <TextField
                    fullWidth
                    id=""
                    label="Goal"
                    variant="outlined"
                    onChange={(event) => setGoal(event.target.value)}
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