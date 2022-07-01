import React, { useEffect, useContext } from 'react'
import RickAndMortyContext from '../../context/api/RickAndMortyContext'
import CharacterCard from './CharacterCard'

function CharactersList() {
  const { getCharacters, characters, loading } = useContext(RickAndMortyContext)

  useEffect(() => {
    getCharacters()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="character">
      {characters.length > 0 ? (
        characters.map((character) => <CharacterCard data={character} key={character.id} />)
      ) : (
        <h1>No characters found</h1>
      )}
    </div>
  )
}

export default CharactersList
