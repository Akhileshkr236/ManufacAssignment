import "./App.css";
import { getDecimalValues } from "./common/functions";
import Table from "./table";
import wineData from "./utils/Wine-Data.json";

// Transforming the dataset with updated gamma field and grouped the data according to "Alchohol" key
function transformData(arr) {
  let groupedData = {};
  for (let i = 0; i < arr.length; i++) {
    // adding calculated gamma to dataset
    let gamma = (arr[i].Ash * arr[i].Hue) / arr[i].Magnesium;
    arr[i].Gamma = getDecimalValues(gamma, 3);
    arr[i].Flavanoids = parseFloat(arr[i].Flavanoids);

    // Grouping the dataset acording to the needed key
    let key = arr[i].Alcohol;
    if (groupedData[key] === undefined) {
      groupedData[key] = [];
    }
    groupedData[key].push(arr[i]);
  }

  return groupedData;
}

function App() {
  const MainData = transformData(wineData);

  return (
    <div className="App">
      <Table data={MainData} tableType="Flavanoids" />
      <Table data={MainData} tableType="Gamma" />
    </div>
  );
}

export default App;
