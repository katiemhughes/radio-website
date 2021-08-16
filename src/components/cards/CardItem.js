import React from 'react';
// import  { Link } from "react-router-dom";
import Button from '../genretags/GenreTags';
import "../home/Data";

const CardItem = (props) => {
    return (
        <>
            <li className="cards__items--item">
                {/* <Link className="cards__items--link" to={props.path}> */}
                <a href={props.showLink} target="_blank">
                    <div className="cards__items--link">
                        <img src={props.src} alt={props.alt} className="cards__items--img" />
                        <div className="cards__items--info">
                            <h1 className="dj-title">{props.djName}</h1>
                            <h5 className="cards__items--text">{props.date}</h5>
                            <section className="buttons-container">
                                <Button
                                    // onClick={() => {console.log("You clicked on me")}}
                                    type="button"
                                    >{props.genre1}
                                </Button>
                                <Button
                                    // onClick={() => {console.log("You clicked on me")}}
                                    type="button"
                                    >{props.genre2}
                                </Button>
                                <Button
                                    // onClick={() => {console.log("You clicked on me")}}
                                    type="button"
                                    >{props.genre3}
                                </Button>
                            </section>
                        </div>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem;