import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import { RickAndMortyProvider } from './context/api/RickAndMortyContext'
import Header from './components/layouts/Header'
import '../src/styles/css/main.min.css'

function App() {
  return (
    <Router>
      <Header />
      <RickAndMortyProvider>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </RickAndMortyProvider>
    </Router>
  )
}

export default App
