import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Header from './components/Header.jsx'
import EmployeeList from './components/EmployeeList.jsx'


const Homepage = () => {
    return (
      <div>
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
    );
}

export default Homepage
