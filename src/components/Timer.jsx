import React, {useState, useEffect} from 'react';
import {useTimer} from 'react-timer-hook';
import {Alert, Button, Stack, IconButton, Collapse} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
    createTask
} from "../api/api"

require('./Timer.css');

export default function Timer({
                                  time,
                                  selectedGoalId,
                                  goals,
                                  selectedGoalTitle,
                              }) {

    const [open, setOpen] = React.useState(false);

    const timeInSeconds = parseInt(time)
    const date = new Date();
    date.setSeconds(date.getSeconds() + timeInSeconds);
    const expiryTimestamp = date;

    const [reload, setReload] = useState();

    useEffect(() => {
        if (!reload) {
            return;
        }
        console.log("Timer reload")
        const date = new Date();
        date.setSeconds(date.getSeconds() + time);
        restart(date);
        setReload(false);
    }, [reload]);

    const {
        seconds,
        minutes,
        // hours,
        // days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => handleTimeExpired(),
        autoStart: false
    });

    const handleTimeExpired = () => {
        console.log("onExpired")
        setOpen(true);

        const createTaskResult = createTask(selectedGoalId, "", time);
        createTaskResult.then((res) => {
            if (res.status) {
                console.log("200 OK");
            } else {
                console.log(res.status);
            }
        })
    }

    return (
        <div>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                    sx={{mb: 2}}
                >
                    Time Expired!
                </Alert>
            </Collapse>

            <div style={{textAlign: 'center'}}>
                <h1 id="GoalTitle">{selectedGoalTitle}</h1>
                <div style={{fontSize: '100px'}}>
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                {/*<p>{isRunning ? 'Running' : 'Not running'}</p>*/}
                {/*<button onClick={start}>Start</button>*/}
                {/*<p>{isRunning ? : null}</p>*/}
                <div>
                    <Stack spacing={2} direction="row" justifyContent="center">

                        <Button variant="contained"
                                onClick={() => {
                                    setOpen(false);

                                    const date = new Date();
                                    date.setSeconds(date.getSeconds() + time);
                                    restart(date)
                                }}>Start
                        </Button>
                        <Button variant="contained" onClick={pause}>Pause</Button>
                        <Button variant="contained" onClick={resume}>Resume</Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}