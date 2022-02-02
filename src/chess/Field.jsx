import React from "react"
import ChessPiece from "./ChessPiece"
import ContextFields from './ContextFields'

export default React.memo(function Field({field}) {

    const moveChessPiece = React.useContext(ContextFields)[1]
    const clicks = React.useContext(ContextFields)[0]
    const fieldsCanMove = React.useContext(ContextFields)[2]

    let style = ""

    if ((new Set(clicks)).has(field.id) || (new Set(fieldsCanMove)).has(field.id)) {
        style = "move-color-style"
    } else {
        style = "static-color-style"
    }

    return (
        <div className={style + " chess-field"} onClick={() => (moveChessPiece(field))}>
            {field.figure && <ChessPiece field={field} />}
        </div>
    )
})