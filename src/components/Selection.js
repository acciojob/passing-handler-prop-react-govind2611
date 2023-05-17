import React,{useState} from "react";


let Selection=({keys,applyColor})=>{
    console.log(keys,applyColor())
    console.log(applyColor())
    function colorChange(e){
        console.log(e.target)
        let v=e.target;
        v.style.backgroundColor=`${applyColor().background}`
    }
    return (
        <div>
            <div className={keys} onClick={colorChange}></div>
        </div>
    )
}
export default Selection