import React from 'react';
import  { Link } from "react-router-dom";
import Button from '../genretags/GenreTags';

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <img src={props.src} alt={props.alt} className="cards__item__img" />
                    <div className="cards__item__info">
                        <h1 className="dj-title">{props.djName}</h1>
                        <h5 className="cards__item__text">{props.date}</h5>
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