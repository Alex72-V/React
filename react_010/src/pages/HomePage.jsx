import React from "react";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { db as firebaseDB } from "../firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const HomePage = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        firebaseDB.child("contacts").on("value", (snapshot) => {
            if(snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, []);

    const onDelete = (id) => {
        if (window.confirm('Вы уверены?')) {
            firebaseDB.child(`contacts/${id}`).remove((err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success('Контакт удалён');
                }
            });
        }
    };

    return (
        <div style={{marginTop: "100px" }}>
            <table className={"styled-table"}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center"}}>№</th>
                        <th style={{ textAlign: "center"}}>Имя</th>
                        <th style={{ textAlign: "center"}}>Почта</th>
                        <th style={{ textAlign: "center"}}>Контактный номер</th>
                        <th style={{ textAlign: "center"}}>Опции</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope={"row"}>{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button className={"bttn btn-edit"}>Edit</button>
                                    </Link>
                                    <button
                                    className={"bttn btn-delete"}
                                    onClick={() => onDelete(id)}>Delete</button>
                                    <Link to={`/view/${id}`}>
                                        <button className={"bttn btn-view"}>View</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;