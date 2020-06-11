import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,   
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
  table: {
    minWidth: "auto",
  },
  bg:{
    backgroundColor: "rgba(27,31,56,.9) !important",
  }
});
class ChartsPage extends React.Component {
  state = {
    dataHorizontal: {
      labels: ['USA', 'CAN', 'IND', 'UK'],
      datasets: [
        {
          lable:"",
          data: [22, 33, 55, 12],
        
          backgroundColor: [
            "#FFFFFFA6",
            "#FFFFFFA6",
            "#FFFFFFA6",
            "#FFFFFFA6",
          ],
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer alignItems="center" direction="column" style={{height: "220px" ,backgroundColor: "#252C48", marginTop:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <h3 style={{color: "#FFFFFFA6", padding: "0px", fontWeight: "normal",}}>&nbsp;Total Amount By Company Code</h3>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}
export default withStyles(styles,{ withTheme: true })(ChartsPage);
