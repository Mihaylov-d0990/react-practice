import React from 'react'
import Field from './Field'

export default function Chess () {

    const [fields, setFields] = React.useState(() => {
        let arr = []

        for (let i = 0; i < 64; i++) {
            arr[i] = {id: i}
        }

        return [...arr]

    })

    return (
        <div className='chess'>
            <div className='chess-board'>
                {
                    fields.map((field) => (
                        <Field key={field.id}/>
                    ))
                }
            </div>
        </div>
    )
}