import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate} from "../redux/actions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 1500)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleAuth}>Log out</button>
        </div>
    );
};

export default HomePage;