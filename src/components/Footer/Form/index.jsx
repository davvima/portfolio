import {useRef,  useState } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import './form.scss'

const Form = () => {

    const form = useRef()
    console.log(form.current)

    const [input, setInput] = useState({
        name:"",
        email:"",
        message:"",
    })
    const [errors, setErrors] = useState({name: 'A name is required'})
    const [touched, setTouched] = useState({
        name:false,
        email:false,
        message:false
    })

    console.log(Object.entries(errors).length)


    const handleSubmit = e =>{
        e.preventDefault()

        emailjs.sendForm('service_5s0oodb', 'template_zb7tyqi', form.current, '2QJVZME8swFqriule')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been sent, thank you for your interest',
            showConfirmButton: false,
            timer: 5000
        })

        setInput({
            name:"",
            email:"",
            message:""
        })
    }

    const handleChange = e=>{
    
        setInput({...input,
          [e.target.name] : e.target.value
        })

        setErrors(validate({...input,
            [e.target.name] : e.target.value
          }))
    }

    const handleBlur = e =>{
        setTouched({...touched,
           [e.target.name]:true
        })

        setErrors(validate({...input,
            [e.target.name] : e.target.value
          }))
        
    }

    const validate = (input) =>{
        let errors ={}
        const {name, email, message} = input

        const regexEmail=
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       
        if(!name){
            errors.name = 'A name is required'
        }else if (name.length<4){
            errors.name = 'Enter a name with more than 3 characters'
        }

        if(!email){
            errors.email = 'You must add an email'
        }else if(!regexEmail.test(email)){
            errors.email = 'Enter a valid email format'
        }

        if (!message){
            errors.message = 'Write a message'
        }else if(message.length<10){
            errors.message = 'Write a message with more than 10 characters'
        }
    
      return errors
    }
    

    return (
            <form ref={form} onSubmit={handleSubmit}>
                <h2>Let's Work Together...</h2>
                <div>
                    <label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder='Name'
                            value={input.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name?"error":""}
                        />
                    </label>
                    {errors.name && touched.name && <p className='textError'>{errors.name}</p>}
                </div>
                

                <div>
                    <label>
                        <input 
                            type="email"
                            name="email" 
                            placeholder='Email'
                            value={input.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email?"error":""}
                        />
                    </label>
                    {errors.email && touched.email && <p className='textError'>{errors.email}</p>}
                </div>

                <div>
                    <label>
                        <textarea 
                            name="message" 
                            rows="5"
                            placeholder='Write your message...'
                            value={input.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.message && touched.message?"error":""}
                        />
                    </label>
                    {errors.message && touched.message && <p className='textError'>{errors.message}</p>}
                </div>

               <button 
                    disabled={Object.entries(errors).length===0?false:true} 
                    type="submit"
                > 
                    Send Message 
                </button>    
            </form>
    );
};

export default Form;