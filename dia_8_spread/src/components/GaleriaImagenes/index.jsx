
// LO MÁS RESUMIDO POSIBLE
// Quito Parentesis, key en la imagen para no poner div y quito el return
const GaleriaImagenes = ({listaImagenes}) => {
    return (
        <div className="galeria">
            {
                listaImagenes.map(({index, src, alt})=>
                    (
                        <img className="imagen" key={index} src={src} alt={alt} />
                    )
                )
            }
        </div>
    );
}

// CON TODOS LOS PARENTESIS Y ELEMENTO
// const GaleriaImagenes = ({listaImagenes}) => {
//     return (
//         <div className="galeria">
//             {
//                 listaImagenes.map(({index, src, alt})=>{
//                     return (
//                         <div key={index}>
//                             <img className="imagen" src={src} alt={alt} />
//                         </div>
//                     )
//                 })
//             }
        
//         </div>
//     );
// }

export default GaleriaImagenes;