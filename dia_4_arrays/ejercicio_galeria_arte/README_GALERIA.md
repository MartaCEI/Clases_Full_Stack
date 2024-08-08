# Actividad Galería de arte:

Supongamos que estás trabajando con una colección de objetos que representan diferentes obras de arte en una galería. Cada objeto contiene información sobre el artista, el año de la obra, el título, y si está actualmente en exhibición.

1. Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato:
"La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"
2. Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.
3. Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.
4. Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica
5. Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).
6. Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.
7. Usa findIndex para encontrar la posición en el array de una obra específica.
8. Agregar una función que permita añadir nuevas obras al array galería
Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id


```js
const ArtGallery = [ 
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];

    console.clear();
    console.log("HOLAaaaaa desde galeria/index.js");
    // console.log(ArtGallery);

// ---------------------------------------
// ejercicio 1:
// forEach para imprimir cada obra
// ---------------------------------------
console.log("\n\n Ejercio 1: \n")
ArtGallery.forEach( obra => {

    // let isExhibida = "NO SE";
    // if(obra.isExhibited){
    //     isExhibida = "SE";
    // }
    const isExhibida = obra.iExhibida ? "SE" : "NO SE";
    console.log(`La obra ${obra.title} por el autor ${obra.author} (${obra.year}) ${isExhibida} encuentra exhibida`);
})


// ---------------------------------------
// ejercicio 2:
// Map para imprimir los títulos de las obras
// ---------------------------------------
console.log("\n\n Ejercio 2: \n");
const listaTitulo = ArtGallery.map( obra => obra.title);
listaTitulo.forEach(titulo => console.log(titulo));
// console.log(listaTitulo);


// ---------------------------------------
// ejercicio 3: 
// Función de Búsqueda con título
// ---------------------------------------
console.log("\n\n Ejercio 3: \n");

// Comentario de función JSDocs
/**
 * Buscar una obra, a partir de un título
 * @param {string} title - el título de la obra 
 * @param {string} artist - el artista de la obra 
 * @returns {object | {error: 404 , title: string} } - la obra encontrada o error
 */
const findArt = (title, artist) => {
    // paso el título a minúsculas (toLowercase) y le quito espacios delante y detras (trim)
    title = title.toLowerCase().trim();

    const result = ArtGallery.find( obra =>  obra.title.toLowerCase() === title);
    if(!result) {
        return { msg: "Obra no encontrada", error: 404 }
    }
    return result;
}


console.log("Buscando Starry Night: ", findArt("Starry Night"));
console.log("Buscando    StaRrY nIght: ", findArt("   StaRry nIght"));
console.log("Buscando The Matrix: ", findArt("The Matrix"));

// ---------------------------------------
// ejercicio 4: 
// usar some() para un año específico ej: 1503
// ---------------------------------------
console.log("\n\n Ejercio 4: \n");
const year=1503;

// Diferencia entre condicionales == y ===
// // poco exacto == (el valor)
// "1503" == 1503 // verdadero

// // muy exacto === (tipo de dato y valor)
// "1503" === 1503 // falso

const hasArtOfYear = ArtGallery.some( obra => obra.year === year);
if(hasArtOfYear){
    console.log("Encontre al menos una obra de este año: "+year);
    console.log("Por ejemplo: ",  ArtGallery.find( obra => obra.year === year )   );
} else {
    console.log("No encontre ninguna obra de este año: "+year);
}

// ---------------------------------------
// ejercicio 5: 
// usar every() sin son previas a mi cumple años: 1984
// ---------------------------------------
const yearOfBirth= 1942;

console.log("------------------------------------------");
console.log("\n\n Ejercio 5: \n");

const isAllArtBeforeYear = ArtGallery.every(obra => obra.year < yearOfBirth);

// operación condicional ternaria
const msg= isAllArtBeforeYear 
                ? "Soy mas joven que todas las obras" 
                : "Ya soy demasiado sabio";

console.log(msg);
// if(isAllArtBeforeYear){
//     console.log("Soy mas joven que todas las obras");
//      console.log("holaa");
// } else {
//     console.log("Ya soy demasiado sabio");
// }

```
