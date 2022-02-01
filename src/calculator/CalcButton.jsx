import React from 'react'

export default React.memo(function CalcButton({name, btnFunc}) {

    return(
        <button className="calc-button" onClick={() => {btnFunc(name)}}>{name}</button>
    )

}, (prevProps, nextProps) => {

    // If the length of the current array differs from the previous one, then rerender is performed.
    // Если длина текущего массива отличается от предыдущего, то производится ререндер.

    if (prevProps.btnFunc.toString() !== nextProps.btnFunc.toString()) {
        return false
    } else {
        return true
    }
    
})