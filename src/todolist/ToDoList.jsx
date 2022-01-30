import React from 'react'
import List from './List'

export default function ToDoList() {
    const [issues, setIssues] = React.useState(['First issue', 'Second issue', 'Third issue'])
    const [inputIssue, setInputIssue] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState("")

    const addIssue = () => {
        if (inputIssue.trim() === "") {

            setErrorMessage("You cannot create void issues")

        } else {
            
            if (errorMessage.trim !== "") {
                setErrorMessage("")
            }
            setIssues([...issues, inputIssue])

        }
        
    }

    const issueChangeHandler = (e) => {

        setInputIssue(e.target.value) 

    }

    // useCallback is used so that the function is not recreated when rerender
    // useCallback используется для того чтобы при ререндере не пересоздавалась функция

    const delIssue = React.useCallback((index) => {

        let arr = [...issues]
        arr.splice(index, 1)
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