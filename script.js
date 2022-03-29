let s = prompt("Enter A Number");
function isEvenOrOdd(n){
  n = s;
  if(n % 2 == 0){
    return document.writeln(n, " ", "Is Even");
  } else {
      return document.writeln(n, " ", "Is Odd");
  }
}
isEvenOrOdd();