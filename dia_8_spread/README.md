# Clase 8 - IF y Spread

## IF 
### ? :  Si se cumple la condición hacemos una cosa, sino, hacemos otra
```js
// Forma larga (solo fuera de los returns)
if (isCompleted) {
    <button>Verdaro (completada)</button>
} else {
    <button>Falso (NO compleatda)</button>
}

// Forma corta (dentro del return)
{
    isCompletada
        ? <button>Verdaro (completada)</button>
        : <button>Falso (NO compleatda)</button>
}
```

### && :  Si se cumple la condición hacemos una cosa, sino, NO. 
```js
// Forma larga (solo fuera de los returns)
if (isCompleted) {
    <button>Verdaro (completada)</button>
} 

// Forma corta (dentro del return)
{
    isCompletada && (
        <button>Verdaro (completada)</button>
    )   
}
```

```js
// Ejemplo de condicional simple
const edad = 18;
{
   edad >= 18 ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con variables
const esMayor = true;
{
   esMayor ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con funciones

const esMayor = (edad) => edad >= 18;
{
   esMayor(18) ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con objetos

const persona = { nombre: "Juan", edad: 25 };
{
   persona.edad >= 18 ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con arrays

const frutas = ["Manzana", "Pera", "Uva"];
{
   frutas.length > 0 ? <h1>Hay frutas</h1> : <h1>No hay frutas</h1>;
}
```

## Spread
- `Variables primitivas:` string, number, boolean, null, undefined.
- `Variables de referenecia:` object, array, function.

Spread permite trabajar con los objetos de referencia. Lo que hace es `hacer una copia (DUPLICA)` de nuestro elemento sin utilizar la referencia de donde venía. Así que, si cambio el valor del spread, no cambia en el original. 

- Nota: Spread solo copia elementos simples, no elementos mas complicados como anidados. Un método sencillo de duplicar un objeto o array de multiples niveles es utilizando `JSON.parse(JSON.stringify(objeto))`

```bash
Ejemplo PerfilDeUsuario:
1. Se usa el ...spread al llamar al componente (padre)
    Ej: <PerfilUsuario {...userData} />
2. Se descompone en el hijo: 
    Ej: const PerfilUsuario = ({nombre, email, img, direccion}) => {
    const {calle, ciudad, codigoPostal} = direccion;
    return (............)
    }
```


- USO: 
```js 
// Ejemplo 1
const props = {
   prop1: "valor1",
   prop2: "valor2",
   prop3: "valor3",
};
// método tradicional
<Componente prop1={prop1} prop2={prop2} prop3={prop3} />

// utilizando spread
<Componente {...props} />



// Ejemplo 2
const users = [
   { "id": 1, "firstName": "John", "age": 30, "isAdmin": true },
   { "id": 2, "firstName": "Jane", "age": 25, "isAdmin": false },
   { "id": 5, "firstName": "Jim", "age": 33, "isAdmin": true },
];

export default function Lista() {
   return (
      <ul>
         {users.map((user) => (
            <>
               {/* <User key={index} firstName={firstName} age={age} /> */}
               <User key={user.id} {...user} />
            </>
         ))}
      </ul>
   );
}

const User = ({ firstName, age, isAdmin }) => {
   return (
      <li>
         <h1>{firstName}</h1>
         <p>Mi edad es {age}</p>
         {isAdmin && <p>Soy admin</p>} 
      </li>
   );
};
```


### Suma de arrays con Spread
```js
let semana = ["Lunes"];
let otra = [...semana]; // ['Lunes'];
otra = [...otra, "Martes"]; // ['Lunes', 'Martes'];
otra = ["Domingo", ...otra]; // ['Domingo', 'Lunes', 'Martes'];
``` 