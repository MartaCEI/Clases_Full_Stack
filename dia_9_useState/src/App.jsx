import Contador from './component/Contador'
import Formulario from './component/formulario/Formulario'
import Interruptor from './component/Interruptor'
import Tareas from './component/Tareas'
import './css/App.css'


function App() {

  return (
    <>
      <h1>Ejercicios useState</h1>
        <Contador />
        <Interruptor />
        <Tareas />
        <Formulario />
    </>
  )
}

export default App
