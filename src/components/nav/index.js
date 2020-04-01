import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: 20,
      color: "white"
    },
    link: {
        textDecoration: "none"
    }
  }));

const NavComponent  = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Typography variant="h6" className={classes.title} >
                            Home
                        </Typography>
                    </Link>
                    <Link to="/episodes" className={classes.link}>
                        <Typography variant="h6" className={classes.title}>
                            Episodes
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavComponent