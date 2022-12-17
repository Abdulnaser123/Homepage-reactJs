import './style.css';
import SearchImage from './images/search.png';
import favoriteImage from './images/favorite.png';
import shopImage from './images/shopping.png';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';

// -----
import {Context} from '../../../cartContext';
const RightSide = () => {
  const value = useContext(Context);
  console.log('value is +++++', value);

  return (
    <div className="RightSide">
      <div className="LogIn">
        {!localStorage.password ? (
          <Link to={'/login-page'}>login</Link>
        ) : (
          <Link to={'/logout-page'}>Logout</Link>
        )}
      </div>
      {/* <a href=""><img src="" alt="user image"/></a> */}
      <a href="">
        <img className="MyImg" src={SearchImage} alt="search" />
      </a>
      <a href="">
        <img className="MyImg" src={favoriteImage} alt="favorite" />
      </a>
      <a
        className="cart"
        href="#h"
        data-bs-toggle="modal"
        data-bs-target="#videoModal"
      >
        <img className="MyImg" src={shopImage} alt="shop" />
        <span className="counter">1</span>
      </a>
      <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{value}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
