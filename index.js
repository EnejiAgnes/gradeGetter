// let grade = document.getElementsById('grades');
// console.log(grades.value);
function getgrade(){
	let value = document.getElementById('grades').value;

	let grade
	if ((value >= 0 ) && (value <= 39)){
		alert("F")
	}else{
		if ((value >= 40) && (value <=44)){
			alert("E")
		}else{
		if ((value>=45) && (value<=50)){
			alert("D")
		}else{
		if ((value>=51) &&(value <=60)){
			alert("C")
		}else{
		if ((value>=61) && (value<=70)){
			alert("B")
		}else{
		if ((value>=71) &&(value <=100)){
			alert("A")
		
		}
	 	}
	 	}
	 	}
		}
	}
	alert(grade)
	console.log(grade);
}
