import React from 'react'
import CharactersList from '../components/characters/CharactersList'
import Navbar from '../components/layouts/Navbar'
import Header from '../components/layouts/Header'

function Main() {
  return (
    <div className="container">
      <Navbar />
      <CharactersList />
    </div>
  )
}

export default Main
