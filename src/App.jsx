import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-blue-400 p-4 text-6xl rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50'> TO DO APP </h1>
      <AddTodo />
      <Todos />
      
    </>
  )
}

export default App
