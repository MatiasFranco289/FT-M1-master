'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array.pop();//Saco el ultimo elemento del array porque lo voy a usar como pivote
  let leftArr = [], rightArr = [];

  //Meto los elementos menor al pivote en una variable leftArr y los que son mayores o iguales en otra variable rightArr
  for(let f=0;f<array.length;f++){
    if(array[f] < pivot){
      leftArr.push(array[f]);
    }
    else{
      rightArr.push(array[f]);
    }
  }

 if(leftArr.length > 1) leftArr = quickSort(leftArr);
 if(rightArr.length > 1) rightArr = quickSort(rightArr);

 leftArr.push(pivot);
 return leftArr.concat(rightArr);
}

function mergeSort(array, profundidad = 0) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr1 = [], arr2 = [];
  let middleIndex = 0;
  // console.log('input: '+array);
  if(array.length > 1){//Va dividiendo el array en mitades y aplicando recursion mientras que el array tenga mas de un elemento
    middleIndex = Math.round(array.length/2);//Index mitad del array

    profundidad++;
    arr1=mergeSort(array.splice(middleIndex,array.length-middleIndex),profundidad);
    arr2=mergeSort(array,profundidad);

    // console.log('Profundidad: '+profundidad);
    // console.log('Recido: '+arr1);
    // console.log('Recibido: '+arr2);

    let sortedArr = MergeAndSort(arr1,arr2);

    // console.log('Retornando ordenado: '+sortedArr);
    if(profundidad === 1 ){console.log('Final result: '+sortedArr);}
    return sortedArr;
  }
  else{
    // console.log('Profunidad: '+profundidad);
    // console.log('Retornando: '+array);
    return array;
  }


    function MergeAndSort(arr1,arr2) {//Puse esto porque el .sort del js da mal, es un bubble sort
      let arr = arr1.concat(arr2);
      var len = arr.length;
  
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){
         if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
         }
       }
      }
      return arr;
    }
  

}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
