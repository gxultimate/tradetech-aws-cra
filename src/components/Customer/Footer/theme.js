import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: teal,
  
  },
  status: {
    danger: 'orange',
  },
  multilineColor:{
    color:'white'
}
});
export default theme;