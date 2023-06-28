var r=require('readline-sync')


var num1=r.question('Enter first number:')
var num2=r.question('Enter second number:')

if (num1>num2) {
    console.log(num1+' is greater than '+num2)
}else if (num1<num2) {
    console.log(num2+' is greater than '+num1)
    }else {
        console.log(num1+' and '+num2+' are equal')
            }