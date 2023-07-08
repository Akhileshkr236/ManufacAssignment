import {
  calculateMean,
  calculateMedian,
  calculateMode,
  getDecimalValues,
} from "./common/functions";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(props.data).map((label, index) => {
            return <th key={index}>Class {label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{props.tableType} Mean</th>
          {Object.values(props.data).map((val, index) => {
            return (
              <td key={index}>
                {getDecimalValues(calculateMean(val, props.tableType), 3)}
              </td>
            );
          })}
        </tr>
        <tr>
          <th>{props.tableType} Median</th>
          {Object.values(props.data).map((val, index) => {
            return <td key={index}>{calculateMedian(val, props.tableType)}</td>;
          })}
        </tr>
        <tr>
          <th>{props.tableType} Mode</th>
          {Object.values(props.data).map((val, index) => {
            return (
              <td key={index}>
                [
                {calculateMode(val, props.tableType).map((item, index) => (
                  <span key={index}>
                    {index !== 0 && ","} {getDecimalValues(item, 3)}
                  </span>
                ))}
                ]
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
