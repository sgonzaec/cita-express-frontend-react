import MainTemplate from "../../Templates/Main.template"
import "./Tables.scss";
import table from "./table.json"

const Tables = () => {

    return (
<table>
  <thead>Agendamiento</thead>
  <tr>
    <th>Fecha</th>
    <th>Hora</th>
    <th>Servicio</th>
    <th>Tecnico</th>
    <th>Duracion estimada</th>
    <th>Estado cita</th>
  </tr>
  <tr>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.fecha}</p>
    })}</td>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.hora}</p>
    })}</td>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.servicio}</p>
    })}</td>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.tecnico}</p>
    })}</td>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.duracionEstimada}</p>
    })}</td>
    <td>{table.map((item:any,index:any)=>{
      return <p>{item.estadoCita}</p>
    })}</td>
  </tr>
</table>
    )
  }
  
  export default Tables