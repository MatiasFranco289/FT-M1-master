"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso,
   buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  class LinkedList{
    constructor(){
      this.head = null;
      this._length = 0;
    }

    add(value){
      let node = new Node(value);
      let currentNode = this.head;//Esto es igual a head porque en head deberia almacenarse siempre el primer nodo

      if(!currentNode){//Si head es null, nunca entro por lo tantno la lista esta vacia y podes poner el valor de una
        this.head = node;//Guardo el nuevo y primer nodo en header
        this._length++;
        return node;//Esto no es necasario, lo pongo solo pa retornar algo y que termine aca
      }

      //Si llego hasta aca es porque el header ya contenia un nodo
      while(currentNode.next){//Mientras que el siguiente nodo contenga algo
        currentNode = currentNode.next;//Me voy moviendo al siguiente nodo
      }
      //Cuando llegue aca es porque el nodo siguiente esta vacio, si es la segunda vez que entra esto sera la propiedad next del propio head porque la vez anterior
      //Asignamos el primer nodo que creamos a head pero ese nodo todavia tiene su propiedad next en null
      currentNode.next = node;
      this._length++;
      return node;
    }

    remove(){
      if(!this.head) return null;//Si head es null la lista esta vacia por lo tanto retorna null
      
      let current = this.head;

      if(!current.next){//Si el nodo del header no tiene un next la lista solo tiene un nodo
        let val = current.value;
        this.head = null;
        return val;
      }

      while(current.next.next){//Mientras que el nodo siguiente del siguiente exista 
        current = current.next;//Avanzo al siguiente nodo
      }

      let val = current.next.value;
      current.next = null;
      return val;
    }

    search(arg){
      if(!this.head) return null;//No hay head, la lista esta vacia, retorna null
      let current = this.head;
      if(typeof(arg)!=='function'){

        while(current.value!=arg && current.next){//Iterara mientras el valor del current node no coincida con lo pedido y exista un nodo siguiente
          current = current.next;
        }
        //Aca puedo haber salido del bucle por dos razones, o ya no hay mas nodos o encontro el resultado
        //Asi que uso un if aca abajo para verificar por cual de las dos razones y luego deuelvo o bien el nodo o bien null
        return current.value==arg?current.value:null;
      }

      
      while(!arg(current.value) && current.next){//Mientras que el valor del nodo actual devuelva falso al ser enviado al callback y exista uns siguiente nodo iteramos
        current = current.next;
      }

      return arg(current.value)?current.value:null;
    }
  }

  return new LinkedList;
}


function Node(value) {
  this.value = value;
  this.next = null;
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde 
guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la 
clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input 
  (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la 
  que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, 
invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  class HashTable{
    constructor(){
      this.numBuckets = 35;
      this.buckets = [];
    }

    hash(arg1){
      var sumCharacter = 0;

      for(let f=0;f<arg1.length;f++){
        sumCharacter += arg1.charCodeAt(f);
      }

      return sumCharacter%this.numBuckets;
    }

    set(key, value){
      if(typeof(key)!=='string'){throw new TypeError('Keys must be strings');}

      var hashedKey = this.hash(key);//Hasheo la clave que recibi

      if(!this.buckets[hashedKey]){//Si la posicion en el array resultante del hash esta vacia
        this.buckets[hashedKey] = {};//Creo un objeto vacio en la posicion
      }

      this.buckets[hashedKey][key] = value;
    }

    get(key){
      return this.buckets[this.hash(key)][key];
    }

    hasKey(key){
      return this.buckets[this.hash(key)][key]!=null;
    }
  }

  return new HashTable;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
