# Clase 17: React Router

1. Instalamos el paquete react-router-dom
```bash
npm install react-router-dom
```

2. En App.js importamos BrowserRouter y Route
```jsx
import { BrowserRouter as Router, Route, Link, NacLink, Routes } from 'react-router-dom';
```
BrowserRouter: es el componente que envuelve toda la aplicación. Le cambiamos el nombre a Router para que sea más corto.
Route: es el componente que nos permite definir una ruta.
Link: es el componente que nos permite crear un enlace a una ruta.
Routes: es el componente que nos permite definir varias rutas.

3. Envolvemos el componente App con el componente Router
Le decimos a React que nuestra aplicación va a tener rutas.
```jsx
// App.js
<Router>
    <header>
    </header>

    <main>
    </main>

    <footer>
    </footer>
</Router>
```

4. Creamos un componentes Personajes.js, Lugares.js y Episodes.js

5. En App.js importamos los componentes Personajes, Lugares y Episodes
```jsx 
import Personajes from './components/Personajes';
import Lugares from './components/Lugares';
import Episodes from './components/Episodes';
```

6. Creamos las rutas en App.js con el componente Route
Routs es un componente que nos permite definir varias rutas. 
Route es un componente que nos permite definir una ruta individual dentro de Routs.
```jsx
// App.js
<main>
    <Routes>
        // Definimos la ruta para el componente Personajes como home o página principal `/`. 
        <Route path="/" element={<Personajes />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/episodios" element={<Episodes />} />
    </Routes>
</main>
```

7. Creamos un menú de navegación con los componentes NavLink
```js 
<header className='Header'>
    <h1 className='Header-title'>Rick and Morty</h1>
    <nav>
    <ul className='Nav-ul'>
        <li><NavLink to='/'>Personajes</NavLink></li>
        <li><NavLink to='/locations'>Lugares</NavLink></li>
        <li><NavLink to='/episodes'>Episodios</NavLink></li> 
    </ul>
    </nav>
</header>
```

8. Creamos un menú de navegación con los componentes Link
```js
<footer className='Footer'>
    <p>Hecho por: <a href='Mart Rodriguez'>Mart Rodriguez</a></p>
    <Link to='/'>Personajes</Link>
    <Link to='/locations'>Lugares</Link>
    <Link to='/episodes'>Episodios</Link>
</footer>
```

9. Nos quedaría así el componente App.js
```jsx
// App.js
    <Router> 
      <div className='Container'>
        <header className='Header'>
          <h1 className='Header-title'>Rick and Morty</h1>
          <nav>
            <ul className='Nav-ul'>
              <li>
                <NavLink to='/'>Personajes</NavLink>
              </li>
              <li>
                <NavLink to='/locations'>Lugares</NavLink>
              </li>
              <li>
                <NavLink to='/episodes'>Episodios</NavLink>
              </li> 
            </ul>
          </nav>
        </header>

        <main className='Content'>
          <Routes>
            <Route path='/' element={<Personajes />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='/episodes' element={<Episodes />} />
          </Routes>
        </main>
        <footer className='Footer'>
          <p>Hecho por: <a href='Mart Rodriguez'>Mart Rodriguez</a></p>
          <Link to='/'>Personajes</Link>
          <Link to='/locations'>Lugares</Link>
          <Link to='/episodes'>Episodios</Link>
        </footer>
      </div>
    </Router>
```

## Diferencias entre Link y NavLink
Link (links normales): es un componente que nos permite crear un enlace a una ruta.
NavLink (links del navegador): es un componente que nos permite crear un enlace a una ruta y además nos permite agregar estilos cuando la ruta está activa. Ya que Añade `active` cuando esta activo. Ejemplo:
```jsx 
<NavLink to='/'>Personajes</NavLink>
```
```css
a.active {
    color: red;
}
```

## No se puede meter un boton dentro de un Link, ni viceversa.
Para solucionar esto, podemos usar el componente NavLink y darle estilos para que parezca un botón. Ejemplo:
```jsx 
<NavLink className="button-Link" to='/'>Personajes</NavLink>
```
```css
.button-Link {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    padding: 5px 10px;
    text-decoration: none;
}
```
