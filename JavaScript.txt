JavaScript

# let vs Var
	let cannot be re declared, var can be redeclared.
	let a = 100;
	let a =200; (Not allowed)
	var a=100;
	var a=200; (Allowed)

	#scope of let is block level and global if declared in global level
	#scope of var is global level and function level(if declared inside a function then its limited to function level)

# const is same as let and used to store constant value which cannot be changed hence cannot be reinitialised.


# Arrays
	let arr = [10,20,30]
	# arr.length ==> return the no. of elements in the array
	# arr.push(70) ==> Will add an element to the array at the end.
	# arr.pop() ==> remove the last element from the array.
	# arr.unshift(5) ==> Will add the element at the begining
	# arr.shift() ==> will remove the element from first
	# arr.indexOf(100) ==> returns the first occurance index of the element , if no occurence then returns -1
	# arr.includes(100) ==> returns true if the element is present in the array
	# arr.slice(2,5) ==> retruns the elements from index 2 to index 4 (excluding the end index)
	# arr.sort((a,b)=>a-b) ==> will sort the array in ascendening order.
	# arr.sort((a,b)=>b-a) ==> will sort the array in descending order.
	# arr.reverse() ==> reverse the array
	# arr.filter(e=>e%2==0)  ==> This will iterate the array and filter the even numbers and return the array with even numbers


# Strings
let str = "hello world";

	# str.length ==> returns the length
	# str.slice(0,3) ==> substring from start to en index (end index excluded)
	# str.split(' ') ==> splits the string into array based on the delimiter
	# str.trim() ==> removes white spaces from start and end
	# str.indexOf('w') ==> retruns the index of first occurence of the sub string
	# str.indexOf('w',3) ==> start the search from 3rd index and then return the first occurance.
	# 


# conversion 
	# parseInt(str) ==> String to number
	let a= 100;
	# a.toString() ==> number to string


#functions

	# normal function 
	function add(a,b){
		return a+b;
	}
	add(10,20)

	#anonymous function
	let sum = function(a,b){
		return a+b;
	}
	sum(10,20)

	#lambda function
	let sum = (a,b)=>{
	return a+b
	}
	sum(10,20)

	#nested function
	function sumSquares(a,b)
	{
		function square(a)
		{
			return a*a;
		}
		return square(a)+square(b);
	}
	==> sqaure() function can only be accessed inside the sumSquare()

	#difference between normal function and anonymous function is that we can write the normal function anywhere(after or before) calling the function in the file,
	where as anonymous functions needs to written first (top) and then only calls can be made else compiler will not find the function if the call is written before the declaration.

	#Callback function ==> functions that are passed as an argument to another function.
		let printInfo = (a,b,func)=>{
	    return func(a,b);
			}

		let printSum=(a,b)=>{
		 console.log(a+b)
		}
		==>Here we are passing the printSum() as argument ot printInfo()
		printInfo(10,20,printSum);


		==> Here we are passing the function defination directly
		printInfo(20,30,()=>{
		    console.log(20*30);
		})


# objects is collection of properties
	let person = {
		fName:"Suro",
		lName:"Sarkar"
	}
	# console.log(person.fName); ==> access the property using .
	# console.log(person[lName]); ==> access the property using square brackets.
	# person.gender="Male"; ==> This will add the gender property to the object
	# delete person.gender ; ==> This will delete the property from person object;
	# console.log('gender' in person ) ==> This will return true if the gender property exists in the person object
	# iterate the keys and values
		for(let key in person)
		{
			console.log("Key is "+key +" and value is "+person[key]);
		}
	# property can also be a anonymous function
		let person = {
		fName:"Suro",
		lName:"Sarkar",
		fullName: function(){
			this.fName+" "+this,lName

			}
		}
		console.log(person.fullName());

# class
	class Person{
		age = 25;
	}
	let person = new Person();//Creating object of class
	console.log(person.age);

	#class Person{
		age = 25;
		get location()
		{
			return "India"
		}
	} 
		==> This is another way to define a property of the class. get keyword is getter method .
		console.log(person.location);
	# constructor
		class Person{

		let fName;
		let lName;

		constructor(firstName,lastName)
			this.fName= firstName;
			this.lName=lastName;

			}
		}
		let p1 = new Person("Suro","Sarkar");

	# accesing the class in other files => we need to export the class
		export.modules = class Person{

		}
		In the file where we want to access we need to import the class
		const Person = require("./Person.js");
		// Now we can use the class and create objects
		let p = new Person("Amit","Jain");


# INHERITENCE
	# extends keyword helps to inherit a class
	class Parent
	{

	}
	class Child extends Parent{

	}

	# super keywrod can be used to call the parent class construct. (Same rules like Java)



# PROMISES
	# a promise is a good way to handle async operations. It is used to find out if the async operation is successfully completed or not.
		Promise has 3 states = Pending, Resolved , Rejected

	# if the promise is resolved then its value can be yeilded in THEN block
	# if the promise is rejected then it cna be caught in the CATCH block

	# a simple promise example
	const ticket = new Promise((resolve,reject)=>{
	const isBoarded = true;
		if(isBoarded)
		{
			resolve("Congrats you boarded the flight")
		}
		else{
			reject("Opps we are sorry..")
		}
	})

# Export and import
	# import a method form another file
		1. the method in the file should be exported.
			export function m1(){

			}
		2. import the method in the file we want to use
			import {m1} from './{filename}'

	# we can alias the imported function
			import {m1 as myFunc} from './{filepath}'
				Now we can all the function using the alias
				myfunc();

	# export multiple functions and also alias them
		at the end in the file export all the methods as below
		export {
				m1 as myM1,
				m2 as myM2
		}

		Now while importing we have use the alias name as its exported as an alias.
		import {myM1,myM2} form './myfunctions.js'

	# if we want ot import all the methods
		import * as utility form './myfunctions.js';

		utility.myM1();
		utility.myM2();

	# default export
		we can mark only one function in the file as default export
			export default m1()
			{

			}
		While importing we dont need to use {} for defualt functions
		import m1 from './myfunctions.js';




# EXCEPTION Handling
	# same as java
	try{

	}catch(err)
	{
		console.log(err.name)
		console.log(err.message)
	}

	# throw is used to throw the exception
	try{
		throw new Error("Throwing error")
	}catch(err)
	{

	}

	# finally is executed always
	try{

	}catch(err)
	{

	}
	finally{
	
	}





















