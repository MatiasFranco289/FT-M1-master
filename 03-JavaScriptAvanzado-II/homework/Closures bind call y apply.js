//CLOSURES
function saludar(saludo){
    return function name(nombre){
        console.log(saludo+' '+nombre);
    }
}

var saludarHola = saludar('Hola');//Aca se guarda la funcion anonima 'name'
//Pero name retorna la variable 'saludo' que se encontraba en saludar() que ya a sido
//eliminada porque ya a cumplido su funcion de retonar
//entonces las CLOSURES lo que hacen es guardan una referencia de la variable saludo
//para que podamos usarlo mas adelante

/////////////////////////////////////////////////////////////
//METODO BIND

//El metodo bind nos permite cambiar hacia donde apunta el this

var persona={
    nombre:'Guille',
    apellido:'Aszyn',
}

var logNombre= function(){
    console.log(this.nombre);
}

logNombre.bind(persona)();
//Gracias a esto al usar this en logNombre apunta al objeto
//persona en lugar de a global y asi podemos obtener el nombre.




///////////////////////////////
function multiplica(a,b){
    console.log(a*b);
}

var multiplicaPorDos = multiplica.bind(this, 3);//El 3 se bindea al primer parametro (a)
multiplicaPorDos(5);//Ahora podemos llamar a Multiplica por dos usando un solo parametro
multiplicaPorDos(2,5);//Si le pasamos dos parametros de todas formas NO sobreescribiremos el bindeo que hicimos anteriormente

///////////////////////////////////////

var persona1 = {
    nombre: 'Guille',
    apellido: 'Aszyn',
}

var persona2 = {
    nombre: 'Martin',
    apellido: 'Juncos',
}

var persona3 = {
    nombre: 'Clau',
    apellido: 'Zini',
}

var logNombre = function(arg1, arg2){
    console.log(arg1+' '+arg2);
}

logNombre.bind(persona1, 'Hola',', Como estas')();//Metodo bind
logNombre.bind(persona1, 'Hola',', Como estas')();//Metodo call, es igual al bind pero llama a la funcion automaticamente
logNombre.apply(persona1,['Hola','Como estas'])//Metodo apply, es igual a call pero tiene una sintaxis diferente

