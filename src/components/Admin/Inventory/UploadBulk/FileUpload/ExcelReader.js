import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import XLSX from "xlsx";
import { make_cols } from "./MakeColumns";
import { SheetJSFT } from "./type";

import {TextField,Grid,Button} from '@material-ui/core'

class ExcelReader extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleFile() {
    /* Boilerplate to set up FileReader */

    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    let {
      startingStore: { fileUpload }
    } = this.props;

    try {
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {
          type: rABS ? "binary" : "array",
          bookVBA: true
        });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */

        this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
          console.log(JSON.stringify(this.state.data, null, 2));
        });

        fileUpload(this.state.data);
        console.log(this.state.data, "wow");
      };
      // if (this.state.data.length > 0) {
      if (rABS) {
        reader.readAsBinaryString(this.state.file);
      } else {
        reader.readAsArrayBuffer(this.state.file);
      }
    } catch (err) {
      console.log(this.state.data, "wow");
    }
    // } else {
    // console.log("wow");
    // }
  }

  render() {
    return (
      <Grid container type="flex" >
        <Grid item sm={8} >
          {/* <div>
            <Button type="primary" onClick={this.showModal}>
              Upload Excel
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <input
                style={{ boxShadow: "0px 5px 5px grey" }}
                type="file"
                // className="form-control"
                // id="file"
                accept={SheetJSFT}
                onChange={this.handleChange}
              />
            </Modal>
          </div> */}
          <TextField
 style={{width:"100%"}}
  type="file"
  accept={SheetJSFT}
  onChange={this.handleChange}
/>
          {/* <Input
            // style={{ marginTop: "8px" }}
            type="file"
            // className="form-control"
            // id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          /> */}
        </Grid>
        <Grid item sm={3} style={{ border: "0px solid yellow" }}>
          <Button
        variant="outlined" 
        color="primary"
           style={{float:"right"}}
            onClick={this.handleFile}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default inject("startingStore")(observer(ExcelReader));
