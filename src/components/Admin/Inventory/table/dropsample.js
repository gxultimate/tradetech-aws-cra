import React from 'react'
import {Grid} from '@material-ui/core'


function Dropdown(){
    const list =["Website","Software","Desktop","Game","Freelance"]
    const [filter,setFilter]= React.useState("")
    return(
      <div>
        <Grid>
         <input value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
         {list.map(name => {
           if(filter.length !== 0){
             if(name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
               return name
             }
               else{
                 return null
              
             }
           }
           return name
         })}
        </Grid>
      </div>
    )
 }
 export default Dropdown;