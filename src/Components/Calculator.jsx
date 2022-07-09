import {useState} from 'react'
function Calculator(){
const [value1,setValue1] = useState(0)
const [value2,setValue2] = useState(0)
const [results,setResults] = useState(0)
const [ops,setOps] = useState("+")

console.log(value1)
console.log(value2)



    return(
        <div className="container">

  <h1>Add with React!</h1>

 

  <form className="add" onSubmit={ e => e.preventDefault()}>

    <input type="text" name="value1" value={value1} onChange={e =>{ 
        const input = Number(e.target.value)
        
        if (!Number.isNaN(input)){ 
              setValue1(input)  
        }
        }}/>

    <span> {ops} </span>

    <input type="text" name="value2" value={value2} onChange={e => {
    const input = Number(e.target.value)

    if (!Number.isNaN(input)){ 
    setValue2(input)  
    }
    }} />

    <button onClick={()=>{ 
     switch (ops) {
        case '+':
        setResults(value1 + value2)
            break;
        case '-':
        setResults(value1 - value2) 
        break;  
        case '*':
        setResults(value1 * value2) 
        break;
        case '/':
        setResults(value1 / value2)
        break;
        default:
        throw new Error('we shouldnt be here') 
     }
    
    
    }}>=</button>


    <select value={ops} onChange={e => setOps(e.target.value)}>
    <option value='+'>+</option>    
    <option value='-'>-</option>
    <option value='*'>*</option>
    <option value='/'>/</option>
    
    </select>
    <h3>{results}</h3>

    <h3>Addition results go here!</h3>

  </form>

</div>
    )
}

export default Calculator