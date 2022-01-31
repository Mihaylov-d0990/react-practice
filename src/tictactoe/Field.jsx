import React from 'react'

export default React.memo(function Field({field, changeTurn, disabled}) {

    return (
        <button className="field" disabled={disabled} onClick={() => (changeTurn(field.id))}>{field.symbol}</button>
    )
}, (prevProps, nextProps) => { 
    if (prevProps.field.symbol !== nextProps.field.symbol || prevProps.disabled !== nextProps.disabled) {
        return false
    } else {
        return true
    }
})