
import './css/App.css'
import TarjetaDeUsuario from './components/TarjetaDeUsuario'
import ListaDeTareas from './components/tareas/ListaDeTareas'
import PerfilUsuario from './components/PerfilUsuario';
import GaleriaImagenes from './components/GaleriaImagenes';
import BlogPost from './components/BlogPost';
import Restaurante from './components/Restaurante';

function App() {

  const tareas = [
    { id: 1, nombre: 'Estudiar React', isCompletada: true },
    { id: 2, nombre: 'Leer un libro', isCompletada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Surf', isCompletada: false },
    { id: 4, nombre: 'Aprender a cocinar', isCompletada: true },
    { id: 5, nombre: 'Ver series', isCompletada: false },
  ];

  const userData =  {
    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
    }
  };

  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];

  return (
    <>
      <h1>Component Party</h1>
      <TarjetaDeUsuario nombre="Marta" edad="22" ocupacion="Estudiante" />
      <TarjetaDeUsuario nombre="Andrea" edad="25" ocupacion="Trabajando" />
      <ListaDeTareas listaTareas={tareas} />
      <PerfilUsuario usuario={userData} />
      <GaleriaImagenes listaImagenes={imageList} />
      <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01"  >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </BlogPost>
    </>
  )
}

export default App
