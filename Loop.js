// for(i = 1; i<= 10; i++){
//     if(i =4){
//         break;
//     }
//     console.log(i*5);
// }

// let n = prompt("Enter value of N : ");
// for(let i = 1; i<= 10; i++){
//     console.log(i*n);
// }

// let m = prompt("Enter the value of M : ");
// while (m < 10) {
//     if (m % 2 == 0) {
//         console.log(m + "Number is odd");
//     }
//     else {
//         console.log(m + "Number is even");
//     }
//     i++;
// }

for (let i = 0; i <=10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

let arr = [['abhi','abhay','lalit'],['lavi','shubh','navi']];
for(let i = 0; i<arr.length; i++){
    console.log(`lets #${i}`);
    for(let j = 0; j < arr.length; j++){
        console.log(arr[i][j]);
}}

let num = [3,5,6,8,56,33];

for(i of num){
    console.log(i);
}

for(letter of "Abhay Kumar Rajput"){
    console.log(letter);
}