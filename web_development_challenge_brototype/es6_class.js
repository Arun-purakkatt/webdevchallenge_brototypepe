class Hello{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    hello(num3,num4){
        console.log(num3+num4);
        console.log(this.num1+this.num2);
}
}

let hey = new Hello(10,20);
hey.hello(30,20);

//inheritance

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(){
        super();
        
        

    }
    greet(){
        super.greet();
        
        console.log(`My name is ${this.name}`);
    }

}
let person=new Person("John", "23");

person.greet();


