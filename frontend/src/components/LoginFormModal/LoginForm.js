import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';
function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        ) && history.push('/discover')
    }

    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <label className='login-email'>
                Username or Email
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label className='login-password'>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit" className='login-button'>Log In</button>
            <button onClick={e => {
                setCredential("Demo-lition");
                setPassword("password");
            }} type="submit" className='login-demo-button'>Demo User</button>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        </form>
    )
}

export default LoginForm;
