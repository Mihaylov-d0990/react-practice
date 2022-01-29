

export default function Field({name, index, changeTurn}) {

    return (
        <button className="field" onClick={() => (changeTurn(index))}>{name}</button>
    )
}