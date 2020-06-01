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
      bankerCards: [],
      deck: [...(props.cards || [])],
      playerFinalScore: 0,
      bankerFinalScore: 0,
      playerScore: 0,
      bankerScore: 0,
      playerThirdCard: false,
      bankerThirdCard: false,
      winner: null,
      gameOver: false,
    };

    //Setting up the button states
    
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
      bankerScore: 0,
      playerFinalScore: 0,
      bankerFinalScore: 0,
      thirdCard: false,
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
    const dealFour = this.dealCard(dealThree.cards);
    
    this.setState({
      playerCards: [dealOne.card, dealThree.card],
      bankerCards: [dealTwo.card,dealFour.card],
      fullDeck: dealFour.cards,
      playerScore: this.calculateScore([dealOne.card, dealThree.card]),
      bankerScore: this.calculateScore([dealTwo.card, dealFour.card]),   

    });
  }
  
 //When the socre is 8 or 9, it is a natural win
  naturalwin(){
    //When the player has the score of 8 or 9, and banker has the score less than 8,player wins
    if (playerFinalScore === 8 && bankerFinalScore < 8) {
      this.setState({
        winner: "Player",
        gameOver: true,
        clearInterval(intervalId);
      })
    //When the player has the score of 9, and banker has the score less than 9,player wins  
    } else if (playerFinalScore === 9 && bankerFinalScore < 9) {
      this.setState({
        winner: "Player",
        gameOver: true,
        clearInterval(intervalId);
      })
      //When the banker has the score of 8 or 9, and the player has the score less 8, banker wins
    } else if (bankerFinalScore === 8 && playerFinalScore < 8) {
      this.setState({
        winner: "Banker",
        gameOver: true,
        clearInterval(intervalId);
      })
     //When the banker has the score has of 9, and the player has the score less 9, banker wins 
    } else if (bankerFinalScore === 9 && playerFinalScore < 9) {
      this.setState({
        winner: "Banker",
        gameOver: true,
        clearInterval(intervalId);
      })

     //When the player and the banker has the score of 8, it is a tie 
    } else if (playerFinalScore === 8 && bankerFinalScore === 8) {
      this.setState({
        winner: "Tie",
        gameOver: true,
        clearInterval(intervalId);
      })
    
      //When the player and the banker has the score of 9, it is a tie 
    } else if (playerFinalScore === 9 && bankerFinalScore === 9) {
      this.setState({
        winner: "Tie",
        gameOver: true,
        clearInterval(intervalId);
      })

     //Third card draw applies depends on situation 
    } else {
      thirdCard();
    }
  }    
  
  //Third card drawing 
  thirdCard(){
    playerThirdCard(){
    //Player third card draw
    const dealFive = this.dealCard(dealFour.cards);
    
     this.setState({
      fullDeck: dealFive.cards,
      playerCards: [dealOne.card, dealThree.card, dealFive.card],
      bankerCards: [dealTwo.card,dealFour.card],
      playerCards: [dealOne.card, dealThree.card, dealFive.card],
      playerScore: this.calculateScore([dealOne.card, dealThree.card, dealFive.card]),
      bankerScore: this.calculateScore([dealTwo.card, dealFour.card])
     });
  }

 //Banker third card draw
  bankerThirdCard(){
    const dealSix = this.dealCArd(dealFive,cards);

    this.setState({
      fullDeck: dealSix.cards,
      playerCards: [dealOne.card, dealThree.card, dealFive.card],
      bankerCards: [dealTwo.card,dealFour.card, dealSix.card],
      playerCards: [dealOne.card, dealThree.card, dealFive.card],
      playerScore: this.calculateScore([dealOne.card, dealThree.card, dealFive.card]),
      bankerScore: this.calculateScore([dealTwo.card, dealFour.card], dealSix.card)
    });
  }

  //If the player score has less than 6, the player draws the third card
  if(playerScore <6 && playerScore >=0) {
    playerThirdCard = card.draw();

    //
    playerThirdCard = playerThirdCard.sort;
    if(playerThirdCard >= 0 && playerThirdCard <= 9) {
    //Banker draws third card except then the player three card score is 8  
      if (bankerScore === 3 && playerThirdCard != 8 ) {
      var bankerThirdCard = card.draw();
        banker.push(bankerThirdCard);
        return 
//If the Banker is 4 and player three card scored between 2 and 7
      } else if (bankerScore === 4 && (
          playerThirdCard >= 2 && playerThirdCard <= 7 )) {
      
        var bankerThirdCard = shoe.draw();
        banker.push(bankerThirdCard);
        
 //If the banker is Banker 5 and player three card score between 4 and 7
      } else if (bankerScore === 5 && (
        playerThirdCard >= 4 && playerThirdCard <= 7 )) {
        var bankerThirdCard = shoe.draw();
        banker.push(bankerThirdCard);
        return 

//If the Banker 6 and player three card score between 6 and 7
      } else if (bankerScore === 6 && (
        playerThirdCard >= 6 && playerThirdCard <= 7 )) {
        var bankerThirdCard = shoe.draw();
        banker.push(bankerThirdCard);
        return 
  }

//If the banker score is below 6 banker draws a third card  
  if(bankerScore >= 0 && bankerScore < 6) {
    var bankerThirdCard = shoe.draw();
    banker.push(bankerThirdCard);
    return 
 }
}
  

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
   return card.value === '10','jack','queen','king' 0: card.value;

    
 }).reduce((a, b) => {
     return parseInt(a, 10) +  parseInt(b, 10);
 });

 //handle 10, jack, queen and king equals 0
 const cardValues = cards.map(card => {
   return card.value;
 });

  return score;
}



render() {
  const {
    playerCards,
    bankerCards,
    playerFinalScore,
    bankerFinalScore,
    winner,
     
  } = this.state;

  return (
    <div className="game-container">
    
      <div className="banker-cards-container">
        <div className="score-container">
          <Text type={"score-text"}>{bankerFinalScore}</Text>
        </div>
        {bankerCards.map((card, index) => {
          return (
            <div className="banker-cards" key={index}>
              <Card suit={card.suit} value={card.value} />
            </div>
          )
        })}

        {winner === "Banker" && (<div className="winner">WIN</div>)}
      </div>
      <div className="player-cards-container">
        <div className="score-container">
          <Text type={"score-text"}>{playerFinalScore}</Text>
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

        <div className="button-container"></div>
        
          <Button type={"btn reset-btn"} clickHandler={this.resetGame}>
            RESET
          </Button>
          <Link to = "/"   class = "btn btn-lg btn-primary">
          <Button type={"btn exit-btn"} clickHandler={this.exitGame}>
            EXIT
          
          </Button>
          </Link>
        </div>
      
    );
  }
  }


export default Game