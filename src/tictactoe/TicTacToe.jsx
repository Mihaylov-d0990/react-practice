import React from 'react'
import Field from './Field.jsx'

export default function TicTacToe () {

    const [fields, setFields] = React.useState(() => {
        let arr = []
        for (let i = 0; i < 9; i++) {
            arr[i] = {id: i, symbol: " "}
        }
        return [...arr]
    })

    const [turn, setTurn] = React.useState(true)
    const [disableButton, setDisableButton] = React.useState(true)
    const [winner, setWinner] = React.useState("")

    const fieldsRef = React.useRef()
    fieldsRef.current = fields

    const turnRef = React.useRef()
    turnRef.current = turn

    // Turn change function
    // Фунция смены хода 

    const changeTurn = React.useCallback((index) => {

        let arr = fieldsRef.current
        let outputArr = []

        for (let i = 0; i < arr.length; i++) {

            let obj = Object.assign({}, arr[i])
            outputArr[i] = obj

        }

        // Checks the empty field or not. If empty, then fills it depending on the turn
        // Проверяет пустое поле или нет. Если пустое, то заполняет его в зависимости от хода

        if (outputArr[index].symbol !== "X" && outputArr[index].symbol !== "O"){

            if (turnRef.current) {

                outputArr[index].symbol = "X"

            } else {

                outputArr[index].symbol = "O"

            }

            setTurn(!turnRef.current)
            setFields(outputArr)
        }
        
    }, [])

    const startMatch = () => {

        let start = true

        fields.map((field) => {

            if (field.symbol !== " ") {
                start = false
            }

            return 0

        })

        if (!turn) setTurn(() => (!turn))
        setDisableButton(() => (!start))
    }

    const resetMatch = () => {

        setDisableButton(false)
        setWinner("")
        let arr = [...fields]

        for (let i = 0; i < arr.length; i++) {
            arr[i].symbol = " "
        }

        setFields(arr)

    }

    React.useEffect(() =>{

        const checkWinner = (lineCheck) => {

            if (lineCheck.length === 3 && !disableButton) {

                setWinner(!turn ? "X won" : "O won")
                setDisableButton(() => (!disableButton)) 

            }

            return []
        }

        let line = []

        // Horizontal Win Check
        // Проверка выигрыша по горизонтали

        for (let i = 0; i < 3; i++) {

            for (let j = i * 3; j < (i + 1) * 3; j++) {

                if (j === i * 3 && fields[j].symbol !== " ") {
                    line.push(j)
                }
                
                if (j !== i * 3 && fields[j-1].symbol === fields[j].symbol && fields[j].symbol !== " ") {
                    line.push(j)
                } 
                
            }

            line = checkWinner(line)
        }
        
        // Vertical Win Check
        // Проверка выигрыша по вертикали

        for (let i = 0; i < 3; i++) {
            
            for (let j = i; j < 7 + i; j += 3){

                if (j === 0 + i && fields[j].symbol !== " ") {
                    line.push(j)
                }
                
                if (j !== 0 + i && fields[j-3].symbol === fields[j].symbol && fields[j].symbol !== " ") {
                    line.push(j)
                } 
            }

            line = checkWinner(line)
        }

        // Two diagonal checks
        // Две проверки по диагонали

        for (let i = 0; i < 9; i += 4) {

            if (i === 0 && fields[i].symbol !== " ") {
                line.push(i)
            }

            if (i !== 0 && fields[i-4].symbol === fields[i].symbol && fields[i].symbol !== " ") {
                line.push(i)
            } 
        }

        line = checkWinner(line)

        for (let i = 2; i < 7; i += 2) {

            if (i === 2 && fields[i].symbol !== " ") {
                line.push(i)
            }

            if (i !== 2 && fields[i-2].symbol === fields[i].symbol && fields[i].symbol !== " ") {
                line.push(i)
            } 
        }

        line = checkWinner(line)

    })

    return (
        <div className="tictactoe">
            <button onClick={() => (startMatch())}>Start</button>
            <button onClick={() => (resetMatch())}>Reset</button>
            <div className="area">
                {fields.map((field) => {
                    return <Field key={field.id} changeTurn={changeTurn} disabled={disableButton} field={field}/>
                })}
            </div>
            <div>{winner}</div>
        </div>
    )
}