// Identify the common pattern of the two closest id
function identifyCommonPattern(listOfId) {
  // Variable for current cloest pattern
  let bestPattern = "";

  // For each Id, compare with all the other id find the closest
  for (let i = 0; i < listOfId.length; i++) {
    const currentId = listOfId[i];

    for (let j = i + 1; j < listOfId.length; j++) {
      let counter = 0;
      let currentPattern = "";

      for (let k = 0; k < currentId.length; k++) {
        if (counter > 1) break;
        if (listOfId[i][k] === listOfId[j][k]) {
          currentPattern += listOfId[i][k];
          if (currentPattern.length > bestPattern.length) {
            bestPattern = currentPattern;
          }
        } else {
          counter++;
        }
      }
    }
  }
  return bestPattern;
}
