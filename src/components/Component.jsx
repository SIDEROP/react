import React, {useState} from 'react'
import './component.css'
import Date from './Date'


const Component = (props) => {

  let i = props.id;

  let [newd, setnew] = useState()

  let onDelet = (i) =>{
    let update_ = {
      ...props
    }
    update_.splice(i,1)
    setnew([...update_])
  }

  return (
    <>
        <div key={i} className="component_container">
            <div className="container_title_date">
                <div className="title">{props.title}</div>
                <Date date={props.date} />
            </div>
            <div className="price_container">
                <div className="price">${props.price}</div>
                <button onClick={()=>{
                  onDelet(i)
                }}  className="bg-info">Delet</button>
            </div>
        </div>
    </> 
  )
}

export default Component