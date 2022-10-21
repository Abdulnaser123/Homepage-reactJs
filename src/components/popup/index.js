import React, {useState} from 'react'
import style from './style.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import SlideImages from './sideImages/index.js'

let Container = (props) => {
 //  console.log(props.specification.item.images)
 const [close, setClose] = useState(true)
 return (
  close && (
   <>
    {' '}
    <div className={style.container}>
     <div className={style.sideept}>
      <div>The Sidewept Dhoti</div>
      <div onClick={() => setClose(false)}>
       <AiOutlineClose size={30} />
      </div>
     </div>
     <div className={style.sideImages}>
      <SlideImages item={props.specification.item} />
     </div>
    </div>
   </>
  )
 )
}
export default Container
