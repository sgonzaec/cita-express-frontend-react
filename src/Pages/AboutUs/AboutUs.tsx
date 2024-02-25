import MainTemplate from "../../Templates/Main.template"
import "./AboutUs.scss";
import mision from "./../../Assets/gtr.png"
import vision from "./../../Assets/vision.png"


const AboutUs = () => {

  return (
    <MainTemplate>
      <div className="contenedor-qs">
        <h2>¿Quienes somos?</h2>
        <p> Anim deserunt eu est magna aliqua. Magna exercitation in commodo eiusmod consequat et ut nulla nulla id dolore. Eiusmod ipsum quis do fugiat ea quis labore consequat anim cupidatat consequat. Enim culpa magna consectetur fugiat sunt est cillum quis.

          Dolore proident anim proident velit ex culpa exercitation cillum. Sint ea incididunt ipsum eu aliqua. Voluptate dolor exercitation ut sint duis reprehenderit qui eu dolore ipsum nostrud ea occaecat. Exercitation minim exercitation labore consectetur exercitation et enim. Ullamco aliquip cillum do irure pariatur sunt sint reprehenderit magna commodo occaecat. Proident esse sunt cillum deserunt ex sit proident. Mollit adipisicing est aute enim ea quis elit laboris Lorem dolor dolor amet voluptate qui.</p>
      </div>

      <div className="caja">
        <div className="left">
          <img className="mision" src={mision} alt="Mision"></img>
          <p>nuestra mision es----------------s</p>
        </div>

        <div className="rigth">
          <img className="vision" src={vision} alt="" />
          <p>nuestra vision es ................</p>
        </div>
      </div>

      <div className="contenedor2">
        <h3 className="ultimo">  Anim deserunt eu est magna aliqua. Magna exercitation in commodo eiusmod consequat et ut nulla nulla id dolore. Eiusmod ipsum quis do fugiat ea quis labore consequat anim cupidatat consequat. Enim culpa magna consectetur fugiat sunt est cillum quis.
        </h3>
      </div>



    </MainTemplate>
  )
}

export default AboutUs