import Datacomponet from "./components/Datacomponet";
import Header from "./components/Header";
import Form from "./form/Form";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

let dummyData = [
    {
        title: 'book',
        date: new Date(2021,11,22),
        price: 200
    },
    {
        title: 'car',
        date: new Date(2022,12,2),
        price: 100
    },
    {
        title: 'bike',
        date: new Date(2021,9,23),
        price: 500
    }
]


const App = () => {

    let [component_data, component_datafun] = useState(dummyData)

    let form_data_ary = (rerspons) =>{
        let data_obj = [rerspons, ...component_data]
        component_datafun(data_obj)
    }

  return (
    <div>
        <Header/>
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="contact" element={<Contact />} /> 
        </Routes>

        <Form onUsedata={form_data_ary} />
        <Datacomponet data_component={component_data} />

    </div>
  )
}

export default App;




/* {
    id: 'c1',
    title: 'Car insorence',
    date: new Date(2021,22,11),
    price: 200
},
{
    id: 'c2',
    title: 'shcool fee',
    date: new Date(2021,11,1),
    price: 238
},
{
    id: 'c3',
    title: 'bike insorence',
    date: new Date(2023,22,12),
    price: 400
},
{
    id: 'c4',
    title: 'book price',
    date: new Date(2022,10,2),
    price: 100 
} */