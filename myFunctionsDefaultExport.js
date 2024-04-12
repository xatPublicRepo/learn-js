function method1()
{
    console.log("I am method 1");
}
export default function method2()
{
    console.log("I am method 2");
}
function method3()
{
    console.log("I am method 3");
}

export{
    method1 as myM11,
    method3 as myM33,

}