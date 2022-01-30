import React from 'react'

export default React.memo(function CalcButton({name, btnFunc}) {
    console.log("rerender");
    

    return(
        <button className="calc-button" onClick={() => {btnFunc(name)}}>{name}</button>
    )
}, (prevProps, nextProps) => {
    if (prevProps.btnFunc.toString() !== nextProps.btnFunc.toString()) {
        return false
    } else {
        return true
    }
})