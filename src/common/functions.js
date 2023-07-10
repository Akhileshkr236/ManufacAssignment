// Function to convert values to 3 decimal place.
export function getDecimalValues(value, places) {
  return Math.round(value * 1000) / 1000;
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
  const middle = (filteredValues.length + 1) / 2;

  // Avoid mutating when sorting
  const sorted = [...filteredValues].sort((a, b) => a - b);
  const isEven = sorted.length % 2 === 0;

  return isEven
    ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2
    : sorted[middle - 1];
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
