import React from 'react';
import './Card.css';

function Card({card,onDelete}) {
  return (
    <div className="Card">
      <button type='button' onClick={() => onDelete(card)}> delete </button>
      <h3> {card.title} </h3>
      <p> {card.content} </p>
    </div>
  )
}

export default Card;
