import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, cardType }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card mx-2" style={{ minWidth: "20rem" }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Gender:{item.gender}</p>
                <p className="card-text">Status:{item.status}</p>
                <p className="card-text">Species:{item.species}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single/" + item.id + "/" + cardType}>
                        <button className="btn btn-primary">Details.... </button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => { actions.setFavourites(item.name) }}>+</button>
                </div>

            </div>
        </div>

    )
};
