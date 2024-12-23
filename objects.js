// let Student = {
//     Name: "Abhay",
//     Degree: "MCA",
//     Reg_no: 205216124
// };
// console.log(Student);

// Student.Degree = "Master's";
// Student.age = 21;
// console.log(Student);
// delete Student.age;
// console.log(Student);

// const obj = {
//     1: "a",
//     2: "b",
//     3: "c",
//     null: "d",
//     undefined: "e",
//     NaN: "f",
//     Infinity: "g",
// };
// console.log(obj['1']);

const mySym = Symbol("Abhay");
const Degree = {
    [mySym]:"Kumar",
    BCA: {
        years: 2,
        Base: "12th",
    },
    MCA: {
        years: 2,
        Base: "BCA",
    },
    Btech : {
        years: 2,
        Base: "12th",
    }
}
console.log(typeof [mySym]);