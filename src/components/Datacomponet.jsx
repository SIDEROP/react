import React from 'react'
import Component from './Component';

const Datacomponet = (props) => {
  return (
    <div>
        {
            props.data_component.map((event) =>{
                return(
                    <Component 
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    price={event.price}
                    /> 
                )
            }) 
        }
    </div> 
  )
}

export default Datacomponet;