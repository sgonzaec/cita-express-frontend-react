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
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
export default Home