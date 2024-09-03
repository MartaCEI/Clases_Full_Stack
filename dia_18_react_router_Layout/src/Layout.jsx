
import { Outlet } from 'react-router-dom'
import './css/App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
