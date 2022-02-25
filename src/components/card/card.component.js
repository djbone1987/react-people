import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt={`person ${props.person.id}`} src={`https://robohash.org/${props.person.id}?set=set5&size=180x180`}/>
        <h2>{props.person.name}</h2>
        <p>{props.person.email}</p>
    </div>
);