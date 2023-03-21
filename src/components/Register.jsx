import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../context/TodoContext';

function Register(props) {

    const [formData, setFormData] = useState();
    const {message,onRegister,setMessage}=useContext(TodoContext);
   
    //effets
    useEffect(()=>{
        setMessage("");
    },[])


    const changeInput = (event) => {
        // let value=event.target.value;
        // let name=event.target.value;
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
        const onSubmit =async (event) => {
            event.preventDefault();
            onRegister(formData);
    }

        return (

            <form>
                <div className='mb-3'>
                    <label className="form-label text-primary">Name</label>
                    <input type="text" name="name" className="form-control" onChange={changeInput}></input>
                </div>

                <div className='mb-3'>
                    <label className="form-label text-primary">Email</label>
                    <input type="email" name="email" className="form-control" onChange={changeInput}></input>
                </div>

                <div className='mb-3'>
                    <label className="form-label text-primary">Password</label>
                    <input type="password" name="password" className="form-control" onChange={changeInput}></input>
                </div>
                <p>{message}</p>

                <button className="btn btn-primary" onClick={onSubmit}>Register</button>
            </form>

        );
    }

    export default Register;