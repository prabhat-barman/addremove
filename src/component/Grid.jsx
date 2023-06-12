import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "antd";
import { useEffect, useState } from "react";
import data from "./data.json";

const Grid = () => {
  const rowData = data;

  const deleteRecord = (record) => {};
  const MedalCellRenderer = () => {
    return (
      <>
        <Button onClick={deleteRecord}>Delete</Button>
      </>
    );
  };

  const [columnDefs] = useState([
    { field: "name" },
    { field: "password" },
    { field: "action", cellRenderer: MedalCellRenderer },
  ]);

  useEffect(() => {
    // Clean up the state when the component unmounts
    const cleanup = () => {
      // Do something here
    };

    return cleanup;
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
};

export default Grid;
