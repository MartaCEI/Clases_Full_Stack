import Personajes from './pages/Personajes'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import './css/App.css'
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';

function App() {

  return (
    <Router> 
      <div className='Container'>
        <header className='Header'>
          <h1 className='Header-title'>Rick and Morty</h1>
          <nav>
            <ul className='Nav-ul'>
              <li>
                <NavLink className="button-link" to='/'>Personajes</NavLink>
              </li>
              <li>
                <NavLink className="button-link" to='/locations'>Lugares</NavLink>
              </li>
              <li>
                <NavLink className="button-link" to='/episodes'>Episodios</NavLink>
              </li> 
            </ul>
          </nav>
        </header>

        <main className='Content'>
          <Routes>
            <Route path='/' element={<Personajes />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='/episodes' element={<Episodes />} />
          </Routes>
        </main>
        
        <footer className='Footer'>
          <p>Hecho por: <a href='Mart Rodriguez'>Mart Rodriguez</a></p>
          <Link to='/'>Personajes</Link>
          <Link to='/locations'>Lugares</Link>
          <Link to='/episodes'>Episodios</Link>
        </footer>
      </div>
    </Router>
  )
}


export default App
