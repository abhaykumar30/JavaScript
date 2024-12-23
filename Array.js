let arr = ['abhi', 'Abhay', 'rajput'];
console.log(arr);

let aRr = [];
console.log(aRr.length);

let data = ["Abhay", "Rajput", 0, 3];
console.log(data[1][0]);
console.log(data[1].length);

let student = ['Abhay', 'Lavi', 'Ashmit', 'xyz'];
console.log(student);
student[3] = 'ABC';
console.log(student);

let cars = ['audi', 'bmw', 'xuv', 'maruti'];
console.log(cars);

cars.push('farrari');
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift('farrari');
console.log(cars);

cars.shift();
console.log(cars);

console.log(cars.indexOf('audi'));

console.log(cars.includes('audi'));

console.log(cars.concat(student));

console.log(cars.reverse());

let a = cars.slice(2);
console.log(cars);
console.log(cars.slice(2,5));
console.log(cars.slice(-4));

console.log(student.splice(2));
console.log(student.splice(1,2));
console.log(student.splice(0,1,"Nobita","Gian"));

console.log(student);

let days = [9,3,7,3,8,3,'Saturday','Monday'];
console.log(days.sort());

let nested = [[1,2],[3,4],[5,6]];
console.log(nested);
console.log(nested[0]);
console.log(nested[1].length);
console.log(nested[2]);