import { useMemo } from "react";

const names = ["Mai", "Mohammed", "Sarah", "saif", "Youssef"];
const lastNames = ["Mahmoud", "Ahmed", "Omar", "Noor", "Tarek"];
const status = ["active", "offline", "online", "away", "busy"];

let i = 0;

// Create Person
export function createPerson() {
  const item = {
    id: i,
    name: names[i % names.length],
    last_name: lastNames[i % lastNames.length],
    status: status[i % status.length],
  };
  i++;
  return item;
}
export const columnDefs = [
  { field: "id", checkboxSelection: true },
  { field: "name" },
  { field: "last_name" },
  { field: "status" },
];

// DefaultColDef sets props common to all Columns
export const defaultColDef: any = {
  sortable: true,
  filter: true,
};
