import React from 'react'

export default function ChessPiece({figure}) {

    const hello = () => {
        console.log(figure.id);
    }

    return (
        <div className="pre-figure-block">
            <img onClick={() => (hello())} className="figure-block" alt="" src={figure.img}/>
        </div>
    )
}
