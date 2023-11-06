import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from  "@fortawesome/free-solid-svg-icons"

export const SearchBar = ({value,handleSearch,clearSearch,formSubmit}) => {
  return (
    <div className='search-bar'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handleSearch} placeholder='Search By Category' value={value}/>
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
        <div className='icon'>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>
    </div>
  )
}
