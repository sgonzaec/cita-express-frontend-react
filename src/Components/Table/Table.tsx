import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    lastName: "Cooper",
    age: 30,
    city: 'Medellin'
  },
  {
    name: "Sara",
    age: 25,
    lastName: "Algo",
    city: 'Barcelona'
  },
  {
    name: 'Simon',
    age: 25,
    lastName: "Gonzalez",
    city: 'Japon'
  }
];

export default function Table() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", 
        header: "Name" 
      },
      {
        accessorKey: "age", 
        header: "age"
      },
      {
        accessorKey: "city", 
        header: "City" 
      },
      {
        accessorKey: "lastName",
        header: "Apellido" 
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns
  });

  return <MaterialReactTable table={table} />;
} 
