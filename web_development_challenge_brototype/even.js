for (i=2;i<=100;i=i+2){
    console.log(i);
}

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

function hello(num1,num2){
    var v=num1-num2;
    console.log(num1+num2);
    console.log("hello");
    return v
}
hello(9,6);
console.log(hello(9,6));