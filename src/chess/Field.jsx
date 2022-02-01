import ChessPiece from "./ChessPiece"

export default function Field({figure}) {

    return (
        <div className="chess-field">
            {figure && <ChessPiece figureSrc={figure.img} />}
        </div>
    )
}