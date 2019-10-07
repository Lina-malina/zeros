module.exports = function zeros(expression) {
  let counter = 0;
  let factorials = expression.split('*');
  let areAllFactorialsOdd = true;

  for (let i = 0; i < factorials.length; i++) {

    // For double factorials
    if (factorials[i].includes('!!')) {
      let number = factorials[i].replace('!!', '');

      // for double even factorials
      if (number % 2 == 0) {
        areAllFactorialsOdd = false;
        for (let j = 10; number / j >= 1; j *= 5) {
          counter += Math.floor(number / j);
        }
      }

      // for double odd factorial
      if (number % 2 != 0) {
        counter += Math.round(number / 10) + Math.ceil((number - 24) / 50);
      }

      // For single factorial
    } else if (factorials[i].includes('!')) {
      areAllFactorialsOdd = false;
      let number = factorials[i].replace('!', '');
      for (let j = 5; number / j >= 1; j *= 5) {
        counter += Math.floor(number / j);
      }
    }
  }
  return areAllFactorialsOdd == true ? 0 : counter;
}

