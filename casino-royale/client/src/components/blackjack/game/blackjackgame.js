import React, { Component } from 'react';
import Card from '../card';
import Text from '../text';
import Button from '../button';
import './game.css';

import {
  Link,
 } from 'react-router-dom';

class Game extends Component {

  constructor(props) {

    //Setting up the states
    super(props);
    this.state = {
      playerCards: [],
      dealerCards: [],
      deck: [...(props.cards || [])],
      playerScore: 0,
      dealerScore: 0,
      playerStay: false,
      playerBust: false,
      dealerBust: false,
      winner: null,
      gameOver: false,
    };

    //Setting up the button states
    this.playerHit = this.hitPlayer.bind(this);
    this.playerStand = this.playerStand.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }

  resetGame() {
    this.setState({
      playerCards: [],
      dealerCards: [],
      deck: [...this.props.cards],
      playerScore: 0,
      dealerScore: 0,
      playerStay: false,
      playerBust: false,
      dealerBust: false,
      winner: null,
      gameOver: false,
    });
    this.startGame();
  }

  //Go exit to title screen
  exitGame(){


this.startGame()
  }

  //Start the game
  startGame() {
    const { deck } = this.state;
    const dealOne = this.dealCard(deck);
    const dealTwo = this.dealCard(dealOne.cards);
    const dealThree = this.dealCard(dealTwo.cards);
    
    this.setState({
      playerCards: [dealOne.card, dealThree.card],
      dealerCards: [dealTwo.card],
      fullDeck: dealThree.cards,
      playerScore: this.calculateScore([dealOne.card, dealThree.card]),
      dealerScore: isNaN(dealTwo.card.value) ? 10 : dealTwo.card.value
    });
  }

  //When the player hits
  hitPlayer() {
    const { deck, playerBust } = this.state;
    const deal = this.dealCard(deck);
    const score = this.calculateScore([...this.state.playerCards, deal.card]);

    //When the player does not busts(Player's score is within 21 points)
    if (!playerBust) {
      this.setState({
        playerCards: [...this.state.playerCards, deal.card],
        fullDeck: deal.cards,
        playerScore: this.calculateScore([...this.state.playerCards, deal.card]),
      });
    }

    //Player busts when the player's score is over 21
    if (score > 21) {
      this.setState({
        playerBust: true,
        winner: "Dealer",
        gameOver: true,
        playerHit: false,
        playerStand:false
        
      });
    }
  }

  //When the player decides to stay

  playerStand() {
    const intervalId = setInterval(() => {
      const { deck, playerScore, gameOver } = this.state;
      const deal = this.dealCard(deck);
      const score = this.calculateScore([...this.state.dealerCards, deal.card]);

      //If the round is not over yet
      if (!gameOver) {
        //Dealer draws the card until the dealer's score is at least 17
        if (score < 17) {
          this.setState({
            dealerCards: [...this.state.dealerCards, deal.card],
            fullDeck: deal.cards,
            dealerScore: this.calculateScore([...this.state.dealerCards,deal.card,]),
            });
          
          }
        //When the dealer busts(dealer's score is over 21)
        if (score > 21) {
          this.setState({dealerBust:true,
            winner: "Player",
            gameOver: true,
            playerHit: false,
            playerStand:false
                      
          });

          clearInterval(intervalId);

          //When the dealer's score is higher than the player's within the score of 21
        } else if (21>=score>=17 && score > playerScore) {
          this.setState({
            winner: "Dealer",
            gameOver: true,
            playerHit: false,
            playerStand:false
                        
          });
            clearInterval(intervalId);

          //When the dealer and the player's score is tie
        } else if (21>=score>=17 && score === playerScore) {
          this.setState({
            winner: "Tie",
            gameOver: true,
            playerHit: false,
            playerStand:false
           
          });
            clearInterval(intervalId);
        }
        }
      
    }, 1000);
  }


  //Dealing or drawing the card
  dealCard(cards) {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const card = cards[randomNumber];
    cards.splice(randomNumber, 1);

    return {
      card,
      cards,
    };
  }

  //To calculate the score 
  calculateScore(cards) {
     let score = cards.map(card => {
      return card.value === 'ace' ? 11 :isNaN(card.value) ? 10 : card.value;
  
       
    }).reduce((a, b) => {
        return parseInt(a, 10) +  parseInt(b, 10);
    });

    //handle ace
    const cardValues = cards.map(card => {
      return card.value;
    });

    if(score > 21 && cardValues.includes('ace')) {
      score -= 10;
    }

    return score;
  }

  render() {
    const {
      playerCards,
      dealerCards,
      playerScore,
      dealerScore,
      playerBust,
      dealerBust,
      winner,
    } = this.state;

    return (
      <div className="game-container">
      
        <div className="dealer-cards-container">
          <div className="score-container">
            <Text type={"score-text"}>{dealerBust ? "Bust" : dealerScore}</Text>
          </div>
          {dealerCards.map((card, index) => {
            return (
              <div className="dealer-cards" key={index}>
                <Card suit={card.suit} value={card.value} />
              </div>
            )
          })}

          {winner === "Dealer" && (<div className="winner">WIN</div>)}
        </div>
        <div className="player-cards-container">
          <div className="score-container">
            <Text type={"score-text"}>{playerBust ? "Bust" : playerScore}</Text>
          </div>

          {playerCards.map((card, index) => {
            return (
              <div className="player-cards" key={index}>
                <Card suit={card.suit} value={card.value} />
              </div>
            );
          })}

          {winner === "Player" && <div className="winner">WIN</div>}
        </div>

          <div className="button-container">
          <Button type={"btn hit-btn"} clickHandler={this.playerHit}>
            HIT
          </Button>
          <Button
            type={"btn stand-btn"}
            clickHandler={this.playerStand}
            color={"tertiary"}
          >
            STAND
          </Button>
          <Button type={"btn reset-btn"} clickHandler={this.resetGame}>
            RESET
          </Button>
          <Link to = "/"   class = "btn btn-lg btn-primary">
          <Button type={"btn exit-btn"} clickHandler={this.exitGame}>
            EXIT
          
          </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Game;
