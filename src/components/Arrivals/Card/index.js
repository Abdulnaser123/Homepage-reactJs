import './styles.css'
import NewTitle from './NewTitle'
import CardHover from './CardHover'
import React, {useState} from 'react'
import Popup from '../../../components/popup/index.js'

const Card = (props) => {
 //  console.log(props.item.thumbnail)
 const [state, setState] = useState(false)

 return (
  <>
   {' '}
   <div className="MyCard" onClick={() => setState(!state)}>
    <CardHover />
    <NewTitle />
    <img className="MyImage2" src={props.item.thumbnail} alt="new clothes" />
    <div className="Description">
     <p className="MyP">Pueraria Mirifica And Study Phyto Estrogens</p>
     <span className=".MySpan2">$599.00</span>
    </div>
   </div>
   {state && <Popup specification={props} />}
  </>
 )
}
export default Card
