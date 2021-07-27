import React from 'react';
import {AppBar,  IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';


const NavBar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className = {classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant = "h6" className = {classes.title} color="inherit">
                        <img src={logo} alt="Brenda's Store" height="25px" className ={classes.image}/>
                        Brenda's Store
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label = "Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />

                                </Badge>

                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default NavBar;
