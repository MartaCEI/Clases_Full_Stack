# Clase 6 - Components

- Los componentes son funciones que se pueden reutilizar.
- Se escriben siempre en PascalCase.
- <Componente /> en el App
- Utiliza Deconstruccion: Crear variables de los elementos que están en un objeto


## Orden de opración:
1. Crear carpeta components dentro de src
2. Crear un Archivo.jsx dentro de components
3. Escribir sfc o sfnc + nombre del Componente
4. importar donde toque


## Mardar info al componente desde el padre
1. Escribimos en el padre las variables para mandar:
    <TarjetaDeUsuario nombre="Marta" edad="22" ocupacion="Estudiante" />
2. Recibimos los props en el Componente:
    - ```bash PROPS ES UN OBJETO!!!! = {nombre, edad, ocupacion} ```
    - ```js
        const TarjetaDeUsuario = ({nombre, edad, ocupacion}) => {
        return (
            <>
                <h2>Soy la tarjeta</h2>
                <p>Mi nombre es {nombre}</p>
                <p>Mi edad es {edad}</p>
                <p>Mi ocupacion es {ocupacion}</p>
            </>
        );
        }
        export default TarjetaDeUsuario;
    ``` 


## Mardar arrays u objetos desde un componente padre
1. En el componente padre:
- Le mandamos la lista de tareas entera. 
- Inventamos un atributo. Por ejemplo: listaTareas={tareas}
```bash como tareas es una variable y no un string, usamos corchetes {} ```
- <ListaDeTareas listaTareas={tareas} />
```js
    function App() {

        const tareas = [
            { id: 1, nombre: 'Estudiar React', isCompletada: true },
            { id: 2, nombre: 'Leer un libro', isCompletada: false },
            { id: 3, nombre: 'Mejorar mi nivel de Surf', isCompletada: false },
            { id: 4, nombre: 'Aprender a cocinar', isCompletada: true },
            { id: 5, nombre: 'Ver series', isCompletada: false },
        ];

        return (
            <>
                <ListaDeTareas listaTareas={tareas} />
            </>
        )
    }
```
2. En el componente hijo
- Mando la listaTareas como variable ({deconstruccion}). NOTA: Este es el elemento que nos hemos inventado el nombre en el padre. 
    Ej: const ListaDeTareas = ({listaTareas}) => {...}
- La recorro dentro del return con un .map.

- El map tiene que tener unos corchetes ya que está dentro de un return. Y se le pasa una funcion dentro del paréntesis. 
    Ej: { listaTareas.map(() => {}) }
- Tiene un return dentro del mismo también. 
- El padre dentro del return tiene que tener un identificador único.    Ej: <div key={id}>...</div>
```js
{
    listaTareas.map(element => {
    // id: 1, nombre: 'Estudiar React', isCompletada: true
    const {id, nombre, isCompletada} = element;
    return(
        <div key={id}>
            <p>{id}. {nombre}</p>
        </div>
    )
    })
}
```


## Mandar objetos de un padre a un hijo y a otro subhijo.
Cuando el componente devuelve más de una línea, en React se recomienda hacer un componente hijo. 
1. El hijo recibirá el subhijo ya con el key={id} y enviará la información de nuevo.
    Ej: <Tarea key={id} nombre={nombre} isCompletada={isCompletada} />
2. El subhijo no recibe id pero si el resto de variabales. 
    Ej: const Tarea = ({nombre, isCompletada}){...}

Los tres archivos quedarías así...
```js       App.jsx
import './css/App.css'
import TarjetaDeUsuario from './components/TarjetaDeUsuario'
import ListaDeTareas from './components/tareas/ListaDeTareas'

function App() {
  const tareas = [
    { id: 1, nombre: 'Estudiar React', isCompletada: true },
    { id: 2, nombre: 'Leer un libro', isCompletada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Surf', isCompletada: false },
    { id: 4, nombre: 'Aprender a cocinar', isCompletada: true },
    { id: 5, nombre: 'Ver series', isCompletada: false },
  ];

  return (
    <>
      <h1>Component Party</h1>
      <ListaDeTareas listaTareas={tareas} />
    </>
  )
}

export default App
```

