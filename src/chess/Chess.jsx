import React from 'react'
import Field from './Field'
import ContextFields from './ContextFields'
import {pawnMove, bishopMove, rookMove} from './ChessMoves.js'

class Figure {
    constructor(color, img, weight, moveFunc) {
        this.color = color
        this.img = img
        this.weight = weight 
        this.moveFunc = moveFunc
    }

    move(color, pos, fields) {
        return this.moveFunc(color, pos, fields)
    }
}

export default function Chess () {

    const blackFigures = React.useState(() => {
        let firstArr = []

        for (let i = 0; i < 8; i++) {
            firstArr[i] = new Figure(false, "/image/b-1.png", 1, pawnMove)
        }

        let secondArr = [            
            new Figure(false, "/image/b-2.png", 2, rookMove),          
            new Figure(false, "/image/b-4.png", 3, pawnMove),  
            new Figure(false, "/image/b-3.png", 4, bishopMove),  
            new Figure(false, "/image/b-6.png", 6, pawnMove),
            new Figure(false, "/image/b-5.png", 5, pawnMove), 
            new Figure(false, "/image/b-3.png", 4, bishopMove),         
            new Figure(false, "/image/b-4.png", 3, pawnMove),
            new Figure(false, "/image/b-2.png", 2, rookMove),
        ]
        
        return [...firstArr, ...secondArr]
        
    })[0]

    const whiteFigures = React.useState(() => {
        let firstArr = []

        for (let i = 0; i < 8; i++) {
            firstArr[i] = new Figure(true, "/image/w-1.png", 1, pawnMove)
        }

        let secondArr = [
            new Figure(true, "/image/w-4.png", 2, rookMove),          
            new Figure(true, "/image/w-2.png", 3, pawnMove),    
            new Figure(true, "/image/w-3.png", 4, bishopMove),
            new Figure(true, "/image/w-5.png", 5, pawnMove),
            new Figure(true, "/image/w-6.png", 6, pawnMove),
            new Figure(true, "/image/w-3.png", 4, bishopMove),
            new Figure(true, "/image/w-2.png", 3, pawnMove),
            new Figure(true, "/image/w-4.png", 2, rookMove),
        ]
        
        return [...firstArr, ...secondArr]
        
    })[0]

    const [fields, setFields] = React.useState(() => {
        let arr = []

        for (let i = 0; i < 64; i++) {
            arr[i] = {id: i, figure: null}
        }  

        for (let i = 15, j = 0; i >= 0 && j < 16; i--, j++) {
            arr[i].figure = blackFigures[j]
        }

        for (let i = 48, j = 0; i < 65 && j < 16; i++, j++) {
            arr[i].figure = whiteFigures[j]
        }

        return [...arr]

    })

    const [clicks, setClicks] = React.useState([])
    const [turn, setTurn] = React.useState(true)
    const [fieldsCanMove, setFieldsCanMove] = React.useState([])

    const moveChessPiece = (field) => {
        let arr = [...clicks]

        arr = arr.length === 2 ? [] : arr

        if (arr.length === 0 && field.figure && field.figure.color === turn) {
            arr = [field.id]
            setFieldsCanMove(field.figure.move(turn, field.id, fields))
        } else if (arr.length === 1 && (new Set(fieldsCanMove)).has(field.id)) {
            if (!field.figure) {
                arr = [...arr, field.id]
            } else if(field.figure.color !== turn) {
                arr = [...arr, field.id]
            }
            
        } else {
            arr = []
            setFieldsCanMove([])
        }
        
        
        if (arr.length === 2) {
            setFieldsCanMove([])
            setTurn((turn) => (!turn))
        } 
        setClicks([...arr])
        
    }

    React.useEffect(() => {
        if (clicks.length === 2) {
            let firstClick = clicks[0]
            let secondClick = clicks[1]
            let arr = [...fields]
            if (arr[firstClick]) {
                arr[secondClick].figure = arr[firstClick].figure
                arr[firstClick].figure = null
                setFields([...arr])
            }
        }
    }, [clicks])
   
    return (
        <div className='chess'>
            <div className='chess-board'>
                <ContextFields.Provider value={[clicks, moveChessPiece, fieldsCanMove]}>
                    {  
                        fields.map((field) => (
                            <Field key={field.id} field={field}/>
                        ))
                    }
                </ContextFields.Provider>   
            </div>
        </div>
    )
}