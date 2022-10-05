import { useState, useCallback } from "react";
import { createPerson } from "../utils/helpers";

const useTable = (gridTable: any, persons: any = {}) => {
  // Initial Rows Data
  const [rowData, setRowData] = useState(persons);

  // Get Each Row Id
  const getRowId = useCallback((params: any) => {
    return params.data.id;
  }, []);

  // adds one row each time with random data into the table
  const addRecord: any = useCallback(() => {
    const insertedRecord = createPerson();
    persons = [...persons, insertedRecord];

    setRowData(persons);
  }, []);

  // delete all checked rows in the table.
  const removeSelectedRecords = useCallback(() => {
    const selectedRows = gridTable.current.api.getSelectedNodes();
    const selectedIds = selectedRows.map((row: any) => row.data.id);

    persons = persons.filter(
      (person: any) => selectedIds.indexOf(person.id) < 0
    );

    setRowData(persons);
  }, []);

  // Extra feature: Reverse Rows
  const reverseRecords = useCallback(() => {
    persons = [...persons].reverse();

    setRowData(persons);
  }, []);

  return [getRowId, addRecord, removeSelectedRecords, reverseRecords, rowData];
};

export default useTable;
