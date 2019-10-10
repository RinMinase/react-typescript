import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>React Test App</Typography>

					<Link to="/home"><Button>Home</Button></Link>
					<Link to="/login"><Button>Login</Button></Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
