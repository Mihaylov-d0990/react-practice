import React from 'react'
import Field from './Field'

class Figure {
    constructor(id, color, img, weight) {
        this.id = id
        this.color = color
        this.img = img
        this.weight = weight 
    }
}

export default function Chess () {

    

    const blackFigures = React.useState(() => {
        let firstArr = []

        for (let i = 0; i < 8; i++) {
            firstArr[i] = new Figure(i, false, "/image/b-1.png", 1)
        }

        let secondArr = [            
            new Figure(9, false, "/image/b-2.png", 2),           
            new Figure(11, false, "/image/b-4.png", 3),  
            new Figure(13, false, "/image/b-3.png", 4),
            new Figure(15, false, "/image/b-6.png", 6),
            new Figure(14, false, "/image/b-5.png", 5),          
            new Figure(10, false, "/image/b-4.png", 3),
            new Figure(12, false, "/image/b-3.png", 4),
            new Figure(8, false, "/image/b-2.png", 2),
        ]
        
        return [...firstArr, ...secondArr]
        
    })[0]

    const whiteFigures = React.useState(() => {
        let firstArr = []

        for (let i = 0; i < 8; i++) {
            firstArr[i] = new Figure(i, true, "/image/w-1.png", 1)
        }

        let secondArr = [
            new Figure(8, true, "/image/w-4.png", 2),
            new Figure(9, true, "/image/w-4.png", 2),
            new Figure(10, true, "/image/w-2.png", 3),
            new Figure(11, true, "/image/w-2.png", 3),
            new Figure(12, true, "/image/w-3.png", 4),
            new Figure(13, true, "/image/w-3.png", 4),
            new Figure(14, true, "/image/w-5.png", 5),
            new Figure(15, true, "/image/w-6.png", 6)
        ]
        
        return [...firstArr, ...secondArr]
        
    })[0]

    const [fields, setFields] = React.useState(() => {
        let arr = []

        for (let i = 0; i < 64; i++) {
            arr[i] = {id: i, figure: null}
        }  

        for (let i = 15, j = 0; i >= 0 && j < 16; i--, j++) {
            arr[i].figure = blackFigures[j]
        }

        for (let i = 48, j = 0; i < 65 && j < 16; i++, j++) {
            arr[i].figure = whiteFigures[j]
        }

        return [...arr]

    })
   
    
    React.useEffect(() => {

        return () => {

        }
    })

    return (
        <div className='chess'>
            <div className='chess-board'>
                {
                    fields.map((field) => (
                        <Field key={field.id} figure={field.figure}/>
                    ))
                }
            </div>
        </div>
    )
}