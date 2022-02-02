function pawnMove(color, pos, fields) {
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

function bishopMove(color, pos, fields) {
    let arr = []

    if (color) {

        for (let i = pos; i > 0; i -= 7) {
            arr.push(fields[i].id)
            if ((i - 7) % 8 === 0) {
                
                break
            } else if (i - 7 >= 0) {
                if(fields[i - 7].figure) {
                    if (fields[i - 7].figure.color){
                        break
                    } else if (!fields[i - 7].figure.color) {
                        arr.push(fields[i - 7].id)
                        break
                    }
                } 
            }    
        }

        for (let i = pos; i < 64; i += 7) {
            arr.push(fields[i].id)
            if (i % 8 === 0) {
                break
            } else if (i + 7 < 64) {
                if(fields[i + 7].figure) {
                    if (fields[i + 7].figure.color){
                        break
                    } else if (!fields[i + 7].figure.color) {
                        arr.push(fields[i + 7].id)
                        break
                    }
                } 
            }    
        }

        for (let i = pos; i > 0; i -= 9) {
            arr.push(fields[i].id)
            if (i % 8 === 0) {
                
                break
            } else if (i - 9 >= 0) {
                if(fields[i - 9].figure) {
                    if (fields[i - 9].figure.color){
                        break
                    } else if(!fields[i - 9].figure.color) {
                        arr.push(fields[i - 9].id)
                        break
                    }
                }  
            }   
        }

        for (let i = pos; i < 64; i += 9) {
            arr.push(fields[i].id)
            if ((i - 7) % 8 === 0) {
                break
            } else if (i + 9 < 64) {
                if(fields[i + 9].figure) {
                    if (fields[i + 9].figure.color){
                        break
                    } else if (!fields[i + 9].figure.color) {
                        arr.push(fields[i + 9].id)
                        break
                    }
                } 
            }    
        }

    } else {

        for (let i = pos; i > 0; i -= 7) {
            arr.push(fields[i].id)
            if ((i - 7) % 8 === 0) {
                
                break
            } else if (i - 7 >= 0) {
                if(fields[i - 7].figure) {
                    if (!fields[i - 7].figure.color){
                        break
                    } else if (fields[i - 7].figure.color) {
                        arr.push(fields[i - 7].id)
                        break
                    }
                } 
            }    
        }

        for (let i = pos; i < 64; i += 7) {
            arr.push(fields[i].id)
            if (i % 8 === 0) {
                break
            } else if (i + 7 < 64) {
                if(fields[i + 7].figure) {
                    if (!fields[i + 7].figure.color){
                        break
                    } else if (fields[i + 7].figure.color) {
                        arr.push(fields[i + 7].id)
                        break
                    }
                } 
            }    
        }

        for (let i = pos; i > 0; i -= 9) {
            arr.push(fields[i].id)
            if (i % 8 === 0) {
                
                break
            } else if (i - 9 >= 0) {
                console.log(i - 9);
                if(fields[i - 9].figure) {
                    if (!fields[i - 9].figure.color){
                        break
                    } else if(fields[i - 9].figure.color) {
                        arr.push(fields[i - 9].id)
                        break
                    }
                }  
            }   
        }

        for (let i = pos; i < 64; i += 9) {
            arr.push(fields[i].id)
            if ((i - 7) % 8 === 0) {
                break
            } else if (i + 9 < 64) {
                if(fields[i + 9].figure) {
                    if (!fields[i + 9].figure.color){
                        break
                    } else if (fields[i + 9].figure.color) {
                        arr.push(fields[i + 9].id)
                        break
                    }
                } 
            }    
        }

    }

    return [...arr]
}

function rookMove(color, pos, fields) {
    let arr = []

    if (color) {

        for (let i = pos; i >= 0; i -= 8) {
            arr.push(fields[i].id) 
            if (i - 8 < 0) {
                break
            } else {
                if (fields[i - 8].figure) {
                    if (fields[i - 8].figure.color){
                        break
                    } else if (!fields[i - 8].figure.color) {
                        arr.push(fields[i - 8].id)
                        break
                    }
                }
            }
        }

        for (let i = pos; i < 64; i += 8) {
            arr.push(fields[i].id) 
            if (i + 8 >= 64) {
                break
            } else {
                if (fields[i + 8].figure) {
                    if (fields[i + 8].figure.color){
                        break
                    } else if (!fields[i + 8].figure.color) {
                        arr.push(fields[i + 8].id)
                        break
                    }
                }
            }
        }

        for (let i = pos; (i - 7) % 8 !== 0; i++) {
            arr.push(fields[i].id) 
            if ((i - 7) % 8 === 0) {
                break
            } else {
                if (fields[i + 1].figure) {
                    if (fields[i + 1].figure.color){
                        break
                    } else if (!fields[i + 1].figure.color) {
                        arr.push(fields[i + 1].id)
                        break
                    }
                }
            }

            if ((i + 1 - 7) % 8 === 0) {
                arr.push(fields[i + 1].id)
            }
        }

        for (let i = pos; i % 8 !== 0; i--) {
            arr.push(fields[i].id) 
            if (i % 8 === 0) {
                break
            } else {
                if (fields[i - 1].figure) {
                    if (fields[i - 1].figure.color){
                        break
                    } else if (!fields[i - 1].figure.color) {
                        arr.push(fields[i - 1].id)
                        break
                    }
                }
            }

            if ((i - 1) % 8 === 0) {
                arr.push(fields[i - 1].id)
            }
        }

    } else {
        for (let i = pos; i >= 0; i -= 8) {
            arr.push(fields[i].id) 
            if (i - 8 < 0) {
                break
            } else {
                if (fields[i - 8].figure) {
                    if (!fields[i - 8].figure.color){
                        break
                    } else if (fields[i - 8].figure.color) {
                        arr.push(fields[i - 8].id)
                        break
                    }
                }
            }
        }

        for (let i = pos; i < 64; i += 8) {
            arr.push(fields[i].id) 
            if (i + 8 > 64) {
                break
            } else {
                if (fields[i + 8].figure) {
                    if (!fields[i + 8].figure.color){
                        break
                    } else if (fields[i + 8].figure.color) {
                        arr.push(fields[i + 8].id)
                        break
                    }
                }
            }
        }

        for (let i = pos; (i - 7) % 8 !== 0; i++) {
            arr.push(fields[i].id) 
            if ((i - 7) % 8 === 0) {
                break
            } else {
                if (fields[i + 1].figure) {
                    if (!fields[i + 1].figure.color){
                        break
                    } else if (fields[i + 1].figure.color) {
                        arr.push(fields[i + 1].id)
                        break
                    }
                }
            }

            if ((i + 1 - 7) % 8 === 0) {
                arr.push(fields[i + 1].id)
            }
        }

        for (let i = pos; i % 8 !== 0; i--) {
            arr.push(fields[i].id) 
            if (i % 8 === 0) {
                break
            } else {
                if (fields[i - 1].figure) {
                    if (!fields[i - 1].figure.color){
                        break
                    } else if (fields[i - 1].figure.color) {
                        arr.push(fields[i - 1].id)
                        break
                    }
                }
            }

            if ((i - 1) % 8 === 0) {
                arr.push(fields[i - 1].id)
            }
        }

    }

    return [...arr]
}

export  {pawnMove, bishopMove, rookMove}




