import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,TextField} from '@material-ui/core';
import XLSX from "xlsx";
import { make_cols } from "./FileUpload/MakeColumns";
import { SheetJSFT } from "./FileUpload/type";
import {inject,observer} from 'mobx-react'

class ExcelReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    };
    // this.handleFile = this.handleFile.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

 


  render() { 

 function handleChange (e) {
      const files = e.target.files;
      if (files && files[0]) this.setState({ file: files[0] });
    }

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

 function UploadFile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
  <TextField
  name="upload-excel"
  type="file"
  
  accept={SheetJSFT}
  onChange={()=>{handleChange()}}
/>
  
 

    </div>
  );
}

return ( 
<UploadFile/>

 );
}
}

export default inject("startingStore")(observer(ExcelReader));
