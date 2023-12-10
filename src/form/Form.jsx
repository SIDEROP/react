import './form.css'
import React, {useState} from 'react'
const Form = (props) => {

    let [title_data, title_data_fun] = useState('')
    let [date_data, date_data_fun] = useState('')
    let [price_data, price_data_fun] = useState('')
    

    let onFormChangetitle = (event) =>{
        title_data_fun(event.target.value) 
    }

    let onFormChangedate = (event) =>{
        date_data_fun(event.target.value)
    }

    let onFormChangeprice = (event) =>{
        price_data_fun(event.target.value)
    }

    let formonsubmit = (event) =>{
        event.preventDefault()

        let form_data_ary = {
            id: Math.random().toLocaleString(),
            title: title_data,
            date: new Date(date_data),
            price: price_data
        }
        props.onUsedata(form_data_ary) 

        title_data_fun('')
        date_data_fun('')
        price_data_fun('')
    }

  return (
    <>
        <form className='form_' onSubmit={formonsubmit}>
            <div className="title_form title_">
                <label htmlFor="title">title</label>
                <input type="text" id='title' value={title_data} onChange={onFormChangetitle} />
            </div>
            
            <div className="number_form title_">
                <label htmlFor="number">price</label>
                <input type="number" id='number' value={price_data} onChange={onFormChangeprice} />
            </div>
            
            <div className="date_form title_">
                <label htmlFor="date">date</label>
                <input type="date" id='date' value={date_data} onChange={onFormChangedate} />
            </div>
            
            <div className="form_form title_">
                <button type='submit'>cheng me</button>
            </div>
            
        </form>
    </>
  )
}

export default Form