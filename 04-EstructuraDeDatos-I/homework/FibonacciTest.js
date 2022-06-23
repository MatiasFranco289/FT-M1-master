function nFibonacci(n) {
    if(n<=1){
      return n;
    }
    return nFibonacci(n-1)+nFibonacci(n-2);
  }
  
  console.log(nFibonacci(6));