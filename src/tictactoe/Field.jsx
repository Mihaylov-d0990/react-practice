import React from 'react'

export default React.memo(function Field({field, changeTurn, disabled}) {

    return (
        <button className="field" disabled={disabled} onClick={() => (changeTurn(field.id))}>{field.symbol}</button>
    )
    
}, (prevProps, nextProps) => { 

    // If the length of the current array differs from the previous one, then rerender is performed.
    // Если текущий символ отличается предыдущего или текущее состояние включения кнопок отличается от предыдущего, то производится ререндер.

    if (prevProps.field.symbol !== nextProps.field.symbol || prevProps.disabled !== nextProps.disabled) {

        return false

    } else {

        return true

    }
})