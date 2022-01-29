

export default function Field({name, index, changeTurn, disabled}) {

    return (
        <button className="field" disabled={disabled} onClick={() => (changeTurn(index))}>{name}</button>
    )
}