import React, {useState} from 'react'
import './form.css'

const Form = (props) => {

    let [userformfirst, userform_first_fun] = useState('')
    let [userformlast, userform_last_fun] = useState('')
    let [userformemail, userform_email_fun] = useState('')

    let userformfirstname = (event) =>{
        userform_first_fun(event.target.value)
    }

    let userform_last_name = (event) =>{
        userform_last_fun(event.target.value)
    }

    let userform_email = (event) =>{
        userform_email_fun(event.target.value)
    }

    let onmyuser = (event) =>{

        event.preventDefault()

        let user_Data = {
            id: Math.random().toLocaleString(),
            first_name: userformfirst,
            last_name: userformlast,
            email: userformemail
        }
        props.onNewUser(user_Data)
        console.log(user_Data)

        userform_first_fun('') 
        userform_last_fun('')
        userform_email_fun('')
    }

  return (
    <form onSubmit={onmyuser}>
        <div className="form_container">
            <div className="container">
                <label >Name</label>
                <input type="text" value={userformfirst} onChange={userformfirstname} />
            </div>
            <div className="container">
                <label >Fullname</label>
                <input type="text" value={userformlast} onChange={userform_last_name} />
            </div>
            <div className="container">
                <label >Email</label>
                <input type="text" value={userformemail}  onChange={userform_email} />
            </div>
            <div className="submit">
                <button>submit</button>
            </div>
        </div>
    </form>
  )
}

export default Form