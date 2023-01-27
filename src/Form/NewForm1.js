import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const validationSchema = yup.object().shape({
    username: yup.string().min(6).required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
})

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log("here")
        console.log(data);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit())}>
            <label>
                Username:
                <input type="text" name="username" {...register("username")} />
                {errors && errors.username.message}
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" {...register("password")} />
                {errors && errors.password.message}
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default LoginForm;