
import React from 'react';
import './List.css';
import Card from './Card';


function List(props) {
  return (
    <div className="List">
      <header className="List-header">
        <h2> {props.header} </h2>
        </header>

      <div className="List-cards">
        {props.cards.map(card =>
          <Card
            key={card.id}
            card={card}
            onDelete={props.onDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={props.onAddItem(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </div>
  )
}

export default List;
