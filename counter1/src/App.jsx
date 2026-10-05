import { useState } from "react"
import "./App.css"
function App(){
const[counter,setcounter]=useState(0)
  return(
    <div className='main'>
      <div className='child-box'>{counter}</div>
      <div className='btns'>
        <button className='btn' onClick={function(){
          setcounter(counter+1)
        }}>increase</button>
        <button className='btn' onClick={function(){
          setcounter(counter-1)}}>decrease</button>
        <button className='btn' onClick={function(){
          setcounter(0)}}>reset</button>
      </div>
    </div>
  )
}
export default App