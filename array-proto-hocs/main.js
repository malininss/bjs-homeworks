const compareArrays = (arr1, arr2) => (arr1.length !== arr2.length) ? false : arr1.every( (number, index) => number === arr2[index]);

function memoize(fn, limit) { 

  let result = [];

	return function () { ////Почему аргументы переданной функции доступны только во вложенной функции? Если обратиться тут к fn, выдаётся функция sum без аргументов

    let funcArguments = Array.from(arguments);
    console.log('Переданные аргументы: ' + funcArguments);

    // Проверяем, были ли уже такие результаты
    // for (let item in result) {
    //   console.log('Проверяем память: ' + result[item].args);
    //   if (compareArrays(funcArguments, result[item].args)) {
    //     console.log('Такие аргументы уже были! Выдаём результат!');
    //     return result[item].result;
    //   }      
    // }


    let resultCheck = '';

    result.forEach(function(item) {

      console.log('Проверяем память: ' + item.args);
      if (compareArrays(funcArguments, item.args)) {
        console.log('Такие аргументы уже были! Выдаём результат!');
        resultCheck = item.result;
      }   
          
    });

    if (resultCheck) return resultCheck;

    console.log('Рассчитываем результат');

    // console.log('Аргументов в истории не найдено, рассчитываем результат: ')

    //Высчитываем результат и добавляем его в переменную
    let newResult = {
      args: funcArguments,
      result: fn(funcArguments[0], funcArguments[1]) 
    };

    //Пушим переменную в массив result
    result.push(newResult);
    // console.log(result);
    
    //Смотрим, не превышен ли лимит элементов
    if (result.length > limit) {
      console.log('Слишком много элементов, срезаем массив');
      result = result.slice(-limit);
      console.log(result);
    }
    console.log('Выдаём рассчитанный результат!');
    return result[result.length - 1].result;
	}

}

function sum(...values) {
  let sum = 0;
  values.forEach(function (values) {
     sum += values;
  });
  return sum;
}

const mSum = memoize(sum, 3);

console.log(mSum(3, 4));
console.log(mSum(3, 4));
