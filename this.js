const student = {
	Name : "Abhay",
	Course : "Mca",
	eng : 98,
	math : 66,
	cs : 58,
	getAvg(){
		let avg = (this.eng + this.math + this.cs)/3
		console.log(avg);
		}
	};

console.log(student.getAvg());