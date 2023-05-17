
import React from 'react'
import '../styles/Child.css'

const Selection = (props) => {
  return (
    <div className='fix-box subheading' id={props.id} onClick={()=>{props.applyColor(props.label)}}>
        Selection
        {/* {props.label} */}
    </div>
  )
}

export default Selection