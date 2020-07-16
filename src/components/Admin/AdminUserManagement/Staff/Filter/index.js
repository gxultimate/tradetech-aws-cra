import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 210,
    backgroundColor:"#208769",
   
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectFilter() {
  const classes = useStyles();

  const [filter,setFilter] =React.useState("")
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);



  return (
    <div>

      <FormControl variant="filled" className={classes.formControl}  >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple" style={{color:"white"}}>
         Staff Role
        </InputLabel>
        <Select
          native
          size='small'
          labelWidth={labelWidth}
          onChange={(e)=>setFilter(e.target.value)}
        >
                <option value=""></option>
          <option value="Packer"  >Packer</option>
          <option value="Dispacher">Dispacher</option>
       
        </Select>
      </FormControl>

    </div>
  );
}
