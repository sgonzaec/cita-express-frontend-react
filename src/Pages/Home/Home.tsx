import { open } from "fs";
import Tables from "../../Components/Table/Tables";
import MainTemplate from "../../Templates/Main.template"
import "./Home.scss";
import { brown } from "@mui/material/colors";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Carrousel from "../../Components/Slider/Slider";

const Home = () => {

  return (
    <MainTemplate>
      <div className="up-image">
        <SearchBar />
        <Carrousel />
      </div>
      <div className="homeContainer">
        <div className="container">
          <h2>Cita Express</h2>
          <p><b>Olvídate de las llamadas interminables, las esperas en la fila y las agendas desorganizadas.</b> Con nuestro servicio de agendamiento de citas, podrás crear, gestionar y solicitar citas para diversos servicios de forma fácil, cómoda y rápida.</p>
        </div>
        <div className="content">
          <div className="left">
            <div className="appointmentBox">
              <div className="box">
                <Tables />
              </div>
              <div>
                <ul>
                  <li>
                    <button id="confirm">Confirmar</button>
                  </li>
                  <li>
                    <button id="modify">Modificar</button>
                  </li>
                  <li>
                    <button id="cancel">Cancelar</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="boxCircle">
              <button className="brown"></button>
              <button className="orange"></button>
              <button className="blue"></button>
            </div>
            <div id="displayText"></div>
            <div>
              <h2>Agenda, gestiona, controla tus citas de la mejor forma</h2>
              <h3>Tanto si eres cliente como proveedor, nuestra plataforma te ofrece una solución completa:</h3>
              <h3>Para clientes:</h3>
              <ul>
                <li><p><b>Reserva citas para una amplia variedad de servicios:</b> desde belleza y bienestar hasta reparaciones y mantenimiento, clases y talleres, ¡y mucho más!</p></li>
                <li><p><b>Encuentra proveedores en tu zona:</b> utiliza nuestro buscador avanzado para filtrar por ubicación, especialidad, precio, valoraciones y disponibilidad.</p></li>
                <li><p><b>Recibe recordatorios automáticos:</b> no te pierdas ninguna cita y mantén tu agenda organizada.</p></li>
                <li><p><b>Compara precios y servicios:</b> elige la mejor opción para tus necesidades y presupuesto, leyendo opiniones de otros clientes y comparando diferentes ofertas.</p></li>
              </ul>
              <h3>Para proveedores:</h3>
              <ul>
                <li><p><b>Crea un perfil profesional para tu negocio:</b> destaca tus servicios, experiencia y habilidades para atraer a nuevos clientes</p></li>
                <li><p><b>Ofrece tus servicios a una amplia red de clientes potenciales:</b> aumenta tu visibilidad y maximiza tus oportunidades de negocio.</p></li>
                <li><p><b>Gestiona tu calendario de citas de forma eficiente:</b> organiza tu tiempo, evita confusiones y optimiza tu productividad.</p></li>
                <li><p><b>Recibe notificaciones de nuevas solicitudes de citas:</b> no te pierdas ninguna oportunidad y responde a tus clientes de forma inmediata.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
export default Home