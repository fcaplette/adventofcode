// Create the checksum function that calls both function above and multiplies them
function checksum(listOfId) {
  let twoIdenticalLetter = 0;
  let threeIdenticalLetter = 0;

  // Go through the list
  for (let i = 0; i < listOfId.length; i++) {
    const id = mergeSort(listOfId[i]);
    console.log(id);
    let hasCounted2 = false;
    let hasCounted3 = false;

    for (let j = 0; j < id.length; j++) {
      if (id[j] === id[j + 1] && id[j + 1] === id[j + 2]) {
        !hasCounted3 && threeIdenticalLetter++;
        hasCounted3 = true;

        j = j + 2;
      } else if (id[j] === id[j + 1]) {
        !hasCounted2 && twoIdenticalLetter++;
        hasCounted2 = true;

        j = j + 1;
      }
    }
  }

  return twoIdenticalLetter * threeIdenticalLetter;
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
      } else if (arr1[i] < arr2[j]) {
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

  const mid = Math.floor(userArray.length / 2);

  // Recursively call the smaller halves
  const left = mergeSort(userArray.slice(0, mid));
  const right = mergeSort(userArray.slice(mid));

  // Merge the left and right arrays
  return mergeSortedArrays(left, right);
}
