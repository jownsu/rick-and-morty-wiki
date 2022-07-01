import React, { createContext, useReducer } from 'react'
import RickAndMortyReducer from './RickAndMortyReducer'
import axios from 'axios'

const RICK_AND_MORTY_URL = process.env.REACT_APP_RICK_AND_MORTY_API

const api = axios.create({
  baseURL: RICK_AND_MORTY_URL,
})

const RickAndMortyContext = createContext()

export const RickAndMortyProvider = ({ children }) => {
  const initialState = {
    info: {
      count: 0,
      next: null,
      pages: 1,
      prev: null,
    },
    characters: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(RickAndMortyReducer, initialState)

  const getCharacters = async () => {
    const response = await api.get('/character')
    dispatch({ type: 'GET_CHARACTERS', payload: response.data })
  }

  const searchCharacters = async (search) => {
    await api
      .get(`/character?name=${search}`)
      .then((response) => {
        dispatch({ type: 'GET_CHARACTERS', payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: 'CLEAR_CHARACTERS' })
      })
  }

  return (
    <RickAndMortyContext.Provider
      value={{
        ...state,
        getCharacters,
        searchCharacters,
      }}
    >
      {children}
    </RickAndMortyContext.Provider>
  )
}

export default RickAndMortyContext
