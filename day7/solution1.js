// function that will return the string of consecutive actions

function findStepOrder(listOfSteps) {
  // Variables to keep track of the steps
  const steps = [];
  let remainingSteps = {}; // To have a faster way to check which steps are done or not
  const executedSteps = {}; // Steps already completed

  // Regexp to find the steps
  const regExpStepRequired = "Step ([A-Z])";
  const regExpStep = "step ([A-Z])";

  // Loop through the array and process the data into an array of object
  listOfSteps.map(string => {
    const requiredStep = string.match(regExpStepRequired)[1];
    const step = string.match(regExpStep)[1];

    // Check if the requirement is a step or not
    if (!(requiredStep in remainingSteps)) {
      steps.push({ [requiredStep]: [] });
      remainingSteps[requiredStep] = true;
    }

    // Push the step and its requirements if it's the first time you encounter it
    if (!(step in remainingSteps)) {
      steps.push({ [step]: [requiredStep] });
      remainingSteps[step] = true;
    }
    // Otherwise only push the required step in the array
    else {
      for (let i = 0; i < steps.length; i++) {
        if (steps[i].hasOwnProperty(step)) {
          steps[i][step].push(requiredStep);
        }
      }
    }
  });

  // Sort all the data alphabetically.
  const sortedSteps = mergeSort(steps);

  console.log(sortedSteps);

  const solution = findStepsOrder();
  return solution;

  function findStepsOrder() {
    let solution = "";
    let counter = 0;

    for (let i = 0; i < sortedSteps.length; i++) {
      let foundLetter = true;

      const currentStep = sortedSteps[i];

      const currentLetter = Object.keys(currentStep)[0];
      counter++;
      // If remainingSteps is empty, break out of it;
      if (!Object.keys(remainingSteps).length || counter > 1000) {
        break;
      }

      if (currentLetter in remainingSteps) {
        if (currentStep[currentLetter].length === 0) {
          // If the length of the array is 0, then no requirements are needed for this step
          // Then add it to the solution and
          updateSolution(currentLetter);
          i = -1;
        } else {
          for (let j = 0; j < currentStep[currentLetter].length; j++) {
            const currentRequirement = currentStep[currentLetter][j];
            console.log(currentRequirement);
            if (!(currentRequirement in executedSteps)) {
              foundLetter = false;
              break;
            }
          }
          if (foundLetter) {
            updateSolution(currentLetter, i);
            i = -1;
          }
        }
      }
    }

    return solution;

    // You found the next logical letter, so add it to a string, remove it from
    // the remainingSteps and remember that this letter is now available!
    function updateSolution(letter, i) {
      solution += letter;
      executedSteps[letter] = true;
      delete remainingSteps[letter];
    }
  }

  function mergeSort(userArray) {
    // Define mergeSortedArrays function to merge two sorted array
    function mergeSortedArrays(arr1, arr2) {
      // Create new empty array to be returned
      let finalArray = [];
      // Define two index values, one per array
      let i = 0;
      let j = 0;

      // Loop over arrays as long as there are values to look at
      while (i < arr1.length || j < arr2.length) {
        // If one array is empty, just push all the values of the remaining array
        // Compare the values of each array and return the sorted array

        if (j >= arr2.length) {
          finalArray.push(arr1[i]);
          i++;
        } else if (i >= arr1.length) {
          finalArray.push(arr2[j]);
          j++;
        } else if (Object.keys(arr1[i])[0] < Object.keys(arr2[j])[0]) {
          finalArray.push(arr1[i]);
          i++;
        } else {
          finalArray.push(arr2[j]);
          j++;
        }
      }

      return finalArray;
    }

    // Divide the array into smaller arrays until each array is either length of 1 or 0
    if (userArray.length <= 1) return userArray;
    regExpStepRequired;
    const mid = Math.floor(userArray.length / 2);

    // Recursively call the smaller halves
    const left = mergeSort(userArray.slice(0, mid));
    const right = mergeSort(userArray.slice(mid));

    // Merge the left and right arrays

    return mergeSortedArrays(left, right);
  }
}
