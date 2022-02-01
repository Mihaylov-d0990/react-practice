import React from 'react'

export default React.memo(function Field({field, changeTurn, disabled}) {

    return (
        <button className="field" disabled={disabled} onClick={() => (changeTurn(field.id))}>{field.symbol}</button>
    )
    
}, (prevProps, nextProps) => { 

    // If the current symbol differs from the previous one or the current state of the buttons is different from the previous one, then a rerender is performed.
    // Если текущий символ отличается предыдущего или текущее состояние включения кнопок отличается от предыдущего, то производится ререндер.

    if (prevProps.field.symbol !== nextProps.field.symbol || prevProps.disabled !== nextProps.disabled) {

        return false

    } else {

        return true

    }
})