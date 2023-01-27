import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

function MyForm() {
    const { register, handleSubmit, formState:{ errors }  } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" ref={register} />
            {errors.email && <p>{errors.email.message}</p>}

            <input name="password" type="password" ref={register} />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" />
        </form>
    );
}
export default MyForm;