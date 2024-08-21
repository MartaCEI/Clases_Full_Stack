import Producto from "./Producto";

const JsonProductos = ({listaProductos}) => {
    return (
        
        <div className="Card">
            <h1>Lista de Productos</h1>
            {
                listaProductos.map((producto)=>{
                    return (
                        <Producto key={producto.id} {...producto} />
                    )
                })
            }
        </div>
    );
}

export default JsonProductos;

