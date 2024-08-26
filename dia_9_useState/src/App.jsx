import Contador from './component/Contador'
import FormMultiplesPantallas from './component/FormMultiplesPantallas.jsx'
import Formulario from './component/formulario/Formulario'
import Interruptor from './component/Interruptor'
import Registro from './component/Registro'
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
        <Registro />
        <FormMultiplesPantallas />
    </>
  )
}

export default App
