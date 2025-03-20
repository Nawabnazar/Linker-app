// import './App.css'
import { useState } from 'react'
import createIcon from './assets/create-icon.svg'
import {Input} from './input';

function App() {
  const [toggle,settoggle] = useState(false)
  const handleClick = ()=>{
    settoggle(!toggle)
  }
  return (
    <>
   <div className="container flex flex-col   gap-4   bg-violet-700 h-screen w-64">
  
    <div className="Link-Container mx-14  my-5 text-3xl text-white h-10 w-24 text-center font-bold  rounded-lg bg-violet-800  hover:cursor-pointer">Linker</div>
    <hr  />
    {/* <input type="text" placeholder='Here  type your file name' className='bg-white rounded-2xl w-fit mx-5 text-wrap overflow-hidden size-10 hover:scale-105 ' /> */}
    
    {
      toggle ? <Input /> : false
    }
    <div className="create-Icon mx-20 my-1 bg-blue-950 rounded-4xl  h-10 w-10  hover:cursor-pointer "><img src={createIcon} alt="Create-Icon" onClick={handleClick} />
      </div>
   </div>
    </>
  )
}

export default App


