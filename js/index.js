function fib(n){
  if (n <= 1) return 1;
  
  return fib(n - 1) + fib(n - 2);
}
var n = Number(prompt('Input n'));
var result = fib(n);
document.write(result);