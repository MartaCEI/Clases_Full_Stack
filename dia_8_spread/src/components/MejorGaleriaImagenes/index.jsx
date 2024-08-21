import styles from './galeria.module.css';


const MejorGaleriaImagenes = ({listaImagenes}) => {
    return (
        <div className="galeria">
            {
                listaImagenes.map( (item, index)=> (
                    <Imagen key={index} {...item} />
                ))
            }
        </div>
    )
}

// TAMBIEN SE PUEDE INCLUIR ESTE COMPONENTE COMO Imagen.jsx y luego import exprot a este componente

const Imagen = ({src, alt}) => {
    return (
        // <img src={src} alt={alt} />
    <a href="" className={styles.card}>
        <img src={src} className={styles.card__image} alt="" />
        <div className={styles.card__overlay}>
            <div className={styles.card__header}>
            <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
            <div className={styles.card__headerText}>
                <h3 className={styles.card__title}>{alt}</h3>            
                <span className={styles.card__status}>1 hour ago</span>
            </div>
            </div>
            <p className={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
    </a>   
    )
}

export default MejorGaleriaImagenes;





// ESTE ES EL CODIGO SIN ESTILOS DENTRO 

// const GaleriaImagenes = ({lista}) => {
//     console.log(lista)
//     return (
//         <div className='grid'>
//             {
//                 lista.map( (item , i) => (
//                         <Imagen key={i} src={item.src} alt={item.alt} />
//             ))
//             }
//         </div>
//     )
// }

// export default GaleriaImagenes;