```js       ListaDeTareas.jsx
import Tarea from "./Tarea";

const ListaDeTareas = ({listaTareas}) => {
    return (
        <div className="Card">
            <h3>Lista de Tareas</h3>
            {
                listaTareas.map(element => {
                    // id: 1, nombre: 'Estudiar React', completada: true
                    const {id, nombre, isCompletada} = element;
                    return(
                        <Tarea key={id} nombre={nombre} isCompletada={isCompletada} />
                    )
                })
            }
        </div>
    );
}

export default ListaDeTareas;
```

```js       Tarea.jsx
const Tarea = ({nombre, isCompletada}) => {
    return (
        <>
            <p>{nombre}</p>
        </>
    );
}

export default Tarea;
```


## **** IF **** Añadir if para botones usando booleanos
- RECUERDA: Si va dentro de un return irá entre corchetes: 
Para renderizar o no un boton (segun su booleano)
```js
    {
        isCompletada && (
            <button>Eliminar tarea</button>
        ) 
    }
```
- ESTO SE LEE: si isCompletada==true, imprimo el botón. Sino, NO lo imprimo.


## Otra forma de crear componentes 
Como las páginas web se llaman index.html pero en intenet la URL no lee todos los html. Solo el index.html. Pero carrito.html no lo leerá. 
Esto es debido a que la palabra index es una palabra reservada para el primer archivo que tiene que cargar nuestra página web. Nuestro servidor web lo primero que busca en la raiz de nuestro proyecto es la parabra index y si lo encuentra lo muestra. No hace falta escribirla en la URL. 
Para los componetes en React es lo mismo, entonces:
1. Se crear una carpeta que se llame ej: GaleriaImagenes(CamelCase)
2. el archivo index.jsx

## MejorGaleriaImagenes (Copiado de CodePen)
1. Busco 

HORA 1:31 CLASE 7


## Ejercicios React-Component-Party

### Ejercicio 1: Setup + Tarjeta de Usuario

- Crear un proyecto nuevo en Vite con React que se llame `react-component-party`
- Crear un componente `TarjetaUsuario` que reciba props para mostrar información de un usuario (nombre, edad, ocupación).
- Crea los estilos para este componente en un archivo CSS `App.css`
- Importa el componente en nuestro archivo `App.js` y cargue 3 tarjetas con distintos valores de usuarios.

### Ejercicio 2: Lista de Tareas

- Crear un componente `tareas/ListaTareas` que reciba un array de tareas para este verano como props.
- Craar un segundo componente `tareas/Tarea` que reciba props para mostrar cada una de las tareas.
- Incluir nuestro componente ListaTareas en App.js y mostrarlas en pantallas.

```js
 // Lista de tareas antes del verano
 const tareas = [
   { id: 1, nombre: 'Estudiar React', completada: true },
   { id: 2, nombre: 'Leer un libro', completada: false },
   { id: 3, nombre: 'Mejorar mi nivel de Surf', completada: false },
   { id: 4, nombre: 'Aprender a cocinar', completada: true },
   { id: 5, nombre: 'Ver series', completada: false },
 ];

```

### Ejercicio 3: El Barto Perfil

- Crear un componenten llamado `PerfilUsuario` que arme una tarjeta con los siguientes datos de perfil. 
- Atención, este objeto posee otro objeto anidado dentro, deconstruir como corresponde.

```js
  // PerfilUsuario  (Objeto Anidado) 
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
```

### Ejercicio 4: Galería de imagenes

- Crear un componente galería de imagenes con los datos dados a continuación.
- Puede que no siempre tengamos un `key` como un id para nuestro map(), por lo podemos ustilizar (como última instancia) el atributo `index` que nos ofrece map() en su segundo parametro, como se indica a continuación:  
`listaImagenes.map( (item, index) => { ..... })`

```js
  // GaleriaImagenes (Array de Objetos)
  // https://rickandmortyapi.com/
  const iamgeList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];
```

### Ejercicio 5: Blog Post - Investigación de prop children

- Crear un componente llamado `BlogPost` que reciba `título`, `fecha` y `autor` como props, pero que utilice el contenido del Post como children. 
- Puedes buscar online que es el prop `children` de React, o ver este link con una explicación muy simplificada [wikiReact](https://www.reactjs.wiki/que-es-y-para-que-sirve-la-prop-children-en-react)

El App.jsx debe tener este formato:
```js
    {/* Componente con children  */}
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01"  >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>
``` 


### Extra:

- Recrear su tarjeta digital de "ACTIVIDAD 1" como un componente reutilizable.
- Crear otros componentes que se te ocurran para practicar.


