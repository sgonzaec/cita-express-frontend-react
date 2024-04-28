import { useMemo, useEffect, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Appoiment, AppoimentList } from "../../Typings/Appoiments";

interface TableProps {
  appoimentsData: AppoimentList;
}

const Table: React.FC<TableProps> = ({ appoimentsData }) => {
  const [data, setData] = useState<Appoiment[]>([]);

  useEffect(() => {
    if (Array.isArray(appoimentsData.appoiments) && !appoimentsData.appoiments.some(appointment => appointment.error)) {
      const appointments = appoimentsData.appoiments.map((appointment: Appoiment) => ({
        ...appointment,
        note: appointment.note || "",
      }));

      setData(appointments);
    }
  }, [appoimentsData]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id_appoiment",
        header: "Id",
      },
      {
        accessorKey: "id_supplier",
        header: "Tecnico",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "service_type",
        header: "Servicio",
      },
      {
        accessorKey: "note",
        header: "Descripción",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
  });

  return Array.isArray(appoimentsData.appoiments) && !appoimentsData.appoiments.some(appointment => appointment.error) ? (
    <MaterialReactTable table={table} />
  ) : (
    <div>No Se encontraron citas</div>
  );
};

export default Table;