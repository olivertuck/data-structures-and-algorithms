const fizzBuzz = (iterations) => {
  const output = [];

  for (let i = 1; i <= iterations; i++) {
    const isMultipleOfNumber = (number) => i % number === 0;
    const isMultipleOfThree = isMultipleOfNumber(3);
    const isMultipleOfFive = isMultipleOfNumber(5);

    if (isMultipleOfThree && isMultipleOfFive) {
      output.push('fizz buzz');
    } else if (isMultipleOfThree) {
      output.push('fizz');
    } else if (isMultipleOfFive) {
      output.push('buzz');
    } else {
      output.push(i);
    }
  }

  return output;
};

module.exports = fizzBuzz;
