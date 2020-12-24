import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavItem, NavbarBrand } from 'reactstrap';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import './header.css';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
}));

//this is shared component across our application .so this component must be the very first component used
//in every file and the file that gets developed afterwards.
const Header = () => {
    const classes = useStyles();
    // const imageURL = "data:image/png;base64,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";
    const imageURL="data:image/jpeg;base64,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";
    return (
        <div className={classes.root}>
            <AppBar position="static">   //Appbar is component provided by materail-ui/@core

                <Toolbar>
                    <NavbarBrand className={"brand-logo"}>
                    <div className={"brand-icon"}>
                    <img src={imageURL} />
                    </div>
                    </NavbarBrand>
                        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        {/*    <MenuIcon/>*/}
                        {/*</IconButton>*/}

                        <Typography variant="h5">
                            LIBOR CARE
                        </Typography>
                        <div className={classes.toolbarButtons}>

                            <NavLink to="/calculate" style={{              // Navlink creates the link and here we can mention which component
                                fontSize: "large",                          //should be rendered on click of that using a to property of the Navlink component.
                                margin: "10px",
                                color: 'inherit',
                                textDecoration: 'inherit'
                            }}>
                                <b><i>Calculator    </i></b>
                            </NavLink>

                            <NavLink to="/powerbi" style={{
                                fontSize: "large",
                                margin: "10px",
                                color: 'inherit',
                                textDecoration: 'inherit'
                            }}>
                                <b><i>Power BI     </i></b>
                            {/*<NavLink to="/batchdetails" style={{*/}
                            {/*    fontSize: "large",*/}
                            {/*    margin: "10px",*/}
                            {/*    color: 'inherit',*/}
                            {/*    textDecoration: 'inherit'*/}
                            {/*}}>*/}
                            {/*    <b><i>Get Batch Data     </i></b>*/}
                            {/*</NavLink>*/}
                            <NavLink to="/" style={{
                                fontSize: "large",
                                margin: "10px",
                                color: 'inherit',
                                textDecoration: 'inherit'
                            }}>
                                <b><i>Home</i></b>
                            </NavLink>

                            </NavLink>
                        </div>
                </Toolbar>
            </AppBar>
        </div>
)

}

export default Header;
