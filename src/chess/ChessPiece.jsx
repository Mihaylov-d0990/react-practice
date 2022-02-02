export default function ChessPiece({field}) {

    return (
        <div className="pre-figure-block">
            <img className="figure-block" alt="" src={field.figure.img}/>
        </div>
    )
}
