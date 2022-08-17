// //******** Program1 : to use Call method ********
// // Approach 1 : without using call

var name={
    firstName : "Dipesh",
    lastName : "Kala",
    fullName : function(){
        return this.firstName + " " + this.lastName
    }

    
}
console.log("My Full Name is :" + name.fullName());
// Approach 2 : with using call
var person ={
    fullName : function(){
    return    this.firstName + " "  +this.lastName  
    }
}

var person2 ={
    firstName : "Avneet",
    lastName : "Agarwal"
}
var person3 ={
    firstName : "Aditi",
    lastName : "sekra"
}

console.log("Friend's name:" + person.fullName.call(person2))
console.log("Friend's name:" + person.fullName.call(person3))

// // Approach 3 : using Apply method 

var person ={
    fullName : function(){
    return    this.firstName + " "  +this.lastName  
    }
}

var person3 ={
    firstName : "Yukti",
    lastName : "chaudhary"
}
var person4 ={
    firstName : "Nitisha",
    lastName : "chaudhary"
}

// console.log("Friend's name: using Apply Method" + " " +person.fullName.call(person3))
// console.log("Friend's name: using Apply Method" + " " +person.fullName.call(person4))

// // *************** PROGRAM 2 :   Write a Program to create an array having cube root of every element of another array.
//    // var numbers = [8,27,64,125,216];    ***************

   var numbers =[8,27,64,125,216]
   var mapped = numbers.map(i=>i**3)
   console.log(" Cube Rooted Resultant Array: " + mapped); 
   // *************** PROGRAM 3 :Write a Program to call a function in an interval of 3 sec for 5 times.*************

   var printing = setInterval(()=>console.log("Hello Dipesh"),3000);
   setTimeout(()=>{console.log("Stopped")+ clearInterval(printing)},15000);

// ******* Write a Program to iterate an Array of Objects using map function.*********

var people = [
  { name: "Ashish", age: 23 },
  { name: "Ajay", age: 21 },
  { name: "Arvind", age: 26 },
  { name: "Mahesh", age: 28 },
  { name: "Jay", age: 19 }



]
var result = people.map(item=>{
    var content ={}
    content.UserName= item.name;
    content.Userage= item.age;
    return content;

});
console.log(result);

// ********* Program5 :  Write a Program to Filter out people whose age is less than 25 in descending order.  

var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 30 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 },
];
console.log("Names Before Filtering are: Ashish 23, Ajay 21, Arvind 26, Mahesh 28, Jay 19" );
console.log('Names After Filtering are:');

var filtered = people.filter((people) => people.age < 25);
console.log(filtered);
var fullName = filtered.map((u) => 
(
    console.log(u.name+ " "+ u.age)
))