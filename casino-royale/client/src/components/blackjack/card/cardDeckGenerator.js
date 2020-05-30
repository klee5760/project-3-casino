function CardDeckGenerator(){

    const suits = [
        'diamond',
        'spade',
        'heart',
        'club'
    ];

    const values =[
        'ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'jack',
        'queen',
        'king',

    ];

    let completeDeck=[];

    suits.forEach(suit => {
        values.forEach(value => {
            completeDeck.push({suit, value});
        });

    });

    return completeDeck;
}

export default CardDeckGenerator;