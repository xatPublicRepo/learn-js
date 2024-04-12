let a =10;
console.log(typeof a);
a= "hello";
console.log(typeof a);
a=true;
console.log(typeof a);
a = [1,3,4]
console.log(typeof a);

//Call back function
let printInfo = (a,b,func)=>{
    return func(a,b);
}

let printSum=(a,b)=>{
 console.log(a+b)
}

printInfo(10,20,printSum);



printInfo(20,30,()=>{
    console.log(20*30);
})

//Promise
const ticket = new Promise((resolve,reject)=>{
	const isBoarded = false;
		if(isBoarded)
		{
			resolve("Congrats you boarded the flight")
		}
		else{
			reject("Opps we are sorry..")
		}
	})

    ticket.then(d=>{
        console.log(d)
    }).catch(d=>{
        console.log(d)
    }).finally(()=>{
        console.log("thank you.")
    })

    // impport all methods and alias them
    import { method1 as m1,method2 as m2,method3 as m3 } from "./myFunctions.js";
    m1();
    m2();
    m3();

    //import all methods as exported by alias
    import { myM1,myM2,myM3 } from "./myFunctionsMultiExport.js";
    myM1();
    myM2();
    myM3();

    //import default method
    import method2 , {myM11,myM33} from "./myFunctionsDefaultExport.js";
    method2();
    myM11();
    myM33();

    //import all methods from the file
    import * as allMethods from "./myFunctionsMultiExport.js";
    allMethods.myM1();
    allMethods.myM2();
    allMethods.myM3();