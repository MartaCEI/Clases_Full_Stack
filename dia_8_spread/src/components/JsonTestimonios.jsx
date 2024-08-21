const JsonTestimonios = ({listaTestimonios}) => {
    return (
        
        <div className="Card">
            <h1>Lista de Testimonios</h1>
            {
                listaTestimonios.map(({id, name, position, company, testimonial, image})=>{
                    return (
                        <div className="espacio grid" key={id}>
                            <div>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                                <p><b>{position}</b></p>
                                <p><i>{company}</i></p>
                            </div>
                            <div>
                                <p>{testimonial}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default JsonTestimonios;