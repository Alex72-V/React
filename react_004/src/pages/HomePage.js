import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
<div className="home-menu">
    <Link className="home-menu__link" to={'/chats'}>Чаты</Link>
    <Link className="home-menu__link" to={'/profile'}>Профиль</Link>
</div>
    );
};

export default HomePage;