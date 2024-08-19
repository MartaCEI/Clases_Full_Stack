import './App.css'
import { Ejercicio } from './components/Ejercicio';
import { MiTarjeta } from './components/MiTarjeta';
import MiTarjetaDefault from './components/MiTarjeta';
import EjercicioDeconstruccion from './components/EjercicioDeconstruccion';

function App() {

  return (
    <>
      <h3>Mi primera página de react Vite</h3>
      <h4>Introducción a componentes</h4>
      <Mycard />
      <MiTarjeta />
      <MiTarjetaDefault />
      <h3>Ejercicio: Escribe en pantalla nombre, edad y 3 hobbies</h3>
      <Ejercicio />
      <EjercicioDeconstruccion nombreD="Marta" edadD="38" hobbiesD={["aaa", "bbb", "ccc"]} />
    </>
  )
}

export default App

const Mycard = () => {
  return (
    <p>Soy una tarjeta importada desde una función interna</p>
  )
} 
