import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import Homepage from './components/Homepage.jsx'
import Header from './components/Header.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import EmployeeListItem from './components/EmployeeListItem.jsx'

function App() {
  const todoList = [
    <li key={1}>Call Office</li>,
    <li key={2}>Call Mobile</li>,
    <li key={3}>SMS</li>,
    <li key={4}>Email</li>
  ]
  

  return (
    <>
      <div>
        <div>
          <Header />
          <h3>Julie Taylor</h3>
          <ul>{todoList}</ul>

        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
