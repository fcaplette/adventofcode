function shortestPolarizedString(string) {
  // Compare each polarizedString length and find the smallest one.
  let shortestString;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  string = polarize(string);

  for (let i = 0; i < alphabet.length; i++) {
    // Replace each letter and its capitalised version
    const regExp = new RegExp(alphabet[i], "g");
    const regExp2 = new RegExp(alphabet[i].toUpperCase(), "g");

    let tempString = string.replace(regExp, "");
    tempString = tempString.replace(regExp2, "");

    // Polarize the result string
    const polarizedString = polarize(tempString);

    // If the polarizedString is shorter than the shortes string yet, keep this one
    if (!shortestString || polarizedString.length < shortestString.length) {
      shortestString = polarizedString;
    }
  }

  return shortestString.length;
}

function polarize(string) {
  let newString = string;
  // Create a loop that will check each character.
  // This loop needs to go back 2 characters if polarity exist
  // And push the "polarized" characters out
  for (let i = 0; i < newString.length - 1; i++) {
    if (
      newString[i] !== newString[i + 1] &&
      newString[i].toUpperCase() === newString[i + 1].toUpperCase()
    ) {
      newString = newString.slice(0, i) + newString.slice(i + 2, string.length);
      if (i > 2) {
        i = i - 2;
      } else {
        i = -1;
      }
    }
  }
  return newString;
}
