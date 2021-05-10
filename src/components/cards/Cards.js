import React from 'react';
import CardItem from "../cards/CardItem";
import "../cards/Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1 className="cards__title">RCR Picks</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/sherelle.jpg"
                            alt="Sherelle"
                            djName="SHERELLE"
                            date="05 May 2021"
                            genres="160"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/timreaper.jpg"
                            alt="Tim Reaper"
                            djName="TIM REAPER"
                            date="07 May 2021"
                            genres="Jungle"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/lcy.jpg"
                            alt="LCY"
                            djName="LCY"
                            date="10 May 2021"
                            genres="Bass"
                            label="Jungle"
                            path="/genres"
                        />
                        <CardItem
                            src="images/ahadadream.jpg"
                            alt="Ahadadream"
                            djName="AHADADREAM"
                            date="15 May 2021"
                            genres="UK Funky"
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