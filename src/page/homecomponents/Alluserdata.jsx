import React from 'react'
import Userdata from './Userdata'

const Alluserdata = (props) => {
  return (
    <div>
        {
          props.item.map((data_user)=>{
            return(
              <Userdata 
              key={data_user.id}
              name={data_user.first_name}
              last={data_user.last_name}
              email={data_user.email}/>
            )
          })
        } 
    </div>
  ) 
}

export default Alluserdata


/* <Userdata 
name={props.item[0].first_name}
last={props.item[0].last_name}
email={props.item[0].email}/> */ 