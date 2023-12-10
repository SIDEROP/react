import React from 'react'
import './date.css'
const Date = (props) => {
    let day = props.date.toLocaleString('en-us', {day: '2-digit'})
    let month = props.date.toLocaleString('en-us', {month: 'long'})
    let year = props.date.getFullYear()
  return (
    <div className="date">
      <div className="day">{day}</div>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
    </div>
  )
}

export default Date