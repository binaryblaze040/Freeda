import React, { Component } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import './card.css';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import { callDummyAPI } from '../services/services';

const styles = theme => ({
    textStyle1: {
        color: '#FFFFFFA6',
        marginTop: '2vh',
        fontSize: 20,
        fontFamily: "Arial",
      },
    
      textStyle2: {
        color: '#fafafa',
        fontSize: '1.5vw',
        fontSize: 30,
        fontFamily: "Flamante Round 8 Fonts",
      },
});

function Cards(props) {
    const { classes } = props;
    return (
        <div class="wrapper">
        <Grid
            item
            style={{
                height: '20vh',
                width: '50vh',
                backgroundColor: '#252C48',
                borderRadius: "7px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            alignItems="center"
            direction="column"
            container>
            <Typography className={classes.textStyle1}>Total Customer</Typography>
            <br></br>
            <Typography className={classes.textStyle2}>2091</Typography>
        </Grid>

        <Grid
            item
            style={{
                height: '20vh',
                width: '50vh',
                backgroundColor: '#252C48',
                borderRadius: "7px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            alignItems="center"
            direction="column"
            container
            >
            <Typography className={classes.textStyle1}>Total Open AR</Typography>
            <br></br>
            <Typography className={classes.textStyle2}>$43M</Typography>
        </Grid>

        <Grid
            item
            style={{
                height: '20vh',
                width: '50vh',
                backgroundColor: '#252C48',
                borderRadius: "7px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            alignItems="center"
            direction="column"
            container
            >
            <Typography className={classes.textStyle1}>Average Days Delay</Typography>
            <br></br>
            <Typography className={classes.textStyle2}>3 Days</Typography>
        </Grid>

        <Grid
            item
            style={{
            height: '20vh',
            width: '50vh',
            backgroundColor: '#252C48',
            borderRadius: "7px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
            alignItems="center"
            direction="column"
            container>

            <Typography className={classes.textStyle1}>Total Open Invoices</Typography>
            <br></br>
            <Typography className={classes.textStyle2}>37438</Typography>
        
        </Grid>
        </div>
    );
}
      
export default withStyles(styles,{ withTheme: true })(Cards);