var Person={name:"Arun", email:"arun@gmail.com", phone:"1234",display:function(){console.log(this.name)}}
for(x in Person){
    // console.log(x)
    // console.log(person[x])
    console.log(Person.display())
}

//add extra method and properties
Person.dob="20-01-2000"
Person.displayemail=function(){
    console.log(this.email)
    }
console.log(Person)