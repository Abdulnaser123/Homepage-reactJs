import "./style.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {FaHamburger} from "react-icons/fa"
import {FaAngleDown} from "react-icons/fa"
import {useState} from "react"

const items = ["shop", "fabric", "journal", "about"]

const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  const close = (
    <AiOutlineCloseCircle
      className="icon"
      size="40px"
      onClick={() => setOpen(!isOpen)}
    />
  )
  const burger = (
    <FaHamburger
      className="icon"
      size="40px"
      onClick={() => setOpen(!isOpen)}
    />
  )
  return (
    <div className="MyBurger">
      {isOpen ? close : burger}
      {isOpen && (
        <div className="Menu">
          {items.map(item => {
            return (
              <div className="MenuItem">
                {" "}
                {item}{" "}
                <div className="down margin">
                  <FaAngleDown />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Burger
