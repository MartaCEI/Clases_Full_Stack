# Clase 9 - Hook useState

## Que son los hooks (Variables inteligentes)
`Super poderes de React` Son pedazos de código que se pueden utilizar por todos nuestros componentes para actualizar variables según se cambien, y así, ahorrarnos código. Ej: contador.  

## UseSate (Dentro de un componete)
Usa una variable inteligente `SOLO dentro de un componente` que al actualizarla o cambiarla, se actualizará por todo mi componente. Es decir, renderizará la actualizacion de esa variable por todo mi componente. Ej: contador. 
1. `const [ variable, setVariable ] = useState( valorInicial );`
2. variable: variable que se va a actualizar por todo mi componete.
3. setVariable: función que actualiza la variable y reimprime el componente.
4. valorInicial: valor que tendrá la variable al inicio. Puede ser un string, un número, un objeto, un array, etc. Inicialmente, puede que esté vacío. Ej: useState(""), useState(0), useState([]), useState({}), useState(null), useState(false), etc.
```js
const [ patata, setPatata ] = useState(22);
setPatata(33);
console.log(patata); // 23
```
```js
const [nombre, setNombre] = useState("Juan");
setNombre("Pedro");
console.log(nombre); // Pedro
```

## Funcion onClick
onckick es un evento que se ejecuta cuando se hace click en un elemento. Ej: botón, div, etc.
Dentro de un elemento, `se declara el onClick`, se pone un `=` y se le asigna una `función entre corchetes { ()=>{} }`.
```js
// Versión larga (Para multiples lineas)
const handleClick = () => {
    console.log("Hola Mundo");
    console.log("Adios Mundo");
}
<button onClick={ handleClick }>Click me</button>
```
```js
// Versión corta (Para una sola linea)
<button onClick={ () => console.log("Hola Mundo") }>Click me</button>
// o más corta, ya que el parentesis y la flecha son innecesarios:
<button onClick={ console.log("Hola Mundo") }>Click me</button>
```

### OnClick con booleanos
Al decir que `setVariable cambie a !variable`, estamos diciendo que cambie a lo contrario de lo que es. Si es true, cambia a false. Si es false, cambia a true.
```js
<button onClick={ () => setIsActive(!isActive) }>Click me</button>
```

### OnClick con strings
Se puede hacer que un botón cambie de color al hacer click. Para ello, se puede hacer un operador ternario dentro de la clase del botón. Si isActive es true, se pone la clase "claro", si es false, se pone la clase "oscuro".
```js
className={isActive?"claro":"oscuro"}
```
Lo mismo pasa con el texto del botón. Si isActive es true, escribe "encendido", si es false, escribe "apagado".
```js
<button>
    Interruptor {isActive?"encendido":"apagado"}
</button>
```

### Coger información de un input
#### Ejemplo 1 (document.getElementById o document.querySelector) 
Al apretar un botón, se puede coger la información de un input y guardarla en una variable. Para ello, se puede usar `document.getElementById("id").value` para coger el valor del input.

```js
const [listaTareas, setListaTareas] = useState([])
const [nuevaTarea, setNuevaTarea] = useState("");

const handleAgregarTareas = () => {
    setNuevaTarea(document.querySelector('input').value);
    // setNuevaTarea(document.getElementById('nombre').value);
    setListaTareas([...listaTareas, nuevaTarea]);
}
<input id="nombre" type="text" />
<button onClick={ handleClick }>Guardar</button>
```
Luego se puede mostrar el valor del input en la pantalla en una lista con un map.
```js   
<ul>
    {listaTareas.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
</ul>
```
#### Ejemplo 2 (Con onChange)
Al añadir onChange en el imput se puede ver en tiempo real lo que se escribe en el input. Para ello, se puede usar `e.target.value` para coger el valor del input.
El value del input se puede cambiar por la variable que se está actualizando.
```js
    const [listaTareas, setListaTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleAgregarTareas = () => {
        // si el input esta vacio o tiene espacios en blanco, no hacer nada.
        if(nuevaTarea.trim() === "") { return; }
        // Agregar la tarea a la listaTareas
        setListaTareas([...listaTareas, nuevaTarea]);
        // Limpiar el input
        setNuevaTarea("");
        // Notificar al usuario que la tarea fue agregada
        alert("Tarea agregada");
    }
        // Este input hace que se pueda coger el valor del input y guardarlo en la variable nuevaTarea. Y el onChage hace que se actualice en tiempo real.
    return (
        <div className="Card">
            <h2>Lista de Tareas</h2>
            ***** Este input hace que se pueda coger el valor del input y guardarlo en la variable nuevaTarea. Y el onChage hace que se actualice en tiempo real *****
            <input id="nombre" type="text" 
                value={nuevaTarea}
                onChange={(e) => {
                    setNuevaTarea(e.target.value);
            }}/>
            *****
            <button onClick={handleAgregarTareas}>Agregar</button>
            <ul>
                {
                listaTareas.map((lista, index) => (
                    <li key={index}>{lista}</li>
                ))
                }
            </ul>
        </div>
    );
```

## Formulario simple con State
Para hacer un formulario con useState, se puede hacer un input por cada campo del formulario y un botón para enviar el formulario. Cada input se puede guardar en una variable con useState y cada vez que se cambie el valor del input, se actualiza la variable. Al hacer click en el botón, se puede coger el valor de cada variable y enviarlo a una función que se encargue de enviar los datos a un servidor o hacer lo que sea necesario con ellos.
```js
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");

const handleEnviarFormulario = () => {
    console.log(nombre, email);
}

return (
    <div>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleEnviarFormulario}>Enviar</button>
    </div>
);
```

## Formulario son useSatate y validación
1. Crear un estado para cada campo del formulario que los metemos en un objeto.
```js	
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        rangoEdad: "",
        ocupacion: "",
        .....
    });
```

2. Crear un estado para los errores. (opcional, recomendado)
```js
    const [errores, setErrores] = useState({});
```

3. INPUTS: Creamos el form con el `hadleSubmit`y el e.preventDefault() para evitar que la página se recargue al enviar el formulario.
```js
    const handleSubmit = (e) => {
        e.preventDefault();
    }
```	
- input type es el tipo de input que queremos. Ej: text, email, password, etc.
- input id es el id del input que está vinculado con el label htmlFor
- input name es el nombre del input.
- input value es el valor del input que está guardado en el State. Pero como es un objeto se pone `formData.nombre`.
- input onChange tiene una funcion `onChange={handleChange}`. Que la definiremos más tarde. 

4. Generamos una función para validar el formulario. 
`{error.nombre && <p>{error.nombre}</p>}` Si hay un error en el campo nombre, se imprime un párrafo con el error.
`NOTA:` Para poner styles en linea se pone doble llave `style={{color: "red"}}`
```js
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre"/>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            {error.nombre && <p style={{color: "red"}}>{error.nombre}</p>}
        </form>
    );
```

5. Copiamos el de los apellidos ya que tambien es un input. 

6. SELECT: Como es un select creamos los values de este select en un array de objetos que tendrá un value u un label.
```js
    const listaRangoEdades = [
        {value: "menor", label: "Menor de 18"},
        {value: "adulto-joven", label: "18-30"},
        {value: "adulto", label: "31-60"},
        {value: "adulto-mayor", label: "Mayor de 60"},
    ];
```
7. Lo mismo para las ocupaciones. 
```js	
    const listaOcupaciones = [
        {value:"estudiante" , label: "Estudiante" },
        {value:"empleado" , label: "Empleado" },
        {value:"autonomo" , label: "Autónomo" },
        {value:"desempleado" , label: "Desempleado" },
        {value:"jubilado" , label: "Jubilado" },
    ];
```

8. Creamos el select con las opciones que tiene el select.
- value: es el valor que se guardará en el State.
- label: es el texto que se muestra.
- option value: es el valor que se guardará en el State.
- option key: es el index del array.
- option label: es el texto que se mostrará en el select.
La primera opción `<option>` tiene un value vacio "" y tendrá escrito "Seleccione un rango".
El resto de `<option>` tendrá un `map` que recorrerá el array listaRangoEdades y mostrará un `<option>` por cada objeto del array.
```js
    <label htmlFor="rangoEdad">Rango de edad:</label>
    <select id="rangoEdad" name="rangoEdad" value={formData.rangoEdad} onChange={handleChange}>
        <option value="">Seleccione un rango</option>
        {listaRangoEdades.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
        ))}
    </select>
```
9. Lo mismo para el select de ocupaciones.
```js
    <label htmlFor="ocupacion">Ocupación:</label>
    <select id="ocupacion" name="ocupacion" value={formData.ocupacion} onChange={handleChange}>
        <option value="">Seleccione una ocupación</option>
        {listaOcupaciones.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
        ))}
    </select>
```

10. Creamos la función `handleChange` que se encargará de actualizar el State cada vez que se cambie el valor de un input.
Leemos el value y el name cada vez que cambiamos un input o un select. 
Queremos que actualice con el value que leemos(ej: nombre), el name que corresponde. Si el name es nombre, actualiza el nombre. Si el name es apellido, actualiza el apellido. 
Hago una desestructuración de e.target para coger el name y el value. 
En el setFormData, hago una copia del objeto formData y actualizo el campo que corresponde al name con el value que corresponde. 
Con otras palabras, nuestro formData, hace una copia y actualizo en el nombre que corresponde el value que corresponde. 
```js
    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({ ...formData, [name]:value });
    }
```
Explicado con una funcion flecha:
El setFormData recibe los datos previos `prevData` y hago un return de mi objeto prevData y actualizo el campo que corresponde al name con el value que corresponde. 
```js
    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData( (prevData) => ({
            return (
            ...prevData, [name]: value
            )
            }));
    }
    // resumido:
    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData( prevData => ({ ...prevData, [name]: value}));
    }
```

11. Para calcular isAdulto, hacemos una lista de los valores que vamos a utilizar y mirar si está incluida dentro de RangeEdad con el método `includes`. 
Posteriormente preguntaremos isAdulto en el return del select, y si es true, mostramos el select de ocupaciones.
```js
    const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad);

    {isAdulto && (
                <Select .......>)}
``` 

12. HandleSubmit y validateForm com mis palabras: En el validateForm creamos un objeto vacío llamado objetoErrores. Y luego hacemos las comprovaciones, si no hay nombre, apellido, rango de edad u ocupación, se guardará en ese objeto la información que le hemos asignado por cada campo. 
ya que esta función nos devuleve una lista la guardamos en una variable en la siguiente fiunción handleSubmit. Y aquí es donde hacemos la comprovaciones:  Object.keys(listaErrores).length === 0, si la longitud de la lista de errores es 0, no hay errores y podemos enviar el formulario. Sino, hacemos un prevErrores y lo guardamos en el setErrores.

```js
    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if(!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if(!formData.rangoEdad) objetoErrores.rangoEdad="Debes seleccionar un rango";
        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";
        return objetoErrores;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();
        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores( prevErrores => ({ ...prevErrores, [name]: ""}));
        }
    }
```	

```js 
export const Formulario = () => {
    // Crear un estado para cada campo del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        rangoEdad: "",
        ocupacion: ""
    });
    // Crear un estado para los errores
    const [errores, setErrores] = useState({});

    // Listas de opciones para los select
    const listaRangoEdades = [
        {value: "menor", label: "Menor de 18"},
        {value: "adulto-joven", label: "18-30"},
        {value: "adulto", label: "31-60"},
        {value: "adulto-mayor", label: "Mayor de 60"},
    ];

    // Lista de ocupaciones
    const listaOcupaciones = [
        {value:"estudiante" , label: "Estudiante" },
        {value:"empleado" , label: "Empleado" },
        {value:"autonomo" , label: "Autónomo" },
        {value:"desempleado" , label: "Desempleado" },
        {value:"jubilado" , label: "Jubilado" },
    ];

    // Función para validar el formulario
    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if(!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if(!formData.rangoEdad) objetoErrores.rangoEdad="Debes seleccionar un rango";
        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";
        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();
        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        let {name, value} = e.target;


        if(e.target.type == "checkbox"){
            value = e.target.checked;
            console.log("Checkbox value es:", value);
        }

        // setFormData({ ...formData, [name]:value });
        setFormData( prevData => ({ ...prevData, [name]: value}));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))

    }

    const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad);

    return ( 
        <form onSubmit={handleSubmit} className='Card'>
            <h2>Formulario</h2>
            {/* input de Nombre */}
            <Input 
                name="nombre"
                label="Nombre:"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                error={errores.nombre}
                className="cssForm"
                // debug={true}
            />

            {/* input de apellido  */}
            <Input 
                name="apellido"
                label="Apellido:"
                value={formData.apellido}
                onChange={handleChange}
                className="cssForm"
                error={errores.apellido}
                // debug={true}
            />


            {/* select de rango de edad  */}
            <Select 
                name="rangoEdad"
                label="Rango de edad:"
                firstOptionLabel="Seleccione un rango"
                value={formData.rangoEdad}
                onChange={handleChange}
                lista={listaRangoEdades}
                error={errores.rangoEdad}
                className="cssForm"
                // debug={true}
            />


            {/* select de ocupacion si es adulto */}
            {isAdulto && (
                <Select 
                    name="ocupacion"
                    label="Ocupación:"
                    firstOptionLabel="Seleccione una ocupación"
                    value={formData.ocupacion}
                    onChange={handleChange}
                    lista={listaOcupaciones}
                    error={errores.ocupacion}
                    className="cssForm"
                    // debug={true}
                />
            )}

            <button type="submit">Enviar!</button>
        </form>
    );
}


export const Input = ({name, label, type="text", value, onChange, error, className, debug=false}) =>{
    return (
        <div className={className}>
            <label>
                {label}
                <input 
                    className="Input-Label"
                    type={type} 
                    name={name}
                    value={value} 
                    onChange={onChange}
                />
            </label>
            {error &&  <p style={ {color:'red'} }>  {error}</p> }
            {debug && <span style={{color:'orange'}}>Has escrito: {JSON.stringify(value)}</span>}
        </div>
    )
}

export const Select = ({name, label, firstOptionLabel, value, onChange, lista=[{value:0, label:"no hay items"}], error, className, debug}) => {
    return (
        <div className={className}>
            {label && <label htmlFor={name}>{label}</label>}
            <select 
                className="Input-Label"
                name={name} 
                id={name}
                value={value}
                onChange={onChange}
                >
                    <option value="">{firstOptionLabel}</option>
                    {
                        lista.map( ({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
            </select>
            {error &&  <p style={ {color:'red'} }>  {error}</p> }
            {debug && <span style={{color:'orange'}}>Has escrito: {JSON.stringify(value)}</span>}
        </div>
    )
}
```


## Multu Step Form
1. Crear un estado para el paso actual.
```js
    const [pantalla, setPantalla] = useState(1);
```
2. State para los datos del formulario.
```js
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
    });
```

3. <form onSubmit={handleSubmit}> para enviar el formulario.
```js
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
```

4. Creamos tres botones: anterior, siguiente y enviar.
```js
    <button onClick={handleAnterior}>Anterior</button>
    <button onClick={handleSiguiente}>Siguiente</button>
    <button type="submit">Enviar</button>
```

5. Creamos las funciones handleAnterior, handleSiguiente y handleSubmit.
```js

    const handleSiguiente = () => {
        setPantalla(pantalla => Math.min(pantalla + 1, 3));
    }

    const handleAnterior = () => {
        setPantalla(pantalla => Math.max(pantalla - 1, 1));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado con los datos:", formData);
    }
```

6. Creamos la función de renderizar pasos la cual va a ser un switch que va a renderizar los componentes que le digamos. 
```bash
NOTA: En cada paso, le pasamos el data y el setData para que pueda actualizar los datos del formulario. Y apretar a los botones anterior o siguiente, la información se guardará en el storage de la página. 
```
```js
    const renderizarPasos = () => {
        switch(pantalla){
            case 1:
                return <Paso1 data={formData} setData={setFormData} />;
            case 2:
                return <Paso2 data={formData} setData={setFormData} />;
            case 3:
                return <Paso3 data={formData} setData={setFormData} />;
            default:
                return null;
        }   
    }
```

7. Por último, creamos los componentes de los pasos.
```js
    const Paso1 = ({data, setData}) => {
        return (
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={data.nombre} 
                onChange={(e) => setData({...data, nombre: e.target.value})} />
            </div>
        );
    }

    const Paso2 = ({data, setData}) => {
        return (
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={data.email} 
                onChange={(e) => setData({...data, email: e.target.value})} />
            </div>
        );
    }

    const Paso3 = ({data}) => {
        return (
            <div>
                <h2>Resumen de datos</h2>
                <p>Nombre: {data.nombre}</p>
                <p>Email: {data.email}</p>
            </div>
        );
    }
```

## 10 Actividades para practicar useState en React

Crear una carpeta `components` y dentro de ella crear los siguientes componentes:

1. Contador Simple:
Crea un componente con un botón que incremente un contador. Muestra el valor del contador en la pantalla.

2. Interruptor On/Off:
Implementa un botón que alterne entre los estados "Encendido" y "Apagado". Aprovechar este cambio de estado para cambiar la clase de un objeto, o sus estilos.

3. Lista de Tareas Básica:
Crea un componente que permita añadir tareas a una lista y mostrarlas.

4. Formulario de Registro:
Desarrolla un formulario simple con campos para nombre y email. Usa useState para manejar los cambios en los inputs.

5. Galería de Imágenes:
Crea una galería simple donde el usuario pueda navegar entre varias imágenes usando botones de "anterior" y "siguiente".

6. Temporizador:
Implementa un temporizador que pueda iniciarse, pausarse y reiniciarse.

7. Calculadora Básica:
Crea una calculadora que pueda realizar operaciones simples (suma, resta, multiplicación, división).

8. Juego de Adivinanza:
Desarrolla un juego donde el usuario intente adivinar un número aleatorio, con pistas de "más alto" o "más bajo".

9. Editor de Texto en Tiempo Real:
Crea un área de texto que muestre en tiempo real un recuento de palabras y caracteres mientras el usuario escribe.

10. Carrito de Compras:
Implementa un carrito de compras simple donde los usuarios puedan añadir items, ver el total y la cantidad de items.


