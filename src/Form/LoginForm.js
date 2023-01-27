import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: validationSchema
    });

    const onSubmit = (data) => {
        console.log(data);
        // make API call or other logic
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Username:
                <input type="text" name="username" ref={register} />
                {errors.username && <span>{errors.username.message}</span>}
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" ref={register} />
                {errors.password && <span>{errors.password.message}</span>}
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LoginForm;