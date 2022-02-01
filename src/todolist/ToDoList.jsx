import React from 'react'
import List from './List'

export default function ToDoList() {
    const [issues, setIssues] = React.useState([{
        id: 0,
        name: 'First issue'
    },
    {
        id: 1,
        name: 'Second issue'
    },
    {
        id: 2,
        name: 'Third issue'
    }])
    const [inputIssue, setInputIssue] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState("")
    const [counter, setCounter] = React.useState(3)

    const addIssue = () => {
        if (inputIssue.trim() === "") {

            setErrorMessage("You cannot create void issues")

        } else {
            
            if (errorMessage.trim !== "") {
                setErrorMessage("")
            }
            setIssues([...issues, {id: counter, name: inputIssue}])
            setCounter(() => (counter + 1))
        }
        
    }

    const issueChangeHandler = (e) => {

        setInputIssue(e.target.value) 

    }

    // useCallback is used so that the function is not recreated when rerender
    // useCallback используется для того чтобы при ререндере не пересоздавалась функция

    const delIssue = React.useCallback((id) => {

        let arr = [...issues]
        let elem
        for (let i = 0; i < arr.length; i++){
            if (arr[i].id === id) {
                elem = i
                break
            }
        }
        arr.splice(elem, 1)
        setIssues([...arr])
    }, [issues])
 
    return (
        <div className='todolist'>
            <input type="text" placeholder="Enter your issue" value={inputIssue} onChange={issueChangeHandler}/>
            <input type="button" value="Add issue" onClick={addIssue}/>
            {errorMessage && <p>{errorMessage}</p>}
            <List issues={issues} delIssue={delIssue}/>
        </div>
    )
}