import React from 'react'

export default React.memo(
    function List({issues, delIssue}) {

        React.useEffect(() => {
            console.log("!List! => List has been updated")
        })

        return(
            <ul className="list-non-styled padding-top-25">
                {issues.map((issue, index) => (
                    <li key={index}>
                        <div>
                            <p>{issue}</p>
                        </div>
                        <div>
                            <input type="button" value="Delete issue" onClick={() => (delIssue(index))}/>
                        </div>
                    </li>
                ))}
            </ul>
        )

    }, (prevProps, nextProps) => {

        // If the length of the current array differs from the previous one, then rerender is performed.
        // Если длина текущего массива отличается от предыдущего, то производится ререндер.
        
        if (prevProps.issues.length !== nextProps.issues.length) {
            return false
        } else {
            return true
        }
    }
)