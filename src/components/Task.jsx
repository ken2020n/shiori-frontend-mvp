import React, {useState, useEffect} from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    DialogContent,
    DialogActions,
    DialogTitle,
    Button,
    Dialog,
    DialogContentText
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    deleteGoal, getGoals
} from "../api/api";


require('./Task.css');

export default function Task({goals, setSelectedGoalId, user, setGoals}) {

    const [toDeleteGoalId, setToDeleteGoalId] = useState();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setSelectedGoalId(index);
    };

    const handleListItemDoubleClick = (event, id) => {
        console.log("DOUBLE CLICK!!");
        console.log(id);
    };

    const handleDeleteClick = (event, id) => {
        console.log("DELETE CLICK!!");
        console.log(id);
        setToDeleteGoalId(id);
        handleClickOpen(id);
    };

    const confirmDelete = (event, id) => {
        console.log("Confirm ID:", toDeleteGoalId);
        deleteGoal(toDeleteGoalId).then(res => {
            if (res.status === 200) {
                console.log("DELETED!!");
                getGoals(user.id).then(res => {
                    if (res.status === 200) {
                        setGoals(res.data);
                    }
                });
            }
        });
        handleClose();
    }

    const cancelDelete = (event, id) => {
        handleClose();
    }

    return goals ? (
        <Box sx={{width: '100%'}}>
            <List>
                {
                    goals.map(el =>
                        <ListItemButton
                            divider={true}
                            selected={selectedIndex === el.id}
                            onClick={(event) => handleListItemClick(event, el.id)}
                            onDoubleClick={(event) => handleListItemDoubleClick(event, el.id)}
                        >
                            <ListItemText primary={el.title}/>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={(event) => handleDeleteClick(event, el.id)}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemButton>
                    )
                }
            </List>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Be Careful!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete}>No</Button>
                    <Button onClick={confirmDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    ) : null;
}