import React from 'react';
import CardItem from "../cards/CardItem";
import "../cards/Cards.css"
import "../home/Data";

const Cards = () => {
    return (
        <div className="cards" id="picks">
            <h1 className="cards__title">RCR Picks of the Month</h1>
            <ul className="cards__items">
                <CardItem
                    src="images/sozaboi.png"
                    alt="Soza"
                    djName="Soza"
                    date="06 August 2021"
                    genre1="Soul"
                    genre2="Disco"
                    genre3="Funk"
                    showLink="https://www.mixcloud.com/RainyCityRadio/sozaboi-060821/"
                    // path="/genres"
                />
                <CardItem
                    src="images/alfaz.png"
                    alt="Alfaz"
                    djName="Alfaz"
                    date="24 July 2021"
                    genre1="Breaks"
                    genre2="Jungle"
                    genre3="Bass"
                    showLink="https://www.mixcloud.com/RainyCityRadio/alfaz-240721/"
                    // path="/genres"
                />
                <CardItem
                    src="images/digb-b2b-izzy-iz.png"
                    alt="dig B b2b Izzy Iz"
                    djName="dig B b2b Izzy Iz"
                    date="10 May 2021"
                    genre1="Chugs"
                    genre2="EBM"
                    genre3="Italo"
                    showLink="https://www.mixcloud.com/RainyCityRadio/izzy-iz-b2b-dig-b-050821/"
                    // path="/genres"
                />
                <CardItem
                    src="images/maracuya.jpg"
                    alt="Maracuya"
                    djName="MARACUYA"
                    date="15 May 2021"
                    genres="Bass"
                    label="Jungle"
                    // path="/genres"
                />
            </ul>
        </div>
    )
}

export default Cards;