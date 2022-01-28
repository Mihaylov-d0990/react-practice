import React from 'react'
import List from './List'

export default function ToDoList() {
    console.log("Rerendered");
    const [issues, setIssues] = React.useState(['First issue', 'Second issue', 'Third issue'])
    const [currentIssue, setCurrentIssue] = React.useState('')

    const handleChange = (e) => {
        setCurrentIssue(e.target.value)
        console.log();
    }

    const addIssue = () => {
        setIssues([...issues, currentIssue])
    }

    const deleteIssue = (index) =>{
        let iss = [...issues]
        iss.splice(index, 1)
        setIssues([...iss])
    }

    // React.useEffect(() => {
    //     console.log("ToDoList was mounted");
    //     return(() => {
    //         console.log("ToDoList was unmounted");
    //     })
    // }, [])
    // React.useEffect(() => {
    //     console.log("Current issue was updated", currentIssue);
    // }, [currentIssue])
    
    // React.useEffect(() => {
    //     console.log("ToDoList was updated", issues);
    // }, [issues])

    return(
        <div>
            <input type="text" placeholder="Enter your issue" value={currentIssue} onChange={handleChange} />
            <input type="button" value="Add issue" onClick={addIssue} />
            <List issues={issues} delIssue={deleteIssue}/>
        </div>
    )
}


//

import React from 'react'

export default React.memo(
    function List({issues, delIssue}) {
        let liStyles = {
            padding: 15
        }

        const colorPicker = (val) => {
            return val % 2 === 0 ? {backgroundColor: '#7749ed'} : {backgroundColor: '#4aedb5'}
        }
        
        // React.useEffect(() => {
        //     console.log("List was mounted");
        //     return(() => {
        //         console.log("List was unmounted");
        //     })
        // }, [])

        React.useEffect(() => {
            console.log("List was updated", issues);
        })

        return(
            <ul>
                {
                    issues.map((issue, index) => (   
                        <li style={Object.assign({}, liStyles, colorPicker(index))} key={index}>{issue} <p onClick={() => delIssue(index)}> X </p> </li>
                    ))
                }
            </ul>
        )
        
    }, (prevProps, nextProps) => {

        // Если длина текущего массива отличается от предыдущего, то производится ререндер

        console.log(prevProps.issues, nextProps.issues);
        if (prevProps.issues.length !== nextProps.issues.length){    
            return false
        } else {
            
            return true
        }
    }
)

