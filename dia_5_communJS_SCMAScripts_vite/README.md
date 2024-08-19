
# Clase 5 - CommunJS, ESMAScript, Deconstrucción de elementos y Vite (introducción)

## CommonJS y ECMAScripts Modules (ESM) 

```bash
Diferencias: Asincorona y sincrona, manera de llamralas al importarlas y que el ESM trabaja tanto en el back como en el front.
```

En JS los modulos son porciones de código reutilizables que se pueden importar y exportar entre diferentes carpetas. Estos permiten organizar y reutilizar el código de manera eficiente.

### CommonJS
Fue creado para node.js (Nuestro entorno de trabajo del Backend)

- Se cargan de manera sincrona (es decir, el programa espera a que el modulo cargue antes de continuar)
- No es comun, pero se puede usar en el navegador con ayuda de herraminetas como Browserify / WebPack / Parcel

```js
//***********************************************
// Importacion de un solo elemento (SIN LLAVES)
//archivo1.js
const mensaje = "Hola mundo"
const mensaje2 = "Adios alumnos"
module.exports = mensaje

//archivo2.js
const mensaje = required("./archivo1")  //cuando es el navegador no hace falta ponerle .js pero en otros si...
const mensaje2 = required("./archivo1")

//***********************************************
// Importacion de múltiples elementos (OBJETOS CON LLAVES)
//archivo1.js
const mensaje = "Hola mundo"
const mensaje2 = "Adios alumnos"
module.exports = mensaje
module.exports = {mensaje, mensaje2}

//archivo2.js (Importo variables con llaves ya que estoy importando objetos)
const {mensaje} = required("./archivo1") 
o
const {mensaje , mensaje2} = required("./archivo1") 

```

### ECMAScript ES6 (ESM)
Fue introducido en ECMAScript 2015 (ES6) para estandarizar los modulos de JS. Se usa para front (navegadores) como back (NodeJs)

- Los modulos se cargan de manera asincrona (Es decir, el programa continua mientras los módulos se cargan)
- Soportado en navegadores modernos y en versiones receiente s de NodeJs.

```js
// Importacion de múltiples elementos
//archivo1.js
export default const mensaje1 = "Hola mundo"  //default SIN LLAVES en el import (SOLOS HAY UNO EN EL ARCHIVO)
export const mensaje2 = "Adios alumnos"  // los export se importan CON LLAVES
export const mensaje3 = "Volvi"

//archivo2.js (Default con llaves, exprot sin llaves)
import mensaje1 from "./archivo1"
import { mensaje2, mensaje3 } from "./archivo1"
//Como es el export por default no hace falta que se llame igual, lo podemos llamar como queramos. Ej: 
import miMensaje from "/archivo1"

Console.log(mensaje1, miMensaje, mensaje2, mensaje3)
//  "Hola mundo",  "Hola mundo", "Adios alumnos", "Volvi"
```

Para definir que sistema de los dos que hemos visto, haremos los siguiente: En el bakend modificaremos el paquete package.json, debajo del main ("Type": "module" o "Type": "communJs")
Con vite se agrega solo ("Type": "module")

```js
{
  "name": "dia4",
  "version": "1.0.0",
  "main": "index.js",
  ****"type": "module"****
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    .........
}
```

En el frontEnd si queremos usar type=modeles, cambiaremos la etiqueta de script:
```html
<script type="module" src=".....">
```



## Deconstruccion de objetos o arrays

Nos extrae cada propiedad de un objeto y las pone solo en una variable. 

```js
const alumno = {
    nombre: "Laura"
    edad; 23,
    asignatura: "FullStack"
}
function imprimir(props)

//Forma tradicional
const edad = props.edad
const nombre = props.nombre
const asignatura = props.asignatura

//MEJOR HACER ESTO, DECONSTRUCCION
// deconstrucccion de objetos (Los extraigo y creo variables dentro del const en vez de escribir las variables uan tra otra)
const {edad, nombre, asignatura} = props;
console.log(`Mi nombre es ${nombre} tengo ${edad}...`)

// Me puede pasar que cuando importo un archivo, ya tenga una variable con el mismo nombre, Por lo que para llamar esa variable en el archivo en el que estoy trabajando pongo DOS PUNTOS :
// Entonces renombro la variable nombre por :miNombre Ej:
const nombre = "Juanito"
const {edad, nombre:miNombre, asignatura} = props;
console.log(`Mi nombre es ${miNombre} tengo ${edad}...`)

// Deconstrucción de arrays (Tiene la misma cantidad de elementos que de valores y van en línea, no como los objetos que se define mediante el nombre de la variable)
const lista = ["item1", "item2", "item3"];
const [val1, val2, item3] = lista;
```



## React (Vite) (Vite es un entorno de desarrollo frontend)

Es una biblioteca de JS para construir interfaces de usuarios(facebook 2013).
React es FRONTEND. Será back cuando traiga bases de datos, etc...

Diferencia entre librería y frameworks
Librería (soluciona parte de nuestro código, nos ayuda a hacer ciertas cosas. Nos permite hacer interfaces completas) y framework (NextjsS, Remix, Expo) (sistema que nos soluciona nuestro codigo de punta a punta).

Lo que hace react: 
- Componentes reutilizables
- archivos JSX
- Reactividad de los componentes
- Funciones 


