
export default function ChessPiece({figureSrc}) {

    return (
        <div className="pre-figure-block">
            <img className="figure-block" alt="" src={figureSrc}/>
        </div>
    )
}