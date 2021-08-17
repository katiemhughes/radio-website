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
                    src="images/soza.png"
                    alt="Soza"
                    djName="Soza"
                    date="06 August 2021"
                    genre1="Boogie"
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
                    src="images/elia.png"
                    alt="Elia"
                    djName="Elia"
                    date="05 August 2021"
                    genre1="Improv"
                    genre2="Experiment"
                    genre3="Ambient"
                    // showLink="https://www.mixcloud.com/RainyCityRadio/izzy-iz-b2b-dig-b-050821/"
                    // path="/genres"
                />
                <CardItem
                    src="images/carmen.png"
                    alt="Carmen"
                    djName="Carmen"
                    date="14 August 2021"
                    genre1="Experiment"
                    genre2="Ambient"
                    genre3="Club"
                    // path="/genres"
                />
            </ul>
        </div>
    )
}

export default Cards;