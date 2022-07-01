import React, { useState, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import RickAndMortyContext from '../../context/api/RickAndMortyContext'

function Navbar() {
  const { searchCharacters } = useContext(RickAndMortyContext)
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchCharacters(search)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={require('../../images/logo.png')} alt="logo" className="nav__logo-img" />
      </div>
      <div className="nav__search">
        <form onSubmit={handleSubmit} className="nav__form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleChange}
            value={search}
            className="nav__input"
          />
          <button type="submit" className="nav__icon" onClick={handleSubmit}>
            <AiOutlineSearch size={25} className="nav__icon-search" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
