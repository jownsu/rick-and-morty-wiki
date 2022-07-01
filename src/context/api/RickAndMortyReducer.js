const RickAndMortyReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        info: action.payload.info,
        characters: action.payload.results,
        loading: false,
      }

    case 'CLEAR_CHARACTERS':
      return {
        characters: [],
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
  }
}

export default RickAndMortyReducer
