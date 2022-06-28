'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let result = [1];

  do{
    var posiblesDivisores = [];

    for(let f=num;f>0;f--){
      if(num%f===0 && isPrime(f)) posiblesDivisores.push(f);//Si num es divisible por f y es primo lo agrega a la lista de divisible
    }

    let minimoDivisor = posiblesDivisores[posiblesDivisores.length-2];
    result.push(minimoDivisor);
    num/=minimoDivisor;
    console.log('divs:'+posiblesDivisores);
  }while(posiblesDivisores.length>1);

  result.pop();
  return result;


  function isPrime(num){
    for(let f=2;f<num;f++){
      if(num%f===0){return false;}
    }

    return true;
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  do{
    var flag1 = false;

    for(let f=0;f<array.length-1;f++){
      if(array[f]>array[f+1]){
        [array[f],array[f+1]] = [array[f+1],array[f]];
        flag1 = true;
      } 
    }
  }while(flag1);

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let f=0;f<array.length-1;f++){
    if(array[f] > array[f+1]){
      let removedElement = array.splice((f+1),1)[0];

      for(let f1=0;f1<array.length;f1++){
        if(removedElement < array[f1]){
          array.splice(f1,0,removedElement);
          break;
        }
      }
    }
  }

  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let sortedList=[];

  do{
    let minValue = Infinity;

    for(let f=0;f<array.length;f++){
      if(array[f] < minValue){
        minValue = array[f];
      }
    }

    let index = array.indexOf(minValue);
    sortedList.push(array[index]);
    array.splice(index, 1);
  }while(array.length>0);

  return sortedList;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
