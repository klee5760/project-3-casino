import React from 'react';
import Game from '../game/blackjackgame';
import CardDeckGenerator from '../card/cardDeckGenerator';

import './app.css';

function App() {

    const cards = CardDeckGenerator();

    return (
        <div className = "app">

            <Game cards = {cards} />
            
        </div>
    );
}

export default App;