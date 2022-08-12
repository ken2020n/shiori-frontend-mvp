import React, {useState, useEffect} from 'react';
import {Box, List, ListItemButton, ListItemText, IconButton, DeleteIcon} from '@mui/material';

require('./Task.css');

export default function Goal() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log("Index: ", selectedIndex);
    };

    const taskList = [
        {goalId: 11, goalTitle: "Goal 1", taskCounter: 1},
        {goalId: 12, goalTitle: "Goal 2", taskCounter: 2},
        {goalId: 13, goalTitle: "Goal 3", taskCounter: 3}
    ];

    return (
        <Box sx={{width: '100%'}}>
            <List>
                {
                    taskList.map(el =>
                        <ListItemButton
                            divider={true}
                            selected={selectedIndex === el.goalId}
                            onClick={(event) => handleListItemClick(event, el.goalId)}
                        >
                            <ListItemText primary={el.goalTitle}/>
                            <ListItemText secondary={el.taskCounter}/>
                        </ListItemButton>
                    )
                }
            </List>
        </Box>
    );
}