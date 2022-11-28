import {FaAngleDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './style.css';

const ListItemsText = ['shop', 'Apperals', 'journal', 'about'];

const leftSide = () => {
  return (
    <div className="LeftDiv">
      <span className="Logo">matter</span>
      <div className="MyUl">
        {ListItemsText.map((item) => {
          return (
            <div className="myLi">
              {item === 'Apperals' && <Link to={'/Apperals'}>{item}</Link>}{' '}
              {item === 'shop' && <Link to={'/'}>{item}</Link>}{' '}
              {item === 'journal' && <Link to={'/journal'}>{item}</Link>}{' '}
              {item === 'about' && <Link to={'/about'}>{item}</Link>}{' '}
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
