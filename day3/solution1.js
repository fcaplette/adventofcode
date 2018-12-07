// Determine how many square inches of fabric
// are within two or more claims?

function fabricCut(listOfArea) {
  let listOfAreaConverted = [];
  // Iterate over each data once and convert it to an object
  for (let i = 0; i < listOfArea.length; i++) {
    let area = listOfArea[i];
    let areaData = {};

    // Start by finding all numbers from the data string
    const regExp = new RegExp("^#([0-9]+)\s@\s([0-9]+),([0-9]+):\s([0-9])+x([0-9]+)$;"
    const parsedData = area.match(regExp);
    console.log(parsedData);
    // ["1", "1", "3", "4", "4"]
    // Parse that data to become integers assigned to the object
    areaData.id = ParseInt(parsedData[0], 10);
    areaData.minX = ParseInt(parsedData[1], 10);
    areaData.minY = ParseInt(parsedData[2], 10);
    areaData.width = ParseInt(parsedData[3], 10);
    areaData.height = ParseInt(parsedData[4], 10);
    areaData.maxX = areaData.minX + areaData.width;
    areaData.maxY = areaData.minY + areaData.height;


    // Add the new data set into a list
    listOfAreaConverted.push(areaData);

  }

  // For each ID, compare if iterator is
  // bigger than minimum and smaller than maximum
  for(let i = 0; i < listOfAreaConverted.length; i++){
    for(let j = 1; j < listOfAreaConverted.length; j++){
      // If the minX of i is bigger than minX of j
      // Or if the maxX of i is smaller than the maxX of j
      // Then there is an overlap!
      if(
        listOfAreaConverted[i].minX > listOfAreaConverted[j].minX ||
        listOfAreaConverted[i].maxX < listOfAreaConverted[j].maxX
      ){

      }
      // If the minY of i is bigger than minY of j
      // Or if the maxY of i is smaller than the maxY of j
      // Then there is an overlap!
      if(
        listOfAreaConverted[i].minY > listOfAreaConverted[j].minY ||
        listOfAreaConverted[i].maxY < listOfAreaConverted[j].maxY
      ){

      }
    }
  }
}

fabricCut(["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"]);
