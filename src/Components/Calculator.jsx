import {useState} from 'react'
function Calculator(){
const [value1, setValue1] = useState(0)
const [value2, setValue2] = useState(0)
const [ops,setOps] = useState('+')
let result;
// let ops = '+'
// const [result,setResult] = useState(0)
// let newNum;
// function add(num1,num2){
//  newNum=(parseInt(num1) + parseInt(num2))
    
//     return newNum
// }
// console.log(add(value1,value2))
if(isNaN(value1)){
    alert('please enter a number')
    setValue1(0)
} 

if(isNaN(value2)){
    alert('please enter a number')
    setValue2(0)
}

// function changeOps(event){
// return ops = event
// }


console.log(value1)
console.log(value2)
console.log(result)
    return(
        <div className="container">

  <h1>Add with React!</h1>

 

  <form className="add">

    <input type="text" name="value1"  onChange ={e => setValue1(e.target.value)} />

    <span>{ops}</span>

    <input type="text" name="value2" onChange = {e => setValue2(e.target.value)} />

    {/* <span><button onClick= {()=>(add(value1,value2))}> = </button> </span> */}
    {/* <span><button onClick= {()=>(setResult((parseInt(value1)+(parseInt(value2)))))}> = </button> </span> */}
    <span><button onClick= {()=>(localStorage.setItem(result,(parseInt(value1)+(parseInt(value2)))))}> = </button> </span>
    <button className='ops' onClick={()=>setOps('-')}>-</button>
    
  

    <h3>{localStorage.getItem(result)}</h3>
    

    <h3>Addition results go here!</h3>

  </form>

</div>
    )
}

export default Calculator