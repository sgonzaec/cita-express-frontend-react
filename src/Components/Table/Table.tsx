import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import { Appoiment, AppoimentList } from "../../Typings/Appoiments";

interface TableProps {
  appoimentsData: AppoimentList;
}

const Table: React.FC<TableProps> = ({ appoimentsData }) => {

  const data = appoimentsData.appoiments.map((appointment: Appoiment) => {
    return {
      id: appointment.id_appoiment,
      supplier_name: appointment.id_supplier,
      service_type: appointment.service_type,
      note: appointment.note,
      city: appointment.city
    };
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", 
        header: "Id" 
      },
      {
        accessorKey: "supplier_name", 
        header: "Tecnico" 
      },
      {
        accessorKey: "city", 
        header: "City" 
      },
      {
        accessorKey: "service_type",
        header: "Servicio" 
      },
      {
        accessorKey: "note", 
        header: "Descripción"
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

export default Table