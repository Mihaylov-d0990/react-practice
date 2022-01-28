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

    const delIssue = (index) => {

        let arr = [...issues]
        arr.splice(index, 1)
        setIssues([...arr])

    }

    // This hook is triggered when mounting and unmounting the component.
    // Этот хук срабатывает при монтировании  и размонтировании компонента.

    React.useEffect(() => {
        console.log("!ToDolist! => ToDolist has been mounted");
        return (
            () => { 
                console.log("!ToDolist! => ToDoList has been unmounted");
            }
        )
    }, [])

    // This hook is triggered every time the state changes. States: issues, inputIssue and errorMessage.
    // Этот хук срабатывает каждый раз, когда изменяется состояние. Состояния: issues, inputIssue и errorMessage.

    React.useEffect(() => {
        console.log("!ToDolist! => ToDoList has been updated");
    })

    // The following hooks are triggered when the corresponding states change.
    // Следующие хуки срабатывают при изменении соответствующих состояний.

    React.useEffect(() => {
        console.log("!ToDolist! => issues has been changed")
    }, [issues])

    React.useEffect(() => {
        console.log("!ToDolist! => inputIssue has been changed")
    }, [inputIssue])

    React.useEffect(() => {
        console.log("!ToDolist! => errorMessage has been changed")
    }, [errorMessage])
 
    return (
        <div>
            <input type="text" placeholder="Enter your issue" value={inputIssue} onChange={issueChangeHandler}/>
            <input type="button" value="Add issue" onClick={addIssue}/>
            {errorMessage && <p>{errorMessage}</p>}
            <List issues={issues} delIssue={delIssue}/>
        </div>
    )
}