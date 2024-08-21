const PerfilUsuario = ({nombre, email, img, direccion}) => {
    const {calle, ciudad, codigoPostal} = direccion;
    return (
        <div className="Card">
            <img className="imagen" src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <p><b>{email}</b></p>
            <p>{calle} {ciudad}, {codigoPostal} </p>
        </div>
    );
}

export default PerfilUsuario;