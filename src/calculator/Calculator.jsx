import React from 'react' 
import CalcButton from './CalcButton'

export default function Calculator() {
    const [buttons, setButtons] = React.useState(() => {
        let arr = Array()
        for (let i = 1; i < 10; i++){
            arr[i-1] = i.toString()
        }
        arr = [...arr, ...["0", "+", "-", "*", "/"]]
        return arr
    })

    const [expression, setExpression] = React.useState([])

    const addSymbol = (symbol) => {
        setExpression(expression + symbol)
    }

    const deleteSymbol = () => {
        let arr = [...expression]
        arr.pop()
        setExpression(arr)
    }

    const clearExpression = () => {
        setExpression("")
    }

    

    return (
        <div className='calculator'>
            <div className='expression'>
                <p>{expression}</p>
            </div>
            <div className='calc-buttons'>
                {buttons.map((name, index) => (
                    <CalcButton name={name} key={index} btnFunc={addSymbol}/>
                ))}
                <CalcButton name={"←"} key={"55"} btnFunc={deleteSymbol}/>
                <CalcButton name={"C"} key={"66"} btnFunc={clearExpression}/>
            </div>
        </div>
    )
}