import React from 'react';
import List from './List.js';
import './App.css';


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}


class App extends React.Component {
  state = {
    store: this.props.store,
  }

  handleDeleteCard = (card) => {
    const allCards = omit(this.state.store.allCards,card.id);
    const lists = this.state.store.lists.map( list => (
      {...list, cardIds: list.cardIds.filter(id => id !== card.id)}
    ));
    const store = {lists, allCards};
    this.setState({ store });
  }

  handleAddCard = (listId) => {
    const newCard = newRandomCard();
    const newLists = this.state.store.lists.map( list => {
      if(list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
    }
  })


  }

  render() {
    const { store } = this.state;
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          { store.lists.map( list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map( id => store.allCards[id])}
              onDelete={this.handleDeleteCard}
              onAddItem={this.handleAddItem}
            />
          )) }
        </div>
        </main>
    )
  }
}

export default App;
