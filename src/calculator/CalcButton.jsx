

export default function CalcButton({name, btnFunc}) {
    

    return(
        <button className="calc-button" onClick={() => {btnFunc(name)}}>{name}</button>
    )
}