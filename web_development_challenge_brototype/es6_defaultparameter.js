function hello(num1,num2) {
    console.log(num1+num2);
}

hello(10,20)

function how(num1=100,num2){
    console.log(num1+num2);
}
how(undefined,100)