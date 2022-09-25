
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInintiate } from "../redux/actions";

const RegisterPage = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.currentUser);

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConf) {
            return;
        }
        dispatch(registerInintiate(email, password, displayName))
    } 


    return (
        <div>
            <header>
                <Link to={'/login'}>Войти</Link>
            </header>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)}/>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterPage;