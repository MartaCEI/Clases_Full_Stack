# Clase 12 - useEffect

## Hook useEffect
Premite realizar efectos secundarios (ejecutar codigo) de los componenetes. Osea, nos permite ejecutar código despues de que el componentes se renderiza.


## Para que se usa
1. Realizar peticiones a APIs (Application Programing Interface = interpreta código de máquina a máquina, de servidor a programas de una máquina para que pueda renderizar la información)
2. Manipular el DOM de manera directa (cambiar title, crear elements, ect.)
3. Configurar subscripciones o temporizadores (crear/quitar eventListener, manejar setIntervals, ect.)


## Sintaxis básica
- Devuelve una funcion y un array de dependencias.
    useEffect( función, [...dependencias] );
- Se ejecuta dos veces al iniciar la app (use strict y luego la app).
- Se ejecuta despues de cada renderizado.

```js	
    useEffect ( () => {
        ...código...
        return () => {
            ...código...
        }
    }, [...código...]  );
```

```js
useEffect( () => {
    // Código que se ejecutará al montar el componente. componentDidMount (Listeners, intervalos...)
    console.log("Monte mi componente");
    console.log("Actualice mi componente"); // El componente que esta en el array de abajo.
    // OPCIONAL:
    return () => {
    // Código que se ejecutará al desmontar el componente. componenteWillUnmount (Eliminar listeners, quitar intervalos...)
    console.log("Desmonté el componente");
    }
}, [/* Variables que se van a actualizar (dependencias) Ej:*/ count, count2, status])
```


## Ciclos de vida:
1. componentDidMount: Se ejecuta cuando se monta el componente por primera vez.
```js   
useEffect ( (console.log("Monte mi componente");) => {}, []  ); 
```

2. componentDidUpdate: Se ejecuta cuando el componente se actualiza.
```js   
useEffect ( () => {console.log("Actualice mi componente");}, [cont]  );
```

3. componentWillUnmount: Se ejecuta cuando el componente se desmonta.
```js   
    useEffect ( () => {
                console.log("Actualice mi componente");
                return() => {
                    console.log("Quite la variable")  //***ComponenteWillDismount***
                }
    }, [cont] ); 
```

```js
    useEffect ( () => {console.log("Actualice mi componente");}, [cont]  );
```

```bash
NOTA: <React.StrictMode> en main.jsx es como el 'use strict' en js (Por eso useEffect se carga dos veces, una vez para asegurarse de que no haya errores (use Strict) y luego para que la aplicacion empiece a funcionar). 
``` 


## la funcions de clean up 

1. La funciones que retonamos (dentro del return) en useEffect se llama clean up, se ejecuta antes de quitar el componenete silir a componenteWillUnmount.
2. Antes de ejecutar el efecto de la siguiente renderizacion, si el efecto se ejecuta mas de una vez. 

Es util para: 
- Cancelar suscripciones
- Limpiar temporizadodres
- Liberar recursos que ya no necesitamos


### Tips / puntos clave para recordar
1. Se ejecuta despues de cada renderizacion/carga.
2. El array de dependencias controla cuando se va a volver a ejecutar.
3. La funcion de clean up es crucial para prevenir memory leaks y comportamientos inespreados
4. Herramnienta versatil paar reemplazar todos los metodos de ciclo de vida de los componentes de Clase.


## Fetch
const [data, setData] = useState([]) => Lleva un array vacio ya que mi Json es un array. 

asinc => Lee linea por linea (Asincrona) de arriba a bajo y cuando puedas me traes la info. 

await => Espera un contenido asincrono. Devuelve una "Promesa" Ej: te prometo que te devuelvo los datos. Cuando se cumple la promesa entonces te manda los datos (try), si no devuelve datos (catch).

response.json() => combierte el json en un objeto de JavaScrip.


        fetch(url)
        .then( (datos) => {return datos} )
        .then( (datos2) => {return datos2} )
        .then( (datos3) => {return datos3} )
        .catch( (e) => {console.log("hay un error", e)} )

```bash
***************************************IMPORTANT*********************************
Chat GPT de Microsoft
Microsoft Bing => Copilot 
***************************************IMPORTANT*********************************
```