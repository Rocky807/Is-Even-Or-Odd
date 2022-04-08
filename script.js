let s = prompt("Enter A Number");
function isEvenOrOdd(n){
  n = s;
  if(n % 2 == 0){
    document.writeln(n, " ", "Is Even");
  } else {
    document.writeln(n, " ", "Is Odd");
  }
}
isEvenOrOdd();