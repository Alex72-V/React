import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as firebaseDB } from "../firebase";
import "./AddContactPage.css";
import { toast } from "react-toastify";


const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddContactPage = () => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const { name, email, contact } = state;
    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Необходимо заполнить все поля");
        } else {
            if (!id) {
                firebaseDB.child("contacts").push(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Контакт добавлен");
                    }
                });
            } else {
                firebaseDB.child(`contacts/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Контакт обновлён");
                    }
                });
            }
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    
    return (
        <div style={{ marginTop: 100 }}>
        <form
            style={{ margin: "auto", padding: 15, maxWidth: 400, alignContent: "center",}}
            onSubmit={handleSubmit}>

            <label htmlFor={"name"}>Name</label>
            <input id={"name"} type={"text"} placeholder={"Введите имя"} name={"name"} value={name || ""}
            onChange={handleInputChange}/>

            <label htmlFor={"email"}>Email</label>
            <input placeholder={"Введите email"} id={"email"} type={"email"} name={"email"} value={email || ""}
            onChange={handleInputChange}/>

            <label htmlFor={"contact"}>Contact</label>
            <input id={"contact"} type={"number"} placeholder={"Введите номер"} name={"contact"} value={contact || ""}
            onChange={handleInputChange}/>

            <input type={"submit"} value={id ? "update" : "save"} />
        </form>
        </div>
    );
};

export default AddContactPage;