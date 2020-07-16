 
import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

import {Button} from '@material-ui/core';

import PhotoCamera from '@material-ui/icons/PhotoCamera';

 
export default class FileUpload extends Component {
 
  constructor(props) {
    super(props);
 
    this.onFileChange = this.onFileChange.bind(this);

 
    this.state = {
        image: ''
    }
  }
 
  onFileChange(e) {
      this.setState({ image: e.target.files[0] })
      
  }


 
  render() {
    return (
      <div className="container">
       
       <input
        accept="image/*"
    
        id="contained-button-file"
        multiple
        type="file"
        style={{display:"none"}}
        onChange={this.onFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained"  component="span" color="primary" style={{height:"100%",width:"100%",color:"white"}}>
        <PhotoCamera style={{margin:"5px"}}/> Upload Image
        </Button>
      </label>

   
      </div>
    )
  }
}