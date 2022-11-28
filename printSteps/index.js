const printSteps = (numberOfSteps, steps = [], currentStepIndex = 0) => {
  if (typeof steps[currentStepIndex] !== 'string') {
    steps[currentStepIndex] = '';
  }

  if (steps[currentStepIndex].length <= currentStepIndex) {
    steps[currentStepIndex] += '#';

    return printSteps(numberOfSteps, steps, currentStepIndex);
  }

  if (steps[currentStepIndex].length < numberOfSteps) {
    steps[currentStepIndex] += ' ';

    return printSteps(numberOfSteps, steps, currentStepIndex);
  }

  if (steps.length !== numberOfSteps) {
    return printSteps(numberOfSteps, steps, currentStepIndex + 1);
  }

  return steps;
};

module.exports = printSteps;
