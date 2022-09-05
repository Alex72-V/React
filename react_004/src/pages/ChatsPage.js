import React, { useState } from "react";

const ChatsPage = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: "Kolya"
        },
        {
            id: 2,
            name: "Anna"
        },
        {
            id: 3,
            name: "Den"
        },

    ]);

    const [name, setName] = useState('');

    const handelDelete = (id) => {
        const filteredValues = chats.filter((item) => item.id !== id);
        setChats(filteredValues);
    };

    const addHandler = () => {
        const randomId = Math.random()
        const obj = {
            id: randomId,
            name: name
        }
        setChats(prevState => [...prevState, obj])
    }

    return (
<div>
    <input className="add-name-chat" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
    <button className="add-name-chat__button" onClick={addHandler}>Добавить чат</button>
{chats.map((chat) => {
    return(
        <div className="name-block" key={chat.id}>
            <h4 className="name-block__user">{chat.name}</h4>
            <button className="del-button" onClick={ () => handelDelete(chat.id)}>Delete</button>
        </div>
    ) 
})}
</div>
    );
};

export default ChatsPage;