import React from 'react'
import Field from './Field.jsx'

export default function TicTacToe () {

    const [fields, setFields] = React.useState(() => {
        let arr = []
        for (let i = 0; i < 9; i++) {
            arr[i] = ""
        }
        return [...arr]
    })

    const [turn, setTurn] = React.useState(true)

    const changeTurn = (index) => {
        let arr = fields
        if (fields[index] !== "X" && fields[index] !== "O"){
            if (turn) {
                arr[index] = "X"
            } else {
                arr[index] = "O"
            }
            setTurn(() => (!turn))
            setFields(arr)
        }
        
    }

    React.useEffect(() =>{

        const checkWinner = (lineCheck) => {
            if (lineCheck.length === 3) {
                console.log(!turn ? "X won" : "O won", line);
            }
            return []
        }

        let line = []
        for (let i = 0; i < 3; i++) {
            for (let j = i * 3; j < (i + 1) * 3; j++) {

                if (j === i * 3 && fields[j] !== "") {
                    line.push(j)
                }
                
                if (j !== i * 3 && fields[j-1] === fields[j] && fields[j] !== "") {
                    line.push(j)
                } 
                
            }

            line = checkWinner(line)
        }

        
        
        for (let i = 0; i < 3; i++) {
            for (let j = i; j < 7 + i; j += 3){
                if (j === 0 + i && fields[j] !== "") {
                    line.push(j)
                }
                
                if (j !== 0 + i && fields[j-3] === fields[j] && fields[j] !== "") {
                    line.push(j)
                } 
            }

            line = checkWinner(line)
        }

        for (let i = 0; i < 9; i += 4) {
            if (i === 0 && fields[i] !== "") {
                line.push(i)
            }

            if (i !== 0 && fields[i-4] === fields[i] && fields[i] !== "") {
                line.push(i)
            } 
        }

        
        line = checkWinner(line)

        for (let i = 2; i < 7; i += 2) {
            if (i === 2 && fields[i] !== "") {
                line.push(i)
            }

            if (i !== 2 && fields[i-2] === fields[i] && fields[i] !== "") {
                line.push(i)
            } 
        }

        line = checkWinner(line)


    }, [turn])

    return (
        <div className="tictactoe">
            <div className="area">
                {fields.map((name, index) => {
                    return <Field key={index} index={index} changeTurn={changeTurn} name={name}/>
                })}
            </div>
        </div>
    )
}