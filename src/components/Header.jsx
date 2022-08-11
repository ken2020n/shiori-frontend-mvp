import React, {useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

import {Menu, TextField, Alert, Collapse, IconButton, Button, Link} from "@mui/material";

require('./Header.css');

export default function Header() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open2, setOpen] = React.useState(true);

    const handleMenuClick = () => {
        console.log("menu click");
    };

    const handleLogin = () => {
        console.log("login");
        console.log("email: ", email);
        console.log("password: ", password);
        setOpen(true);
    };

    // Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleLoginMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLoginMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div id="FlexContainer">
                <div id="HeaderMenu">
                    <IconButton onClick={handleMenuClick}>
                        <MenuIcon/>
                    </IconButton>
                </div>
                <div id="HeaderTitle">
                    <Link href="/" underline="none" color="inherit">
                        shiori 栞
                    </Link>
                </div>
                <div id="HeaderLogin">
                    <IconButton onClick={handleLoginMenuClick}>
                        <PersonIcon/>
                    </IconButton>
                </div>
            </div>

            <Menu
                id="login-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleLoginMenuClose}
                PaperProps={{
                    style: {
                        width: 300,
                    },
                }}
            >

                <div id="LoginContainer">
                    <TextField
                        // id="text-field-email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <TextField
                        // id="text-field-password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button variant="outlined" onClick={handleLogin}>Login</Button>
                </div>

                <Collapse in={open2}>
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
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Close me!
                    </Alert>
                </Collapse>

            </Menu>
        </div>
    );
}