import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' value={password} onChange={(e) => 
                setPassword(e.target.value)}/>
                <button type='submit'>Sing in</button>
            </form>
        
        </div>
    );
};

export default LoginPage;