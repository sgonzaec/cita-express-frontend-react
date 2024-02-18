import Tables from "../../Components/Table/Tables";
import MainTemplate from "../../Templates/Main.template"
import "./Home.scss";

const Home = () => {

  return (
    <MainTemplate>
      <div className="homeContainer">
        <div className="container">
          <h2>Cita Express</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid sit possimus placeat. Eos accusamus sint nostrum voluptas non quod minus voluptatum, magnam expedita unde, soluta impedit adipisci repellat similique.</p>
        </div>
        <div className="content">
          <div className="left">
            <div className="appointmentBox">
              <div className="box">
                <Tables/>
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
            <div>
              <h2>Cita Express somos la verga agendando</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod assumenda odio eos quos dolore praesentium. Corrupti neque sequi itaque, accusamus aliquid distinctio, harum sapiente quam eius sit dolores, nesciunt perspiciatis.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, officiis laudantium! Maxime architecto amet, ducimus culpa ut incidunt, laborum at id in quidem nisi temporibus, cupiditate tenetur iure placeat tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis cumque, sunt reiciendis odio, tenetur, dolores veritatis saepe voluptas sequi natus. Sequi quo possimus commodi magni qui voluptatum eius deserunt!</p>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}

export default Home