import {createContext} from 'react';
import Modal from './Header/NaveBar/RightSide/index.js';
// const [cart, setCart] = useState([123]);
// const handleClick = (item) => {
//   cart.push(item);
//   console.log(item.id);
// };
export const Context = createContext();
function cartContext() {
  return (
    <Context.Provider value="not null here">
      <Modal />
    </Context.Provider>
  );
}

export default cartContext;
