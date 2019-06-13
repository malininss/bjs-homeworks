'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	
	//Считаем количество полных месяцев
	
	let dateEnd = new Date(date);

	let yearEnd = new Date(dateEnd).getFullYear(),
			monthEnd = new Date(dateEnd).getMonth() + 1;


	let yearStart = new Date().getFullYear(),
			monthStart = new Date().getMonth() + 1;

	let yearsPerMonth = (yearEnd - yearStart) *  12; 
	let totalMonths = yearsPerMonth + (monthEnd - monthStart);
	
	
	//Проверяем корректность ввода данных
	
	if (isNaN(percent) && typeof(percent) === 'string') {
		console.log(`Параметр percent содержит неправильное значение ${percent}`);
	} else { percent = parseInt(percent) };
	
	if (isNaN(contribution) && typeof(contribution) === 'string') {
		console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
	} else { percent = parseInt(percent) };
	
	if (isNaN(amount) && typeof(amount) === 'string') {
		console.log(`Параметр amount содержит неправильное значение ${amount}`);
	} else { percent = parseInt(percent) };
	

	percent = percent / 100;
	
	let paymentPerMonth = ((amount - contribution) * ((percent / 12) + (percent / 12) / (((1 + (percent / 12)) ** totalMonths) - 1)));
	let totalAmount = (paymentPerMonth * totalMonths).toFixed(2);
	
	return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
        console.log(name.length);
		if (name === 'null' || name.trim() === '' || name === 'undefined') {
            return 'Привет, Мир! Меня зовут Аноним';
        }
        return `Привет, Мир! Меня зовут ${name}`;
    //return greeting;
}