// Function to convert values to 3 decimal place.
export function getDecimalValues(value, places) {
  return value.toFixed(places);
}

// Mean Calculate function
export function calculateMean(arr, key) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseFloat(arr[i][key]);
  }

  return sum / arr.length;
}

// Median Calculate function
export function calculateMedian(arr, key) {
  let filteredValues = arr.map((item) => item[key]);
  // console.log(filteredValues);
  var median = 0,
    numsLen = arr.length;
  filteredValues.sort();

  if (numsLen % 2 === 0) {
    // average of two middle numbers
    median = ([numsLen / 2 - 1] + filteredValues[numsLen / 2]) / 2;
  } else {
    // if odd middle number only
    median = filteredValues[(numsLen - 1) / 2];
  }

  return getDecimalValues(parseFloat(median), 3);
}

// Mode Calculate function
export function calculateMode(arr, key) {
  let filteredValues = arr.map((item) => item[key]);
  var modes = [],
    count = [],
    i,
    number,
    maxIndex = 0;

  for (i = 0; i < filteredValues.length; i += 1) {
    number = filteredValues[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
  return modes;
}
