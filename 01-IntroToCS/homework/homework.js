'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result=0;

  for(let f=0;f<num.length;f++){
    if(num[f]==0){continue;}
    result+=Math.pow(num[f]*2,num.length-1-f);
    
  }

  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binaryList=[];

  while(num!=0){
    binaryList.unshift(num%2);
    num=parseInt(num/2);
  }

  return binaryList.join('');
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}