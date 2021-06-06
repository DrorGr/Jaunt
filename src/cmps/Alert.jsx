import React from 'react';
import Alert from '@material-ui/lab/Alert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

export default function ColorAlerts() {
//   const classes = useStyles();

  return (
    <div className="alert">
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    </div>
  );
}