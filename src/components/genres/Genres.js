import React from 'react';
import './Genres.css';
import Genre from '../genres/Genre';

function Genres() {
    return (
        <div className="genres__container">
            <div className="title__row">
                <h1>Genres</h1>
            </div>
            <ul className="genres__items">
                <Genre
                    genre="UK Club"
                    subgenre1="UK Funky"
                    subgenre2="Hardcore" 
                />
                <Genre
                    genre="Electronic" 
                    subgenre1="House"
                    subgenre2="Techno"
                />
                <Genre
                    genre="World Music"
                    subgenre1="GQOM"
                    subgenre2="Latin"
                />
                <Genre
                    genre="Hip-Hop/Rap"
                    subgenre1="Trap"
                    subgenre2="Grime"
                />
                <Genre
                    genre="Alternative" 
                />
                <Genre
                    genre="Rock" 
                />
                <Genre
                    genre="Experimental" 
                />
                <Genre
                    genre="Downtempo" 
                />
            </ul>
    </div>
    )
}

export default Genres;
