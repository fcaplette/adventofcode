// Determine how many square inches of fabric
// are within two or more claims?

function fabricCut(listOfArea) {
  // Variables needed to keep track of the overlaps
  let hashMap = {};
  let coordinates = {};
  let overlappingCoordinates = {};
  let overlapsCount = 0;

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

    // Create a key in the object for each coordinate and if it already
    // exist, then push the value in another array only if that value
    // does not exist yet.
    for (let j = areaData.minX; j < areaData.maxX; j++){
        for(let k = areaData.minY; k < areaData.maxY; k++){
          if(coordinates.prototype.hasOwnProperty(`${j}`)){
              if()
              coordinates
        }
      }
    }
    // {12: {1: #ofTimeItOccured}}

    // Add the new data set into a list
    listOfAreaConverted.push(areaData);

  }
}

fabricCut(["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"]);
