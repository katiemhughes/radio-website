import React from 'react';
import CardItem from "../cards/CardItem";
import "../cards/Cards.css"
import "../home/Data";

const Cards = () => {
    return (
        <div className="cards" id="picks">
            <h1 className="cards__title">Our Picks of the Month</h1>
            <ul className="cards__items">
                <CardItem
                    src="images/ship-sket.png"
                    alt="Ship Sket w/ Poundshop"
                    djName="Ship Sket w/ Poundshop"
                    date="25 Nov 2021"
                    genre1="Grime"
                    genre2="Experimental"
                    genre3="Bass"
                    showLink="https://www.mixcloud.com/RainyCityRadio/ship-sket-w-poundshop-251121/"
                    // path="/genres"
                />
                <CardItem
                    src="images/digby-lintd.jpg"
                    alt="dig B x LINTD"
                    djName="dig B x LINTD"
                    date="3 Dec 2021"
                    genre1="Vocals"
                    genre2="Dancehall"
                    genre3="Experimental"
                    showLink="https://www.mixcloud.com/RainyCityRadio/dig-b-x-lintd-031221/"
                    // path="/genres"
                />
                <CardItem
                    src="images/rob-rosa-evan.jpg"
                    alt="MIRE"
                    djName="MIRE"
                    date="2 Dec 2021"
                    genre1="Ambient"
                    genre2="Post Punk"
                    genre3="Downtempo"
                    showLink="https://www.mixcloud.com/RainyCityRadio/rob-rosa-evan-021221/"
                    // path="/genres"
                />
                <CardItem
                    src="images/leala-rain.png"
                    alt="Leala-Rain"
                    djName="Leala-Rain"
                    date="18 Dec 2021"
                    genre1="Club"
                    genre2="Techno"
                    genre3="Breaks"
                    showLink="https://www.mixcloud.com/RainyCityRadio/leala-rain-181221/"
                    // path="/genres"
                />
            </ul>
        </div>
    )
}

export default Cards;