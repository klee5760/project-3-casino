import React from 'react';
import Game from './baccaratgame';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '';
import cardDeckGenerator from '../card/cardDeckGenerator';

Enzyme.configure({ adapter: new Adapter() });

descripe('<Game />', () => {

let wrapper;
let props;

beforeEach(() => {
    props ={
        cards: cardDeckGenerator ()
    }

    wrapper = mount(
        <Game {...props} />
    );
});

it('renders the component', () => {
    expect(wrapper.length).toEqual(1);
});

it('has 52 cards in the deck when the game starts',() => {
    expect(wrapper.props().cards.length).toEqual(52);
});

it('deals two cards to player, and one to dealer', () => {

});

});


