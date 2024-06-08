import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Header from './components/Header.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import './homepage.css'


const Homepage = () => {
    return (
      <div className='homepage'>
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
    );
}

export default Homepage
