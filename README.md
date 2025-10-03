# REPASO_DWA

- Para ajuste de línea Alt+Z

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Esta etiqueta <meta> es indispensable si vamos a crear una web responsive

Etiquetas semánticas

<nav></nav> -> contendrá el menú de mi web

Crear comentario dentro del código -> CTRL+Ç

Mover línea de código -> Alt + Flechas

1rem=16px

Dentro de cada <div> vamos a añadir un <img> y en el mismo nivel otro <div> y dentro de este un <h3> y un <p>

- Modelo de cajas HTML y CSS

Todos los elementos de HTML son cajas y estas tienen diferentes propiedades como padding, border y margin (contando desde dentro hacia fuera de la caja) 

- Selectores combinados de CSS:

header > p -> selecciona todos los elementos p que son hijos directos de header

header p -> selecciona todos los p que son hijos de un header a cualquier nivel (puede haber un p dentro de un div)

## Variables de CSS:

Las declaramos al principio del archivo de CSS en la pseudo-clase :root {}, los nombres deben de comenzar con --nombre-de-variable

Llamamos o invocamos con la función var (--valor)

Las variables pueden contener cualquier valor (colores, tamaños, etc...)

## Pseudo-clases

div:first-child
div:last-child
div:nth-child(5)

## Flexbox

CSS-TRICKS -> CSS Flexbox Layout Guide -> https://css-tricks.com/snippets/css/a-guide-to-flexbox/

El flex-direction tiene como valor default -> row

## JAVASCRIPT

Es un lenguaje de programación, el más usado en el mundo. Es el único lenguaje de programación que funciona en la parte del cliente (front-end). 

Y también es el único lenguaje de programación que entiende el navegador web, que es por otro lado, el que ejecuta el código de JS.

Tenemos varias formas de cargar código de JS en nuestra web (dentro de los archivos de HTML).

- Dentro del <head></head> del HTML.
- Dentro del <body></body>, justo antes de que se cierre la segunda etiqueta.

Podemos cargar en nuestra web archivos propios de JS o archivos externos online.

Cuando escribimos código de JS, al final de cada línea debemos añadir un punto y coma (;).

VARIABLES DE JS:

Son entidades que me permiten guardar valores. Tenemos tres tipos:

- var
- let
- const

En var y let guardamos valores y los podemos modificar. En const podemos guardar un valor, pero no se puede modificar una vez asignado.

Cuando declaramos una variable por primera vez, debemos usar antes la palabra let (o var o const).
Cuando llamamos a esa variable para usar el valor que guarda, solo escribimos su nombre.

TIPOS DE DATOS JS:

- Texto (string) -> texto (letras), números o símbolos especiales, pero siempre dentro de comillas. Las comillas pueden ser dobles o simples. Los espacios también se consideran caracteres.

- Números (number) -> números sin comillas. Para los números decimales se usa un punto. 

Con estos números podemos realizar distintas operaciones:

- Suma -> +
- Resta -> -
- Multiplicación -> *
- División -> /
- Módulo (el resto de una división) -> %

- Mayor que... -> (>)
- Menor que... -> (<)
- Mayor o igual que... -> (>=)
- Menor o igual que... -> (<=)
- Igual que... -> ==
- Totalmente igual que... -> === (es más estricto y se recomienda su uso para evitar errores)

Estas operaciones dan como resultado un tipo de dato especial que se llama boolean (true o false).

- Boolean (bool) -> true o false
- Arrays (lista) -> se trata de un tipo de dato complejo que me permite guardar una lista o colección de otros tipos de datos. Estos pueden ser todos de un mismo tipo o de diferentes tipos. -> []
- Objeto (object) -> es un tipo de dato complejo que me permite guardar de forma ordenada (clave: valor) y acceder a estos datos una vez declarados.
- null y undefined

JavaScript empieza a contar desde el 0.

## FUNCIONES DE JAVASCRIPT

Las funciones o métodos son un conjunto de líneas de código que cumplen un trabajo determinado.

Las funciones trabajan como una "caja negra" cuando son funciones ya definidas en el "core" del lenguaje, pero también tenemos la posibilidad de definir nuestras propias funciones.

Por eso podemos decir que tenemos 2 tipos de funciones:

- Las funciones de JS ya definidas dentro del propio código interno del lenguaje, las cuales nosotros podremos llamar y usar. Por ejemplo, las funciones alert() y log () son funciones de este tipo que se conocen como built-in.

- Las funciones que nosotros mismos definimos en nuestro código. JS nos permite definir tantas funciones como queramos y usarlas tantas veces como necesitemos.

Estas funciones se declaran (crean) una sola vez en nuestro código y luego las podemos usar tantas veces como queramos. Para crear y usar una función propia vamos a seguir estos pasos:

1. Declaramos la función propia con la palabra reservada: function

2. Le damos un nombre a esta nueva función. El nombre lo decidimos nosotros y debe representar de forma clara el trabajo que lleva a cabo dicha función. El nombre de esta función incluye al final (y pegado) unos paréntesis. Detrás de los parentésis abrimos unas llaves {}

3. Dentro de las llaves escribiremos el código interno de la función.

4. Cuando queramos usar la función la llamaremos o invocaremos por su nombre.

Los datos pueden entrar dentro de una función como parámetros en los paréntesis. Los parámetros se introducen en la función en el momento de la llamada.

## WEBS

- Referencias e inspiración (enfocado más a smartphone) -> Mobbin

- CSS Gradient

- Iconos -> Font Awesome, Boxicons y Heroicons

- JavaScript -> Three.js