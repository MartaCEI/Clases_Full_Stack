import Imagen from "./Imagen"

const MejorGaleriaImagenes = ({listaImagenes}) => {
    return (
        <div className="galeria">
            {
                listaImagenes.map( (item, index)=> {
                    return (
                        <Imagen key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

export default MejorGaleriaImagenes;
