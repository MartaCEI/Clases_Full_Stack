import Adivinanza from './component/Adivinanza.jsx'
import CalculadoraBasica from './component/CalculadoraBasica.jsx'
import Carrito from './component/Carrito.jsx'
import CarritoGPT from './component/CarritoGPT.jsx'
import Contador from './component/Contador'
import EditorTexto from './component/EditorTexto.jsx'
import FormMultiplesPantallas from './component/FormMultiplesPantallas.jsx'
import Formulario from './component/formulario/Formulario'
import GaleriaImagenes from './component/GaleriaImagenes.jsx'
import GaleriaImagenProfe from './component/GaleriaImagenProfe.jsx'
import Interruptor from './component/Interruptor'
import Registro from './component/Registro'
import Tareas from './component/Tareas'
import Temporizador from './component/Temporizador.jsx'
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
        <GaleriaImagenes />
        <GaleriaImagenProfe />
        <Temporizador />
        <CalculadoraBasica />
        <Adivinanza />
        <EditorTexto />
        <Carrito />
        <CarritoGPT />
    </>
  )
}

export default App
