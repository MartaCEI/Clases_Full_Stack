# Clase 1

## Como funciona internet
El cloud es un monton de racks con muchos ordenadores.
De nuestro ordanador al router y del router al servidor DNS (Guarda los nombres de los dominios y la direccion IP). Se busca el domino en el más cercano al nuestro, sino la encuantra, pregunta a otro y actializa su tabla de dominios. Pra que la proxima vez que le preguntemos ya tiene el domino y la IP guardados. 
Tambien tiene un  servidor que contiene páginas web en carpetas con el código fuente. Entonces yo me traigo una copia en mi ordenador y el ordenador lee la info y la interpreta en nuestro buscador. 

## Node.JS
Con node.js y javaScript podemos utilizar el mismo lenguaje tanto para front como para back. 
- Front: La lógica que tiene que hacer nuestra compu para morstrar la página web. 
- Back: funciones para traen cosas de nuestro servidor como DDBB y el código que tiene que ejecutar nestra máquina. 



# Clase 2

## Readme.md (Marckdown)
Markdown cheat sheet: Para ver un resumen de como se escribe y se lee los archivos readme.md. https://es.scribd.com/doc/234715992/ThemeSpectre-Markdown-CheatSheet
Ejemplos: ##, ´´´bash ... ´´´ (importante), ´´´html ... ´´´ (para lenguaje html), etc...
![imagen del chaet sheet](image.png)

Lista: 
- item 1
- item 2
- item 3

Bloque: 

> soy un texto
> en el bloque
> y estoy resaltado

**Italic** y ` Negrita `

La **función flecha** se escribe así `() => {}`



# Clase 3 

## Terminal

```bash
ls (Lista carpetas)
dir (directorio)
mkdir nombre (crear carpeta nueva)

## crear archivos
- mac:  touch nombre
- windows type nul > nombre-archivo 

## mobimiento carpetas 
cd nombre-carpeta (acceder a un direct
orio)
cd . (misma carpeta)
cd.. (carpeta anterior)
cd / (raiz de nuestro sistema disco c:\) C:
```

## Buscar en visualStudio

```bash
command + p (mac)
ctrl + p (win)
+
> (para acceder a la parte de buscar)
+ 
keyboard shorchuts (abreviaciones de teclado)
```

## Que es node?
Node.js es un entorno de ejecucion de javaSript que permite ejecutar código en el servidor (backend). 

`NOTA: Para repetir código en la consola se usan las flechitas para arriba o para abajo`

```bash
1. Bajar Node.js de la página principal ([nodejs.org](https://nodejs.org/en))
# ver la version que teneos
node -v

# Ejecutar un archivo js
node dia_3/mi.archivo.js
o (dependiendo en donde estemos en las carpetas posicionados)
node mi.archivo.js
```

## Que es NPM o BUN?

- Para instalar BUN: https://bun.sh/
powershell -c "irm bun.sh/install.ps1 | iex"
Entonces en vez de utilizar NPM en la consola, se usa BUN

- NODE PACAGE MANAGER (NPM)
es el administrador de paquetes que viene por defecto en node. 
- Paquetes (Modules): Los paquetes son módulos que se pueden instalar y usar en nuestros proyectos. Por Ejemplo: express, axios, nodemon, chalk, etc. Son conjuntos de funciones que se pueden utilizar y hacen cosas por si solos ya que alguien ya los ha crado. 
Paquetes de npm: https://www.npmjs.com/ (Cowsay para empezar)


```bash
Ejemplo:
https://www.npmjs.com/package/cowsay
1. npm i cowsay
2.  Para que los módulos no se pasen por github para que git no tenga tanta información. 
Crear archivo .gitignore en la raiz de la carpeta y escribir dentro node_modules. 
3. Al crear este archivo, se nos ha creado el package.json y el package-lock.json y los borramos los dos. 
4. Para inicializar el programa ponemos: `NPM init`: 
- package name: mi-primer-proyecto
- version: enter
- description: Estoy haciendo una prueba
- enter point: enter
enter... hasta el final
Esto nos crea el package.json con los parametros de nuestro proyecto (Es la configuracion de nuestro proyecto)
NOTA: Las Dependencias y devDependencies son los más importantes . 
5. Elimino todas las dependencias y volvemos a intalar cowsay. 
npm i
npm i cowsay
(me instala las dependencia necesarioas para que mi archivo funciones, como yo le he quitado todas las dependecias me instalará solo las necesarias)
```


CLASE 3 hora 1:24

