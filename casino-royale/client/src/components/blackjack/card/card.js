import React, {PropTypes} from 'react';
import cx from 'classnames';

import './card.css';

function Card ({ suit, value }) {
  return(
    <div className={cx({ 'card': true, [`card-suit-${suit}`]: true, [`card-value-${value}`]: true})}/>
    );
  };

export default Card;