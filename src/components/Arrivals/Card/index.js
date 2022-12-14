import './styles.css';
import NewTitle from './NewTitle';
import CardHover from './CardHover';
import React from 'react';
import Popup from '../../../components/popup/index.js';
import {useState, useContext} from 'react';
import {Context} from '../../cartContext';

const Card = ({item}) => {
  // console.log(item);
  const [state, setState] = useState(false);
  // console.log('cart is +++++123124', cart);
  // console.log(handleClick);
  return (
    <>
      {' '}
      {/* <div onClick={() => handleClick(item)}> */}
      <div className="MyCard" onClick={() => setState(!state)}>
        <CardHover />
        <NewTitle />
        <img
          className="MyImage2"
          src={item.thumbnail || item.image}
          alt="new clothes"
        />
        <div className="Description">
          <p className="MyP">{item.description}</p>
          <span className=".MySpan2">$ {item.price}</span>
        </div>
      </div>
      {state && <Popup specification={item} />}{' '}
    </>
  );
};
export default Card;
