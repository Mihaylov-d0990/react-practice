import React from 'react'
import List from './List'

export default function ToDoList() {
    const [issues, setIssues] = React.useState(['First issue', 'Second issue', 'Third issue'])

    return (
        <div className='container'>
            <List issues={issues} />
        </div>
    )
}