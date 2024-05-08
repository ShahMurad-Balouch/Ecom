import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('login', true);
        navigate('/');
    };

    useEffect(() => {
        const loggedIn = localStorage.getItem('login');
        if (loggedIn) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform validation before calling login function
        login();
    };

    return (
        <div>
            <div className="container content-align-center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <hr />
                    <button type="submit" className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
