import { useState, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useTable from "../../shared/hooks/useTable";
import {
  columnDefs,
  createPerson,
  defaultColDef,
} from "../../shared/utils/helpers";

const ServiceProviders = () => {
  const gridTable: any = useRef();
  // Create 1 data table with the following columns: ( id,name,last_name,status )
  let serviceProviders = [...Array(1)].map(() => createPerson());

  //import from Custom Hook
  const [getRowId, addRecord, removeSelectedRecords, reverseRecords, rowData] =
    useTable(gridTable, serviceProviders);

  return (
    <>
      <h2>Service Providers Table</h2>
      <button onClick={addRecord}>Add One Record</button>
      <button onClick={removeSelectedRecords}>Remove Selected</button>

      {/* Extra feature: Reverse Rows */}
      <button onClick={reverseRecords}>Reverse Records</button>

      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "50vh" }}
      >
        <AgGridReact
          ref={gridTable}
          getRowId={getRowId}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
        />
      </div>
    </>
  );
};

export default ServiceProviders;
