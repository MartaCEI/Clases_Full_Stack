# Clase 4 (Repaso de Arrays)
Lista de valores. 

```js 
const listaMago = 
[
    {nombre: "Harry". apellido: "Potter", casa: "Gryffin"},
    {nombre: "Hermiony". apellido: "Granger", casa: "Gryffin"},
    {nombre: "Draco". apellido: "Malfoy", casa: "Slytherin"},
    {nombre: "Jhon" apellido: "Deer", casa: "HufflePuff", atacar: ()=>{}}
]
```

## Devolución de Metodos de Array 
### Los más usados
- .forEach()  // NO DEVUELVE NADA solo recorre
- .map()  // DEVUELVE UN NUEVO ARRAY (modifica al array original)
- .filter() // Devueleve un ARRAY que cumpla una condicion (Ej: edad > 18) (UN ARRAY)
- .find() // Devuelve el ELEMENTO que cumple la condicion (UNO SOLO)

### Menos usados
- .some() // Devuelve un booleano si cumple la condicion
- .every() // Devuelve un BOOLEANO  si TODOS cumplen la condicion
- .findIndex // Devuleve el INDICE del elemento que cumpla la condicion


```js
// Ejemplo devolver una lista con todos los mago de Griffi
1. 
listaMago.filter(filtrarUsuarios)

function filtrarUsuarios (valor) {
    return valor.casa == Gryffin
}

2. 
// Saco la funcion y la meto dentro del parentesis
listaMago.filter((valor) => {
    return valor.casa == Gryffin
})

3. 
// Como el código tiene una sola línea se borra los corchetes y la palabra return
listaMago.filter((valor)  => valor.casa == "Gryffin")
listaMago.filter((valor)  => valor.nombre == "Harry")

4. 
//guardo los datos en un let o const
const magosListaGryffin = listaMago.filter (valor  => valor.casa == "Gryffin")  //Me devuelve un Array. Si no encuentra nada devuelve un Array vacío.
const magosHarry = listaMago.find (valor  => valor.nombre == "Harry")  //Me devuelve un elemento. 

## Template strings 
const nombre = "Laura"
'Hola soy un conmentario de comillas simples'
"Hola soy un conmentario de comillas simples"
`Hola soy un comentario con template strings ${nombre}`
```


## Comentario de función JSDocs
```js
/**
 * Buscar una obra, a partir de un título
 * @param {string} title - el título de la obra 
 * @param {string} artist - el artista de la obra 
 * @returns {object | {error: 404 , title: string} } - la obra encontrada o error
 */
const findArt = (title, artist) => {
    // paso el título a minúsculas (toLowercase) y le quito espacios delante y detras (trim)
    title = title.toLowerCase().trim();
}
```