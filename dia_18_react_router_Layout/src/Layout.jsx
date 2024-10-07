
import { Outlet } from 'react-router-dom'
import './css/catalogo.css'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  

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

export default Layout
