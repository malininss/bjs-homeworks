

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        console.log(`Дискриминант ${discriminant} меньше нуля. Корней нет.`)
    } else if (discriminant === 0) {
        let x = -b / (2 * a);

        console.log(x);
        return x;
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        console.log('Первый корень: ' + x1);
        console.log('Второй корень: ' + x2);
        return [x1, x2];
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
    if (marks.length > 5) {
        console.log('Количество оценок больше 5. Берем последние 5 оценок');
        let lastMarks = marks.slice(marks.length - 5);
        marks = lastMarks;
        console.log('новый массив: ' + marks);
    }

    let sum = null;

    for (let i = 0; i < marks.length; i++) {
        sum +=  marks[i];
    }
    
    let averageMark = Math.round(sum / marks.length);
    return averageMark;
}