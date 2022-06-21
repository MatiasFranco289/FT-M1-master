
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Si se usa var se trata de una declaracion de variable, si no se usa var se trata simplemente de una asignacion y se comenzara a buscar la variable en contextos superiores hasta
o bien encontrarla y modificarla o bien si no la encuntra, crearla.Esto puede dar lugar a problemas como sobreescribir alguna variable o querer acceder a una variable en el
contexto erroneo.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;//b=8
    console.log(b);//8
    b = c;//b=10
    var x = 5;
  }
  f(a,b,c);//8,9,10
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1

-Primero se ejecuta c(8,9,10)
-Se imprime x que al existir en el contexto actual vale 10.
-Se imprime a, que fue pasado como parametro a la funcion y vale 8.
-Dentro de la funcion c, se ejecuta la funcion f y se le pasan los parametros a,b,c que son los mismos que fueron pasado a la funcion c (8,9,10)
-Se le asigna a la variable b que le fue pasada el valor de a es decir b=8.
-Se imprime b(8).
-Ahora b=c por lo tanto b ahora vale 10.
-Se declara una nueva variable local llamada x cuyo valor es 5 pero nunca es usada.
-Se imprime b, como este console.log esta fuera de la funcion f el valor que se imprimira sera el de la b de la funcion f cuyo valor no cambio, es decir 9.
-Se vuelve a imprimir b pero esta vez en el contexto global, es decir su valor es 10.
-Se imprime x en el contexto global y su valor es 1.
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

-Se imprime bar cuyo valor es undefined porque el hoisting permite que la variable sea reconocida pero no su valor.
-Se imprime baz que da un error porque al no usar "var" nunca la declaramos solo hicimos una asignacion de valor.
-Se ejecuta foo(); y se imprime "Hola".
```


```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

-Se imprime instructor cuyo valor es "Tony".
-Se corre la funcion que tiene un if que es true, por lo tanto entra y crea una nueva variable local Instructor cuyo valor es "Franco".
-Se imprime la variable local instructor cuyo valor es "Franco".
-Se vuelve a imprimir instructor pero esta vez en el contexto gloval por lo que su valor es "Tony";

```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

-Se declara una variable dentro de un if cuyo nombre es "instructor" y contiene "The flash" pero como esta ya existia dentro del mismo contexto se sobreescribe su contenido anterior que era "Tony".
-Se crea otra variable dentro del msimo if cuyo nombre es "pm" y contiene "Reverse flash", pero al se declarada con 'let', solo sera valida dentro del bloque de codigo if.
-Se primen estas dos variables dando como output "The flash" y "The reverse flash". 
-Ahora se imprime la variable global instructor cuyo valor es "Tony" y pm cuyo valor global es "Franco".
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //Esto se ejecuta como una division normal y da 2, js transforma el string en un entero automaticamente.
"2" * "3"//Lo mismo, se ejecuta como la operacion normal y da 6
4 + 5 + "px"//El resultado es 9px, js primero suma los dos enteros y luego concatena px, el resultado es un string
"$" + 4 + 5//El resultado es $45, en este caso se concatenan todos los elementos en lugar de sumarse, si 4 y 5 se escriben entre () si son sumados.
"4" - 2//El resultado es 2, como una resta normal
"4px" - 2//El resultado es NaN, al contener caracteres no numericos no es posible realizar una operacion entre un string y un entero
7 / 0//El resultado es infinito, no se puede dividir por 0
{}[0]//El resultado es siempre el numero entre corchetes.
parseInt("09")//El resultado es 9, al transformarse en entero el 0 de adelante se borra.
5 && 2 //Esto devuelve 2, devuelve el primer valor falso en caso de que exista porque si en un AND existe algun valor false este devolvera false, si no hay valor falso como en este caso devuelve el ultimo valor.
2 && 5//Devuelve 5 porque es el ultimo valor y no hay valor 0
5 || 0//Devuelve 0 porque es un valor falso.
0 || 5//Devuelve 0 porque es equivalente a false.
[3]+[3]-[10]//Devuelve 3310, la concatenacion de elementos, cada elemento es tomado como un string
3>2>1//Devuelve false porque 3>2 es true pero true no es mayor a 1, es igual
[] == ![]//Esto devuelve false, son dos arrays que contienen lo mismo pero son DIFERENTES arrays, son como dos tazas que pueden verse igual pero no son las mismas de todas formas.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/*
El output sera:
-Undefined porque el hoisting reconoce la variable pero la asignacion de valor.
-2, porque el hoisting reconoce la funcion foo escrita abajo.
*/

```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

/*
El output sera undefined, aunque la funcion getFood() es llamada con un false y no deberia entrar en el if, cuando llega al return snack, busca si existe una declaracion dentro
del mismo contexto y si existe en el if, pero como el hoisting no funciona no funciona con el contenido de una variable devuelve undefined.
*/
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Retorna "Aurelio De Rosa" porque en este caso this esta apuntando al objeto prop que es su padre.

var test = obj.prop.getFullname;//Se guarda la function getFullName(); en una variable

console.log(test());//Retorna la variable global fullname porque al guardar la funcion getFullname en la variable test, al ejecutarla ahora estamos corriendo la funcion
//En el contexto global
/*

*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
El orden seria 1,4,3,2.
Primero se imprimirian 1 y 4 porque pasan al stack de ejecucion directamente.
3 pasa a resolverse en segundo plano y tiene que esperar que se terminen de imprimir 1 y 4.
Una vez que transcurrio el segundo de espera, pasa a ejecutarse la funcion que imprimiria el 2.
