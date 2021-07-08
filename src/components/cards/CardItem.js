import React from 'react';
import  { Link } from "react-router-dom";
import Button from '../genretags/GenreTags';
import "../home/Data";

const CardItem = (props) => {
    return (
        <>
            <li className="cards__items--item">
                <Link className="cards__items--link" to={props.path}>
                    <img src={props.src} alt={props.alt} className="cards__items--img" />
                    <div className="cards__items--info">
                        <h1 className="dj-title">{props.djName}</h1>
                        <h5 className="cards__items--text">{props.date}</h5>
                        <Button
                            onClick={() => {console.log("You clicked on me")}}
                            type="button"
                            >{props.genres}</Button>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;