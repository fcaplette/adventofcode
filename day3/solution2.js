// Determine how many square inches of fabric
// are within two or more claims?

function findFabricWithoutOverlaps(listOfArea) {
  const { coordinates, listOfAreaData } = fabricCut(listOfArea);

  // Loop through teach area of fabric. If all key = 1 in the coordinate object,
  // you found it!
  for (let i = 0; i < listOfArea.length; i++) {
    let area = listOfAreaData[i];
    let hasDuplicates = false;
    // exist
    for (let j = area.minX; j <= area.maxX; j++) {
      if (hasDuplicates) {
        break;
      }
      for (let k = area.minY; k <= area.maxY; k++) {
        if (coordinates[`${j}`][`${k}`] > 1) {
          hasDuplicates = true;
          break;
        }
      }
    }
    if (!hasDuplicates) {
      return area.id;
    }
  }

  // return the ID of the fabric that does not overlaps
}

function fabricCut(listOfArea) {
  // Variables needed to keep track of the overlaps
  let coordinates = {};
  let listOfAreaData = [];

  // Iterate over each data once and convert it to an object
  for (let i = 0; i < listOfArea.length; i++) {
    let area = listOfArea[i];
    let areaData = {};

    // Start by finding all numbers from the data string
    const regExp = "^#([0-9]+) @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)";
    const parsedData = area.match(regExp);
    // Parse that data to become integers assigned to the object
    areaData.id = parseInt(parsedData[1]);
    areaData.minX = parseInt(parsedData[2]) + 1;
    areaData.minY = parseInt(parsedData[3]) + 1;
    areaData.width = parseInt(parsedData[4]);
    areaData.height = parseInt(parsedData[5]);
    areaData.maxX = areaData.minX + areaData.width - 1;
    areaData.maxY = areaData.minY + areaData.height - 1;

    listOfAreaData.push(areaData);

    // Create a key in the object for each coordinate and if it already
    // exist
    for (let j = areaData.minX; j <= areaData.maxX; j++) {
      for (let k = areaData.minY; k <= areaData.maxY; k++) {
        // If the X coordinate does not exist, initiate an object and set the value
        if (!coordinates.hasOwnProperty(`${j}`)) {
          coordinates[`${j}`] = {};
          coordinates[`${j}`][`${k}`] = 1;
          // If the Y coordinate does not exist, set it to 1
        } else if (!coordinates[j].hasOwnProperty(`${k}`)) {
          coordinates[`${j}`][`${k}`] = 1;
        } else {
          coordinates[`${j}`][`${k}`] += 1;
        }
      }
    }
  }
  return { coordinates, listOfAreaData };
}
