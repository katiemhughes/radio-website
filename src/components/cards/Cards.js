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
                    src="images/acidhousedeathsquad.jpg"
                    alt="Acidhousedeathsquad"
                    djName="Acidhousedeathsquad"
                    date="02 September 2021"
                    genre1="Dub"
                    genre2="House"
                    genre3="Downtempo"
                    showLink="https://www.mixcloud.com/RainyCityRadio/acidhousedeathsquad-020921/"
                    // path="/genres"
                />
                <CardItem
                    src="images/laura.jpg"
                    alt="Laura Hancock"
                    djName="Laura Hancock"
                    date="28 August 2021"
                    genre1="Trance"
                    genre2="House"
                    genre3="Acid"
                    showLink="https://www.mixcloud.com/RainyCityRadio/laura-hancock-280821/"
                    // path="/genres"
                />
                <CardItem
                    src="images/levi.jpg"
                    alt="Levi Love"
                    djName="Levi Love"
                    date="05 August 2021"
                    genre1="Afro House"
                    genre2="Deep House"
                    genre3="Jazz"
                    showLink="https://www.mixcloud.com/RainyCityRadio/levi-love-100921/"
                    // path="/genres"
                />
                <CardItem
                    src="images/static.jpg"
                    alt="Static Interlude"
                    djName="Static Interlude"
                    date="14 August 2021"
                    genre1="Hip Hop"
                    genre2="Downtempo"
                    genre3="Soul"
                    showLink="https://www.mixcloud.com/RainyCityRadio/static-interlude-100921/"
                    // path="/genres"
                />
            </ul>
        </div>
    )
}

export default Cards;