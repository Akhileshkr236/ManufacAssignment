import "./App.css";
import wineData from "./utils/Wine-Data.json";

function transformData(arr) {
  let groupedData = {};
  for (let i = 0; i < arr.length; i++) {
    let gamma = (arr[i].Ash * arr[i].Hue) / arr[i].Magnesium;
    arr[i].Gamma = gamma.toFixed(3);
  }

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].Alcohol;
    if (groupedData[key] === undefined) {
      groupedData[key] = [];
    }
    groupedData[key].push(arr[i]);
  }
  // console.log(groupedData);
  return groupedData;
}

function getDecimalValues(value, places) {
  return value.toFixed(places);
}

function calculateMean(arr, key) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseFloat(arr[i][key]);
  }

  return sum / arr.length;
}

function calculateMedian(arr, key) {
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

  return median;
}

function calculateMode(arr, key) {
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
        console.log(Number(i));
        modes.push(Number(i));
      }
    }

  console.log(modes);

  return modes;
}

function App() {
  const MainData = transformData(wineData);
  //calculateMean(classData, "Flavanoids");

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(MainData).map((label, index) => {
              return <th key={index}>Class {label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavanoids Mean</th>
            {Object.values(MainData).map((val, index) => {
              return (
                <td key={index}>
                  {getDecimalValues(calculateMean(val, "Flavanoids"), 3)}
                </td>
              );
            })}
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            {Object.values(MainData).map((val, index) => {
              return (
                <td key={index}>
                  {getDecimalValues(calculateMedian(val, "Flavanoids"), 3)}
                </td>
              );
            })}
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            {Object.values(MainData).map((val, index) => {
              return (
                <td key={index}>
                  {calculateMode(val, "Flavanoids").map((item, index) => (
                    <>
                      <span>
                        {index !== 0 && ","} {getDecimalValues(item, 3)}
                      </span>
                    </>
                  ))}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(MainData).map((label, index) => {
              return <th key={index}>Class {label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
            {Object.values(MainData).map((val, index) => {
              return (
                <td key={index}>
                  {getDecimalValues(calculateMean(val, "Gamma"), 3)}
                </td>
              );
            })}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {Object.values(MainData).map((val, index) => {
              return <td key={index}>{calculateMedian(val, "Gamma")}</td>;
            })}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {Object.values(MainData).map((val, index) => {
              return (
                <td key={index}>
                  {calculateMode(val, "Gamma").map((item, index) => (
                    <>
                      <span>
                        {index !== 0 && ","} {getDecimalValues(item, 3)}
                      </span>
                    </>
                  ))}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// function App() {
//   const MainData = transformData(wineData);

//   console.log(MainData);

//   const [flavanoidsMean, setFlavanoidsMean] = useState([]);

//   useEffect(() => {
//     let flavMean = [];
//     for (const key in MainData) {
//       let classData = MainData[key];
//       flavMean.push(calculateMean(classData, "Flavanoids"));
//     }
//     setFlavanoidsMean(flavMean);
//     console.log(flavMean);
//   }, []);

//   return (
//     <div className="App">
//       <table>
//         <thead>
//           <tr>
//             <th>Measure</th>
//             {Object.keys(MainData).map((item, index) => (
//               <td key={index}>Class {item}</td>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Measure</td>
//             {flavanoidsMean.map((item, index) => (
//               <td key={index}>{item}</td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default App;

// const FlavanoidsTable = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Measure</th>
//           <th>Class 1</th>
//           <th>Class 2</th>
//           <th>Class 3</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Measure</td>
//           <td>Class 1</td>
//           <td>Class 2</td>
//           <td>Class 3</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// const GammaTable = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Measure</th>
//           <th>Class 1</th>
//           <th>Class 2</th>
//           <th>Class 3</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Measure</td>
//           <td>Class 1</td>
//           <td>Class 2</td>
//           <td>Class 3</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };
