import MainTemplate from "../../Templates/Main.template"
import "./Tables.scss";
import table from "./table.json"

const Tables = () => {

  return (
    <table>
      <tr>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Servicio</th>
        <th>Tecnico</th>
        <th>Duracion estimada</th>
        <th>Estado cita</th>
      </tr>

      {table.map((item: any, index: any) => {
        return (<tr className="infoData" key={index}>
          <td>{item.fecha}</td>
          <td>{item.hora}</td>
          <td>{item.tecnico}</td>
          <td>{item.servicio}</td>
          <td>{item.duracionEstimada}</td>
          <td>{item.estadoCita}</td>
        </tr>
        )
      })}

    </table>
  )
}

export default Tables