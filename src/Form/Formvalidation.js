import React from 'react'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useRef } from 'react';




const schema = yup.object().shape({
    firstName: yup.string().min(5).required("Min 5 Letters")
    
})


function Formvalidation() {

    const { register, handleSubmit,formState :{ errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='First Name' name="firstName" {...register("firstName")} /><br></br>
                 {errors.firstName?.message}
                <button>Submit</button>

            </form>
        </div>
    )
}

// {/* <p>{errors.firstName?.message}</p> */}
// <input type="text" placeholder='Last Name' name="lastName" ref={register} /><br></br>
// {/* <p>{errors.lastName?.message}</p> */}

// <input type="number" placeholder='Age' name="age" ref={register} /><br></br>
// {/* <p>{errors.age?.message}</p> */}

// <input type="text" placeholder='Password' name="password" ref={register} /><br></br>
// {/* <p>{errors.password?.message}</p> */}

// <input type="text" placeholder='Confirm Password' name="confirm-password" ref={register} /><br></br>
// {/* <p>{errors.confirmPassword?.message}</p> */}

export default Formvalidation
