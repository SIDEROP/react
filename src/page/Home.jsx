import React, {useEffect, useState} from 'react'
import Alluserdata from './homecomponents/Alluserdata'
import Form from './homeform/Form'


let dummy_user = [ ]


const Home = () => {

  let [new_user, new_user_fun] = useState(dummy_user)

  let feachdata = () =>{
        fetch('https://reqres.in/api/users?page=2')
          .then(response => response.json())
          .then(response => {
            const data = response.data
              new_user_fun(data)
              console.log(data)
        })
  }

  useEffect(() =>{
    feachdata()
  },[])


  let usersfun_data = (response) =>{
    let newary = [response, ...new_user] 
    new_user_fun(newary) 
  }


  return (
    <>
      <Form onNewUser={usersfun_data} />
      <Alluserdata item={new_user}/>
    </>
  )
}

export default Home




/* let usersfun_data = (response) =>{
  fetch('https://reqres.in/api/users/2',{
    method: 'POST',
    body: JSON.stringify(response),
    headers: {
      'content-type': 'applicatino/json'
    }
  }).then((data)=>{
    feachdata()
  })
}
 */