import React, {useState} from 'react';
import style from './style.module.css';
import {AiOutlineClose} from 'react-icons/ai';
import SlideImages from './sideImages/index.js';

let Container = ({specification}) => {
  const [close, setClose] = useState(true);
  // console.log(specification);

  return (
    close && (
      <>
        {' '}
        <div className={style.container}>
          <div className={style.sideept}>
            <div>The Sidewept Dhoti</div>
            <div onClick={() => setClose(false)}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className={style.sideImages}>
            <SlideImages item={specification} />
          </div>
        </div>
      </>
    )
  );
};
export default Container;
