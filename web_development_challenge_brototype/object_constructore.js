function Person(name, age,place){
    this.name = name;
    this.age = age;
    this.place = place;
    this.displayPerson = function(){
            console.log("Name:"+this.name+" age:"+this.age+" place:"+this.place);
        }
}

var arun=new Person("arun",24,"pkd");
var david=new Person("david",34,"tsr");

arun.displayPerson();
david.displayPerson();