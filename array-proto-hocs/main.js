const compareArrays = (arr1, arr2) => (arr1.length !== arr2.length) ? false : arr1.every( (number, index) => number === arr2[index]);

function memoize(fn, limit) { 

  let result = [];

	return function () {

    let funcArguments = Array.from(arguments);

    let checkMemory = result.find(currentValue => compareArrays(currentValue.args, funcArguments));
    if (checkMemory) return checkMemory.result;

    let newResult = {
      args: funcArguments,
      result: fn.apply(this, funcArguments)
    };

    result.push(newResult);

    if (result.length > limit) {
      result = result.slice(-limit);
    }
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

const mSum = memoize(sum, 5);

console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 2, 3));