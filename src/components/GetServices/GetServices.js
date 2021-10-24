import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './GetServices.css'

const GetServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/services',data)
    .then( res => {
        
    })

    };



    return (
        <div className='get'>
      <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
             <textarea {...register("text")} placeholder='Write Something' />
             <input placeholder='Price' type="number" {...register("price")} />
             <input {...register("img")} placeholder='image' />
             <input type="submit" />
      </form>
        </div>
    );
};

export default GetServices;