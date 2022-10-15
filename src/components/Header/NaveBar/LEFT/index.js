import {FaAngleDown} from "react-icons/fa"
import "./style.css"

const ListItemsText = ["shop", "fabric", "journal", "about"]

const leftSide = () => {
  return (
    <div className="LeftDiv">
      <span className="Logo">matter</span>
      <div className="MyUl">
        {ListItemsText.map(item => {
          return (
            <div className="myLi">
              {" "}
              {item}{" "}
              <div className="down">
                <FaAngleDown />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default leftSide
