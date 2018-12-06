function findFrequency(list) {
  let result = 0;
  let frequency = [0];
  let finalResult;

  while (typeof finalResult !== "number") {
    for (let i = 0; i < list.length; i++) {
      result += list[i];

      if (frequency.indexOf(result) >= 0) {
        finalResult = result;
        return finalResult;
      } else frequency.push(result);
    }
  }

  return finalResult;
}
