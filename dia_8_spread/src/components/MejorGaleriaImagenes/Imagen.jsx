import styles from './galeria.module.css';

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

export default Imagen;