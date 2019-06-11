'use strick'

// Задание 1

function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return { D: d };
    } else if (d === 0) {
        let x1 = -b / (2 * a);

        console.log(x1);
        return { roots: [ x1 ], D: d };
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return { roots: [ x1, x2 ], D: d}
    };
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
};

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


// Задание 2

function getAverageScore(data) {
    
    let averageData = {};
    let totalAverage = 0;
    
    for (key in data) {

        let sum = 0;

        for (let i = 0; i < data[key].length; i++) {
            sum += data[key][i];            
        };

        let courseAverage = sum / data[key].length;
        averageData[key] = courseAverage;
        totalAverage += courseAverage;
    }
    
    let courseCounter = Object.keys(data).length;
    totalAverage /= courseCounter;
  
    averageData.average = totalAverage;
    console.log(averageData);
}
``

console.log(getAverageScore(
    {
        algebra: [2, 4, 5, 2, 3, 4],
        geometru: [2, 4, 5],
        russian: [3, 3, 4, 5],
        physics: [5, 5],
        music: [2, 2, 6],
        english: [4, 4, 3],
        poetry: [5, 3, 4],
        chemistry: [2],
        french: [4, 4]
    }
));


//Задание 3

function getPersonData(secretData) {
    
    function decodingData(data) {
        if (data === 1) {
            return 'Эмильо';
        } else if (data === 0) {
            return 'Родриго';
        } else if (data === 'aaa') {
            return 'firstName';
        } else if (data === 'bbb') {
            return 'secondName';
        } else {
            return 'Информация не идентифицирована';
        }
    };

    let decodedData = {}; 
    
    for (key in secretData) {
        decodedData[decodingData(key)] = decodingData(secretData[key])
    };

    return decodedData;
};

let secretData = {
    aaa: 1,
    bbb: 1
};

console.log(getPersonData(secretData));