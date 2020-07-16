import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

import {inject,observer} from 'mobx-react'



class Notification extends React.Component {
componentDidMount(){
    let {notificationStore:{getNotif}}=this.props;
    getNotif()
}




    render() {
        let {notificationStore:{listOfNotif}}=this.props;
let getId =JSON.parse(sessionStorage.getItem('userData'))


let filnotif =listOfNotif.filter( notf => notf.distributor_ID === getId.distributor_ID && notf.notif_status === 'unread')

// let row = filnotif.map()
let num =filnotif.length;
function Notif() {

  const [count, setCount] = React.useState(num);
  
  return (
    
      <div>
          {/* <ThemeProvider theme={theme}> */}
        <Badge color="secondary" badgeContent={count} >
          <NotificationsOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
        </Badge>
        {/* </ThemeProvider> */}
      </div>

   
  );
}
return (
        <Notif/>    
)
}
}

export default inject('notificationStore')(observer(Notification))
