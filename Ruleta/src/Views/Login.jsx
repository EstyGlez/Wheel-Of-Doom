import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import logo from "./images/logo.svg"

function Login() {
    const { register, handleSubmit } = useForm();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setUsername(data.username);
        navigate('/welcome', { state: { username: data.username } });
    };

    return (
        <>
            <section className='logoandlogin'>
                <div>
                    <img className='logo' src={logo} alt="logo"></img>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='label'>
                            <label htmlFor='username'>
                                <input id='username' {...register('username')} type='text' placeholder='Nombre de Usuario' />
                            </label>
                        </div>
                        <div className='label'>
                            <label htmlFor='password'>
                                <input id='password' {...register('password')} required type='password' placeholder='Contraseña' />
                            </label>
                        </div>
                        <button className='access' type="submit">ACCEDER</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;
