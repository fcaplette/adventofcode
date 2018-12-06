// Determine how many square inches of fabric
// are within two or more claims?

// What do you know?
/* 
At least 1000 inches on each side
Each input = #ID @ x,y: Width x Height
*/

function fabricCut(listOfArea) {
  // Create a loop that starts from x
  // and iterate until x + width
  // For each ID, compare if iterator is
  // bigger than minimum and smaller than maximum
  for (let i = 0; i < listOfArea.length; i++) {
    let area = listOfArea[i];
    area = area.split(" ").join("");
    console.log(area);
    // Parse the string and separate the data
    // into an Object
    let areaData = {};
    // Add the id to the object
    const indexOfSharp = area.indexOf("#");
    areaData.id = area[indexOfSharp + 1];

    // Add the X and Y coordinate
    const regExp = new RegExp("\u0040(d+)", "g");
    areaData.x = area.match(regExp);
    console.log(areaData);
    // Add the width and height
  }

  // Create a loop that starts from y
  // and iterate until y + height
}

fabricCut(["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"]);
