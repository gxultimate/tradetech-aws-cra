import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    tertiary: 'white',
  },
  status: {
    danger: 'orange',
  },
  multilineColor:{
    color:'white'
}
});
export default theme;