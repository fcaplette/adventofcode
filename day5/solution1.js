// Create a function

function polarize(string) {
  let newString = string;
  // Create a loop that will check each character.
  // This loop needs to reset if polarity exist
  // And push the characters out
  for (let i = 0; i < newString.length - 1; i++) {
    if (
      newString[i] !== newString[i + 1] &&
      newString[i].toUpperCase() === newString[i + 1].toUpperCase()
    ) {
      newString = newString.slice(0, i) + newString.slice(i + 2, string.length);
      i = -1;
    }
  }
  // Return the number of characters left in the string total
  return newString.length;
}
