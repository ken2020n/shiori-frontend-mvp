import React, {useState, useEffect} from 'react';
import {Box, List, ListItemButton, ListItemText, IconButton, DeleteIcon} from '@mui/material';

require('./Task.css');

export default function Task({goals, setSelectedGoalId}) {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setSelectedGoalId(index);
    };

    return goals ? (
        <Box sx={{width: '100%'}}>
            <List>
                {
                    goals.map(el =>
                        <ListItemButton
                            divider={true}
                            selected={selectedIndex === el.id}
                            onClick={(event) => handleListItemClick(event, el.id)}
                        >
                            <ListItemText primary={el.title}/>
                        </ListItemButton>
                    )
                }
            </List>
        </Box>
    ) : <></>;
}