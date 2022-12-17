import {FaAngleDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './style.css';

const ListItemsText = ['shop', 'Apparels', 'journal', 'about'];

const leftSide = () => {
  return (
    <div className="LeftDiv">
      <span className="Logo">matter</span>
      <div className="MyUl">
        {ListItemsText.map((item) => {
          return (
            <div className="myLi">
              {item === 'Apparels' && (
                <Link to={'/Apparels'}>
                  <a href="#_">{item}</a>
                </Link>
              )}{' '}
              {item === 'shop' && (
                <Link to={'/'}>
                  <a href="#_">{item}</a>
                </Link>
              )}{' '}
              {item === 'journal' && (
                <Link to={'/journal'}>
                  <a href="#_">{item}</a>
                </Link>
              )}{' '}
              {item === 'about' && (
                <Link to={'/about'}>
                  <a href="#_">{item}</a>
                </Link>
              )}{' '}
              <div className="down">
                <FaAngleDown />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default leftSide;
