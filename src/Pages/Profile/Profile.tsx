import MainTemplate from "../../Templates/Main.template";
import DummyImage from "../../Assets/dummy-profile.png";
import "./Profile.scss";
import { ProfileService } from "../../Services/Profile.service";
import Loading from "../../Components/Loading/Loading";
import UserDataList from "./ProfileComponents/UserDataList";

const Profile = () => {
  const { loading, response } = ProfileService();

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <section className="profile">
          <section className="rigth-section">
            <picture>
              <img src={DummyImage} alt="profile" />
              <span className="material-symbols-outlined">edit</span>
            </picture>
            <div className="card">
              <span className="material-symbols-outlined">edit_note</span>
              <h3>Tu información</h3>
              <UserDataList response={response} />
            </div>
          </section>
          <section className="left-section">
            <div className="card">
              <h2>Tus Servicios</h2>
            </div>
            <div className="card">
              <h2>Servicios contratados</h2>
            </div>
          </section>
        </section>
      )}
    </MainTemplate>
  );
};

export default Profile;
