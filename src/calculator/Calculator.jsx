import React from 'react' 
import CalcButton from './CalcButton'

export default function Calculator() {

    const buttons = React.useState(() => {
        let arr = []
        for (let i = 1; i < 10; i++){
            arr[i-1] = i.toString()
        }
        arr = [...arr, ...["0", "+", "-", "*", "/"]]
        return arr
    })[0]

    const [expression, setExpression] = React.useState('')
    
    const [operationResult, setOperationResult] = React.useState('')

    const addSymbol = (symbol) => {
        const operators = new Set(["*", "/", "+", "-"])
        let exp = expression

        if (operators.has(symbol)) {

            if (exp.length === 0 && symbol === "-") {

                setExpression(exp + symbol)
                
            } else if (operators.has(exp[exp.length - 1])) {  

                if (exp[0] !== "-" && exp[exp.length - 1] !== "-") {

                    exp = exp.substring(0, exp.length - 1) 
                    setExpression(exp + symbol)

                } else if (exp.length > 1) {

                    exp = exp.substring(0, exp.length - 1) 
                    setExpression(exp + symbol)
                }
                
            } else if (exp.length >= 1) {
                setExpression(exp + symbol)
            }
            
        } else {
            setExpression(exp + symbol)
        }
    }

    const deleteSymbol = () => {
        let exp = expression.substring(0, expression.length - 1)
        setExpression(exp)
    }

    const clearExpression = () => {
        setExpression("")
    }

    const result = (fNum, sNum, op) => {
        let res
        let f = Number(fNum)
        let s = Number(sNum)

        switch(op){
            case "+":
                res = f + s
            break;
            case "-":
                res = f - s
            break;
            case "*":
                res = f * s
            break;
            case "/":
                res = f / s
            break;
            default:
                res = ""
            break;
        }
        return res.toString()
    }

    
 
    React.useEffect(() => {

        const operators = new Set(["*", "/", "+", "-"])

        const combine = (expArr) => {
            let arrLength = expArr.length
            if (arrLength % 2 === 1 && arrLength > 2) {
    
                [...operators].map((op) => {               
                    for (let i = 0; i < expArr.length; i++) {
                        if (expArr[i] === op) {    
                            expArr.splice(i-1, 3, result(expArr[i-1], expArr[i+1], expArr[i]))
                            return combine(expArr)
                        }
                    }
                    return expArr
                }) 
                return expArr
            } else {
                return [...expArr]
            }       
        }

        let exp = expression.split('')        
        let expressionArray = []
        exp.map((symbol) => {

            if (operators.has(symbol)) {

                expressionArray = [...expressionArray, symbol]

            } else {

                let arrayLength = expressionArray.length
                if ((arrayLength !== 0 && !operators.has(expressionArray[arrayLength - 1])) ||
                    (arrayLength === 1 && !(new Set("*", "/", "+", "-")).has(expressionArray[arrayLength - 1]))
                ) {

                    expressionArray[arrayLength - 1] = expressionArray[arrayLength - 1] + symbol

                } else {

                    expressionArray = [...expressionArray, symbol]
                    
                }
            }
            return expressionArray
        })

        let ea = [...expressionArray]
        let expRes = combine(ea)
        setOperationResult(expressionArray.length > expRes.length ? "=" + expRes : "")

    }, [expression])

    

    return (
        <div className='calculator'>
            <div className='expression'>
                <p>{expression + operationResult}</p>
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