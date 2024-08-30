import { useState, useEffect } from "react";

const PrimerUseEffect = () => {
    const [cont, setCont] = useState(0);
    // 1. Cuando se monta el componente y se ejecuta. componentDidMount
    // useEffect(() => {
    //     console.log('Monté el componente');
    // }, []);

    // 2. Cuando se actualiza/recarga los datos que puse en el array de dependencias. cpomponentDidUpdate
    useEffect(() => {
        console.log('Actualicé el componente '+cont);
    }, [cont]);

    // 3. Cuando se desmonta el componente. componentWillUnmount
    useEffect(() => {
        return () => {
            {cont >= 10 && console.log('Desmonté el componente')};
        }
    }, [cont]);

    return (
        <div className="Card">
            <h2>Soy un test de useEffect</h2>
            {cont < 11 && <button onClick={() => setCont(cont+2)}>Click {cont}</button>}
        </div>
    );
}

export default PrimerUseEffect;