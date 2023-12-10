import React from 'react'
import './userdata.css'

const Userdata = (props) => {

  return (
    <div className="userdata_container">
        <div className="first_name user_">
            <label htmlFor="">first_name</label>
            <div>{props.name}</div>
        </div>
        <div className="last_name user_">
            <label htmlFor="">last_name</label>
            <div>{props.last}</div>
        </div>
        <div className="email user_">
            <label htmlFor="">email</label>
            <div>{props.email}</div>
        </div>
    </div>
  )
}

export default Userdata