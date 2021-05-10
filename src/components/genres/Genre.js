import React from 'react';
import Button from '../genretags/GenreTags';

function Genre(props) {
    return (
        <li className="genre">
                <div className="grid__col">
                    <h1 className="genre-title">{props.genre}</h1>
                    <Button 
                        onClick={() => {console.log("You clicked on me")}}
                        type="button"
                    >{props.subgenre1}</Button>
                    <Button 
                        onClick={() => {console.log("You clicked on me")}}
                        type="button"
                    >{props.subgenre2}</Button>
                </div>
        </li>
    )
}

export default Genre;