### Librería Vite
[vitejs.dev](https://vitejs.dev/)

```bash
PASOS:
1. npm create vite@latest  /  nombra carpeta(vite_react) / React  /  JavaScript   
    Me configuró todos los packages json, README, gitignore, public(archivos publicos), src (Donde vamos a trabajar)
2. cd nombreProyecto (vite-react)
3. npm install  (Para crear los módulos)
4. npm run dev (ejecuta vite)
```

control+http://localhost:5173/ (Abre la pagina en localHost)

```bash
IMPORTANTE: EL return solo devuleve UNA etiqueta. Esta, puede tener + etiquetas dentro. Para eso se utiliza la etiqueta vacía.

  return (
    <>
    </>
  )
```

### Componentes <Alumno/>

Un componente es una FUNCIÓN que Devuelve una etiqueta reutilizable. Tiene que estar en un archivo .jsx tiene que ser importada y exportado

```bash
IMPORTANTE: Los componentes van en mayusculas PascalCase 
```


## Componentes dentro de react
```bash
NOTA: LAs variables se pueden usar dentro del jsx entre llaves. Ejemplo: 
Conts nombre = "Nombre"
  <h1>Mi nombre es {Nombre}</h1>


COMENTARIOS: Van entre llaves. Ej: 
{/*Este es un comentario en js*/}

```

1. Se pueden utilizar componenetes que están directamente dentro del App.jsx
NO ES LO NORMAL

```js
App.jsx
function App() {

  const Nombre = "Marta" // Constante texto

  return (
    <>
      <h3>Mi página: {Nombre}</h3> 
      <MiTarjeta />
    </>
  )
}
export default App

// Función normal
function MiTarjeta () {
  return(
    <h3>Esta es mi tarjeta!!</h3>
  )
}
// Función flecha
const MiTarjeta = () => {
    return(
        <div>Esta es mi tarjeta</div>
    )
}
```

2. Components fuera del archivo App: Creamos la carpeta llamada components. 
3. Creamos un archivo que se llama igual que la funcion que vamos a utilizar. MiTarjeta.jsx
4. Escribimos la función necesaria y hacemos un Export MiTarjeta (default o normal)
5. En App.jsx hacemos el import 
import MiTarjeta from './components/MiTarjeta' (default o {normal})

```js
App.jsx
// CON EXPORT DEFAULT
import './App.css'
import MiTarjeta from './components/MiTarjeta'

function App() {
  const Nombre = "Marta"

  return (
    <>
      <h3>Mi página: {Nombre}</h3>
      <MiTarjeta />
    </>
  )
}
export default App

// CON EXPORT NORMAL
import './App.css'
import {MiTarjeta, MiMensaje} from './components/MiTarjeta'

function App() {

  const Nombre = "Marta"

  return (
    <>
      <h3>Mi página: {Nombre}</h3>
      <p>{MiMensaje}</p>
      <MiTarjeta />
    </>
  )
}
```

```js
MiTarjeta.jsx
// CON EXPORT DEFAULT
const MiTarjeta = () => {
    return(
        <div>Esta es mi tarjeta</div>
    )
}

export default MiTarjeta

// CON EXPORT NORMAL
export const MiTarjeta = () => {
    return(
        <div>Esta es mi tarjeta</div>
    )
}

export const MiMensaje = "Hola a todos"

```

EJERCICIO: Crea un componente llamado Card, que imprima por pantalla:
- Nombre
- Edad
- 3 hobbies

```js
Card.jsx
const Card = () => {
    const nombre = "Marta";
    const edad = 37
    const hobbies = ["Caca1", "Caca2", "Caca3"]
    return(
        <>
            <h3>{nombre}</h3>
            <p>Mi edad es {edad}</p>
            <p>Mis hobbies</p>
            <ul>
                {
                    hobbies.map( (hobby) => {
                        return(
                            <li>{hobby}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Card;
```

```js
App.jsx
import Card from './components/Card'
function App() {

  return (
    <>
      <Card></Card>
    </>
  )
}
```


### Mandar propiedades desde un padre a un hijo
Se quitan las propiedades (const) y se ponen sin valor detro de las propiedades de la funcion. 
```bash
Se desconstruyen en el hijo
```
- NO - const nombre = "Marta"; const edad = 37 
- SI - const Card ({nombre, edad, hobbies}) => ...
Es decir, no se declaran las propiedades en el hijo, se declaran en el padre (App.jsx)

```js
const Card = ({nombre, edad, hobbies}) => {
    return(
        <>
            <h3>{nombre}</h3>
            <p>Mi edad es {edad}</p>
            <p>Mis hobbies</p>
            <ul>
                {
                hobbies.map( (hobby) => {
                    return(
                        <li>{hobby}</li>
                    )
                })
                }
            </ul>
        </>
    )
}
export default Card;
```

```js
import Card from './components/Card'
function App() {

  return (
    <>
      <Card nombre={"Marta"} edad={"36"} hobbies={["Caca1", "Caca2", "Caca3"]}/>
    </>
  )
}
```

### Darle estilos a los componentes 
Ponerle a la etiqueta de html el className="card"
Al hijo por ejemplo:
```js
const Card = ({nombre, edad, hobbies}) => {

    return(
        <div className="card">
          .....
        </div>
    )
}
```

```css
.card {
  padding: 2em;
  border: 2px solid black;
  border-radius: 1rem;
}
```
