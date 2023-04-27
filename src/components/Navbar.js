import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo_code.png';
import {Link, withRouter} from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
  };
  
  class Navbar extends Component {

    render (){
    const appBarBack = {
        background: '#4831D4'
    }

    const { classes } = this.props;

    
  
    return (
      <div className={classes.root}>
        <AppBar position="inherit" color="default" style={appBarBack}>
          <Toolbar>
          <div>
            <Link to="/">
                <img className="navbar-img" src={logo} alt="logo" />
            </Link>    
          </div> 
          <div className="navbar"> 
            <Link to="/about" className="navbar-option">  
                <Typography color="inherit" >
                <p class="menuText">About</p>
                </Typography>
            </Link> 
            <Link to="/work" className="navbar-option">    
                <Typography  color="inherit">
                <p class="menuText">Work</p>
                </Typography>
            </Link>
            <Link to="/contact" className="navbar-option">     
                <Typography className="navbar-text" color="inherit">
                <p class="menuText">Contact</p>
                </Typography>
            </Link>    
          </div>  
          </Toolbar>
        </AppBar>
      </div>
    );
  }
} 
  Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar); withRouter (Navbar);
