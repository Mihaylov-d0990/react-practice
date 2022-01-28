import React from 'react'
import List from './List'

export default function ToDoList() {
    const [issues, setIssues] = React.useState(['First issue', 'Second issue', 'Third issue'])
    const [inputIssue, setInputIssue] = React.useState("")

    const addIssue = () => {
        setIssues([...issues, inputIssue])
    }

    const issueChangeHandler = (e) => {
        setInputIssue(e.target.value) 
    }

    return (
        <div className='container'>
            <input type="text" placeholder="Enter your issue" value={inputIssue} onChange={issueChangeHandler}/>
            <input type="button" value="Add issue" onClick={addIssue}/>
            <List issues={issues} />
        </div>
    )
}