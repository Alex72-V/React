import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/reducers/userReducer";
import { loginInitiate } from "../redux/actions";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [navigate, user]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"email"}>Email</label>
                <input name={"email"} id={"email"} type={"text"}
                onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor={"password"}>Password</label>
                <input name={"password"} id={"password"} type="password"
                onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;