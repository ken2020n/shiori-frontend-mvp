import React, {useState, useEffect} from 'react';
import {useTimer} from 'react-timer-hook';
import {Alert, IconButton, Collapse} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Timer({time, selectedGoalTitle}) {


    const [open, setOpen] = React.useState(false);

    const timeInSeconds = parseInt(time)
    const date = new Date();
    date.setSeconds(date.getSeconds() + timeInSeconds);
    const expiryTimestamp = date;

    const [reload, setReload] = useState();

    useEffect(() => {
        if(!reload) {
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
                    Close me!
                </Alert>
            </Collapse>

            <div style={{textAlign: 'center'}}>
                <h1>{selectedGoalTitle}</h1>
                <div style={{fontSize: '100px'}}>
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={() => {

                    setOpen(false);

                    const date = new Date();
                    date.setSeconds(date.getSeconds() + time);
                    restart(date)
                }}>Restart
                </button>
            </div>
        </div>
    );
}