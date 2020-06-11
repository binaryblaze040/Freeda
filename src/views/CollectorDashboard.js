import React, { Component } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Charts from '../components/Charts';
import EnhancedTable from '../components/EnhancedTable';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import { callDummyAPI } from '../services/services';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
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
  textfield: {
    color: '#FFFFFFA6',
    fontSize: '1.5vw',
  },
  nameInput: {
    fontSize: '1vw',
    color: '#FFFFFF',
  },
  notchedOutline: { borderWidth: '1px', borderColor: '#5DAAE0 !important' },
  searchBtn: {
    marginTop: '8vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
  searchBtnDisabled: {
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: 'white !important',
    background: '#FFFFFFa5',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#FFFFFFa5',
    },
  },
});

class CollectorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      response: 0,
      redirect: false,
      loading: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleGetStarted = (e) => {
    callDummyAPI(this.state.name).then((response) => {
      // });
      this.setState({
        response: response.data.name,
        redirect: true,
        loading: false,
      });
    });
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2} xs={12}>
        <Header/>
          <h4>&nbsp;</h4>
        <Cards/>
          <h4>&nbsp;</h4>
        <Charts/>
          <h4>&nbsp;</h4>
        <Grid style={{backgroundColor: '#252C48', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <EnhancedTable />
        </Grid>
        {this.state.redirect === true && (
          <Redirect
            to={{
              pathname: '/customer-dashboard',
              state: { name: this.state.response },
            }}
          />
        )}
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CollectorDashboard);
