
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import theme from './../../../../theme'
export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
     
<ThemeProvider theme={theme}>
     <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
       
          format="MM/dd/yyyy"
          value={selectedDate}
          color='primary'
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
 </ThemeProvider>
      
    </MuiPickersUtilsProvider>
  );
}
