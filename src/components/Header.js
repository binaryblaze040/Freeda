import React, { Component } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import { callDummyAPI } from '../services/services';

const styles = theme => ({

  });

function Header(props) {
    const { classes } = props;
    return (
      <Grid
        item
        style={{
        height: '8vh',
        width: '200vh',
        padding: "1% 1% 1% 1%",
        }}
        direction="column"
        container>
    {/* <img src="HRC.jpg" width="30" height="30"></img> */}
    <div class="headWrap"><b style={{fontFamily: "Arial Black", color: '#fafafa',marginTop: '2vh',fontSize: 20,}}>ABC Products</b></div>
    <div><Button style={{float: 'right', backgroundColor:"#ff8636", width:"20vh", color:'#fafafa',borderRadius: "30px",}}>Professor</Button></div>
</Grid>

    );
  }

  
  export default withStyles(styles,{ withTheme: true })(Header);