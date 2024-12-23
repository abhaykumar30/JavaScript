let mySym = Symbol("Kye1");
let obj = {
    [mySym]: "myKey1"
}
console.log(obj[mySym]);



const obj2 = {
    1:"a",
    2:"b",
    3:"c",
    null:"d",
    undefined:"e",
    NaN:"f",
    Infinity:"g",
    val:"abhay"
};

console.freeze(obj2);