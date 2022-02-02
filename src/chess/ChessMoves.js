export default function pawnMove(color, pos, fields) {
    let arr = []
    let fellRight 
    let fellLeft 

    if (color) {  

        if (pos - 7 >= 0) {
            fellRight = fields[pos - 7].figure ? !fields[pos - 7].figure.color : false
        }
        if (pos - 9 >= 0) {
            fellLeft = fields[pos - 9].figure ? !fields[pos - 9].figure.color : false
        }
        

        if (fellRight && fellLeft) {

            arr = [...arr, pos - 7, pos - 9]

        } else {

            if(fellRight) {

                arr = [...arr, pos - 7]

            } 
            if (fellLeft) {

                arr = [...arr, pos - 9]

            }
        }

        if (pos - 8 >= 0) {
            
            if (pos < 56 && pos > 47 && !fields[pos - 16].figure) { 

                arr = [...arr, pos - 8, pos - 16]

            } else {
                
                if (!fields[pos - 8].figure) {

                    arr = [...arr,pos - 8]

                }

            }
            
        }

    } else {

        if (pos + 7 < 64) {
            fellRight = fields[pos + 9].figure ? fields[pos + 9].figure.color : false
        }
        if (pos + 9 < 64) {
            fellLeft = fields[pos + 7].figure ? fields[pos + 7].figure.color : false
        } 

        if (fellRight && fellLeft) {

            arr = [...arr, pos + 7, pos + 9]

        } else {

            if(fellLeft) {

                arr = [...arr, pos + 7]
                
            } 
            if (fellRight) {

                arr = [...arr, pos + 9]

            }
        }

        if (pos + 8 < 64) {
            
            if (pos < 16 && pos > 7 && !fields[pos + 16].figure) { 

                arr = [...arr, pos + 8, pos + 16]

            } else {
                
                if (!fields[pos + 8].figure) {

                    arr = [...arr,pos + 8]

                }

            }
            
        }

    }

    return [...arr]
}