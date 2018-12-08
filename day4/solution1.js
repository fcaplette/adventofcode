// Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?

function findSleepiestGuard(actionsOfEachGuard){
  // Process the initial string into an object that can be compared and calculated
  const actionsData = actionsOfEachGuard.map( action => {
    return processStringToData(action);
  })

  // Sort the data based on the dates
  const sortedData = mergeSort(actionsData);

// Loop through each action and transform the time and action into "sleep time"
// Which should live in a new object that list all the guards ID and their sleeping
// tendencies per minute. As long as entries do not have Id, then it is the same guard!

//   {
//     99: {
//       00: 15
//       01: 123,
//       total: 00 + 01, ...
//       minutesOfOpportunity: highestNumber
//   }
//
//
  // Keep track of all the guards sleeping schedule
  let guardsSchedule = {}
  // Keep track of the current guard
  let currentGuardId;

  let heaviestSleeperCount;
  let heaviestSleeperMinute;
  let heaviestSleeperId;


  for(let i = 0; i < sortedData.length; i++){
    const currentAction = sortedData[i];
    const nextAction = sortedData[i +1];

    // If the entry has an ID, then the guard changed shift
    if(currentAction.id){
      currentActionId = currentAction.id
    }
    // The guard does not yet exist
    if(!guardsSchedule[currentActionId]) {
      guardsSchedule[currentActionId] = {total: 0, minuteOfOpportunity: null};
    }

    // If the guard falls asleep, then calculate for how long
    if(currentAction.string.includes("asleep")){
      // Total of minutes slept. If bigger than the heaviestSleeperCount current value,
      // update it!
      guardsSchedule[currentActionId].total += (nextAction.minutes - currentAction.minutes);
        if(!heaviestSleeperCount || heaviestSleeperCount < guardsSchedule[currentActionId].total){
        heaviestSleeperCount = guardsSchedule[currentActionId].total;
        heaviestSleeperId = currentActionId;
      }

      let bestMinutecount = 0;

      for(let j = currentAction.minutes; j < nextAction.minutes; j++){
        // Count how many instances a minute occurs
        if(!guardsSchedule[currentActionId][j]){
          guardsSchedule[currentActionId][j] = 1
        } else {
          guardsSchedule[currentActionId][j]++;
        }
        // If the minute of opportunity counter is smaller than the current count of this minute,
        // Then you found the new best minute
        if(bestMinutecount < guardsSchedule[currentActionId][j]){
          bestMinutecount = guardsSchedule[currentActionId][j];
          guardsSchedule[currentActionId].minuteOfOpportunity = parseInt(j);
        }

      }
    }
  }

      return heaviestSleeperId * guardsSchedule[heaviestSleeperId].minuteOfOpportunity;

}


function processStringToData(action) {
  // Parse the time with a regexp
  let data = {};
  const regExpForId = "#([0-9]+)";
  const regExpForTime = "\[[0-9]+-([0-9]+)-([0-9]+) ([0-9]+):([0-9]+)";

   const matchArrayID = action.match(regExpForId)
   const matchArrayTime = action.match(regExpForTime)
   if(matchArrayID){
       data.id = matchArrayID[1];
   }
  // Parse the time into an object
  data.string = action;
  data.month = matchArrayTime[1];
  data.day = matchArrayTime[2];
  data.hours = matchArrayTime[3];
  data.minutes = matchArrayTime[4];

  // This will be used to sort the data
  data.compare = `${data.month}${data.day}${data.hours}${data.minutes}`


  return data;

}

function mergeSort(userArray){
    // Define mergeSortedArrays function to merge two sorted array
    function mergeSortedArrays(arr1, arr2){
        // Create new empty array to be returned
        let finalArray = [];
        // Define two index values, one per array
        let i = 0;
        let j = 0;

        // Loop over arrays as long as there are values to look at
        while(i < arr1.length || j < arr2.length){
            // If one array is empty, just push all the values of the remaining array
            // Compare the values of each array and return the sorted array

            if(j >= arr2.length){
                finalArray.push(arr1[i]);
                i++;
            } else if(i >= arr1.length){
               finalArray.push(arr2[j]);
                j++;
            } else if(arr1[i].compare < arr2[j].compare) {
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
    if(userArray.length <= 1)return userArray;

    const mid = Math.floor(userArray.length/2);

    // Recursively call the smaller halves
    const left = mergeSort(userArray.slice(0, mid));
    const right = mergeSort(userArray.slice(mid));

    // Merge the left and right arrays
    return mergeSortedArrays(left, right)

}
