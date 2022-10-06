import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/reducers/userReducer";
import { registerInitiate } from "../redux/actions";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [disName, setDisName] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("/")
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConf) {
            return;
        }
        dispatch(registerInitiate(email, password, disName))
    }

    return (

        <div>
            <h2 style={{marginTop: 20}}>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={disName} 
                onChange={(e) => setDisName(e.target.value)} />
                
                <input type="text" value={email} 
                onChange={(e) => setEmail(e.target.value)} />

                <input type="text" value={password} 
                onChange={(e) => setPassword(e.target.value)} />

                <input type="text" value={passwordConf} 
                onChange={(e) => setPasswordConf(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );

};

export default RegisterPage;