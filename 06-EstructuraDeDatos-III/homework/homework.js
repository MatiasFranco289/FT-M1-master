"use strict";



/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(newVal){
  if(newVal > this.value){
    if(this.right){
      this.right.insert(newVal);
    }
    else{
      this.right = new BinarySearchTree(newVal);
    }
  }
  else{
    if(this.left){
      this.left.insert(newVal);
    }
    else{
      this.left = new BinarySearchTree(newVal);
    }
  }
}

BinarySearchTree.prototype.size = function(){
  let total = 1;

  if(this.left) total += this.left.size();
  if(this.right) total += this.right.size();

  return total;
}

BinarySearchTree.prototype.contains = function(val){
  if(this.value===val){return true;}

  if(val > this.value){
    if(this.right) return this.right.contains(val);
  }
  else{
    if(this.left) return this.left.contains(val);
  }

  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, arg1){

  switch(arg1){
    case 'post-order':
     if(this.left){this.left.depthFirstForEach(cb, arg1)}
     if(this.right){this.right.depthFirstForEach(cb, arg1)}
     cb(this.value);
    break;
      case 'pre-order':
        cb(this.value);
        if(this.left) this.left.depthFirstForEach(cb,arg1);
        if(this.right) this.right.depthFirstForEach(cb,arg1);
        break;
      default:
        //IN-ORDER
        if(this.left){this.left.depthFirstForEach(cb,arg1)};
        cb(this.value,arg1);
        if(this.right){this.right.depthFirstForEach(cb,arg1)};
      break;
  }

}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, leafList=[]){
  if(this.left) leafList.push(this.left);
  if(this.right) leafList.push(this.right);
  
  cb(this.value);

  if(leafList.length>0) leafList.shift().breadthFirstForEach(cb, leafList);
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
