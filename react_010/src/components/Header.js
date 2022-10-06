import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import "./Header.css";
import { userSelector } from "../redux/reducers/selectors";
import CustomLink from "./CustomLink";

const Header = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate());
        }
        setTimeout(() => {
            navigate("/login");
        }, 4000); 
    };

    return (
        <div className="header">
        <Link to={"/"}>
            <p className="logo">Contact App</p>
        </Link>
        <div className="header-right">
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/addContact"}>Add Contact</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/register"}>Sign up</CustomLink>
            {user ? (
            <p style={{ cursor: "pointer" }} onClick={handleAuth}>
                Sign Out
            </p>
            ) : (
            <CustomLink to={"/login"}>Sign in</CustomLink>
            )}
        </div>
        </div>
    );
};

export default Header;