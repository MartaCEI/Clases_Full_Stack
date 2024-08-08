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

console.log("\n\n Ejercio 1: Usa forEach y Template Strings para mostrar los títulos de las obras \n")

ArtGallery.forEach((obra) => {
    const isExhibited = obra.isExhibited ? "SE" : "NO SE"
    console.log(`La obra ${obra.title} por el autor ${obra.artist} año ${obra.year} ${isExhibited} encuentra exhibida.`)
})

console.log("\n\n Ejercio 2: Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola \n")

ArtGallery.map((titulo)=> {
    console.log(titulo.title)
})

console.log("\n\n Ejercio 3: Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola. \n")

ArtGallery.filter((obra) => {
        obra.isExhibited ? console.log(`Obras exhibidas: ${obra.title}`) : console.log("Obra no disponible")
    })

    console.log("\n\n Ejercio 4: Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica. \n")

    // El find devuelve verdadero o falso!!!
const buscaArte = (title) => {
    const result = ArtGallery.find( obra => obra.title === title)
    return result
}

console.log("Buscando Starry Night: ", buscaArte("Starry Night"))
console.log("Buscando Starry Night: ", buscaArte("   StaRry nIght"))
console.log("Buscando The Matrix: ", buscaArte("The Matrix"))


console.log("\n\n Con comentarios y errores \n")
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

// Clase 4 hora 2:35h