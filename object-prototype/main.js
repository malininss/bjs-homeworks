function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
		// Не понимаю, почему есть погрешность в несколько дней((
		
		let now = Date.now();		
		birthday = Number(new Date(birthday));		
	
		let diff = now - birthday;
		
		function yearToMilliseconds() {

			let year = new Date().getFullYear();
			if (year % 4 === 0 && year % 100 !== 0) {
				return 31622400000; //Високосный
			} else {
				return 31536000000; //Не високосный
			}
			
		}
		
		let age = diff / yearToMilliseconds();
		
		
		if (age > 18) {
			return true;
		} else {
			return false;
		}

}

function initPrintAnimalSound() {
    const animal  = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
	
    // код для задачи №2 писать здесь
		if (animal === 'undefined') {
			return null;
		}
		
		let sound = animal.sound;
		return sound;
		
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
		let marksSum = 0; 
		
		for (let i = 0; i < marks.length; i++) {
			marksSum += +marks[i]
		}
		
		let average = marksSum / marks.length;
		let roundedAverage = Math.round(average);
		
		return roundedAverage;
		
}