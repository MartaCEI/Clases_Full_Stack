import Entrantes from "./Entrantes";
import Principales from "./Principales";
import Postres from "./Postres";

const Menu = ({menu}) => {
    const {entrantes,principales,postres} = menu
    return (
    <>
        <h2 className="espacio">Entrantes</h2>
        {
            entrantes.map((entrante) => 
                ( <Entrantes key={entrante.id} {...entrante} /> ) )
        }
        <h2 className="espacio">Principales</h2>
        {
            principales.map((principal) => 
                ( <Principales key={principal.id} {...principal} /> ) )
        }
        <h2 className="espacio">Postres</h2>
        {
            postres.map((postre) => 
                ( <Postres key={postre.id} {...postre} /> ) )
        }
    </>
    );
}

export default Menu;