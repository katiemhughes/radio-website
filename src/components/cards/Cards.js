import React from 'react';
import CardItem from "../cards/CardItem";
import "../cards/Cards.css"
import "../home/Data";

const Cards = () => {
    return (
        <div className="cards" id="picks">
            <h1 className="cards__title">RCR PICKS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/pussy-stamina.jpg"
                            alt="Pussy Stamina"
                            djName="PUSSY STAMINA"
                            date="05 May 2021"
                            genres="Club"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/Charlie-b.jpg"
                            alt="Charlie B"
                            djName="CHARLIE B"
                            date="07 May 2021"
                            genres="Club"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/dig-b.jpg"
                            alt="Dig B"
                            djName="Dig-B"
                            date="10 May 2021"
                            genres="Bass"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/maracuya.jpg"
                            alt="Maracuya"
                            djName="MARACUYA"
                            date="15 May 2021"
                            genres="Bass"
                            label="Jungle"
                            path="/genres"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;