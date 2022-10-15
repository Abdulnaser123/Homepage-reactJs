import "./style.css"
import LiftSide from "./LEFT/index"
import RightSide from "./RightSide/index"
import BurgerMenu from "./BurgerMenu"
const NaveBar = () => {
  return (
    <div className="NaveBar">
      <BurgerMenu />
      <LiftSide />
      <RightSide />
    </div>
  )
}

export default NaveBar
