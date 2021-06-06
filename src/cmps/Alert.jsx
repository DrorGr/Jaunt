import React from 'react';
import Alert from '@material-ui/lab/Alert';

const style = {
    backgroundColor:"white",
    position:"fixed",
    right: "50px",
     bottom: "50px",
}


export default function ColorAlerts() {
  return (
    <div className="alert" style={style}>
        
      <Alert severity="success"  variant="outlined" >
        Order has booked successfully, check it on trips page!
      </Alert>
    </div>
  );
}