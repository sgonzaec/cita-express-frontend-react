import MainTemplate from "../../Templates/Main.template";
import "./Profile.scss";
import { ProfileService } from "../../Services/Profile.service";
import Loading from "../../Components/Loading/Loading";
import UserDataList from "./ProfileComponents/UserDataList";
import ModalTemplate from "../../Templates/Modal.template";
import Table from "../../Components/Table/Table";
import ImageSection from "./ProfileComponents/ImageSection";

const Profile = () => {
  const {
    loading,
    response,
    isOpenModalData,
    openModalData,
    openModalImage,
    isOpenModalImage,
    onSubmit,
    handleSubmit,
    register,
    onSubmitImage,
    binaryToImage,
    countryList,
  } = ProfileService();

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <section className="profile">
          <section className="rigth-section">
            <ImageSection
              response={response}
              isOpenModalImage={isOpenModalImage}
              openModalImage={openModalImage}
              handleSubmit={handleSubmit}
              onSubmitImage={onSubmitImage}
              register={register}
              binaryToImage={binaryToImage}
            />
            <div className="card">
              <span
                className="material-symbols-outlined"
                onClick={() => isOpenModalData(!openModalData)}
              >
                edit_note
              </span>
              <h3>Tu información</h3>
              <UserDataList
                response={response}
                handleSubmit={handleSubmit}
                register={register}
                countryList={countryList}
              />
            </div>
          </section>
          <section className="left-section">
            <div className="card">
              <h2>Tus Servicios</h2>
              <Table />
            </div>
            <div className="card">
              <h2>Servicios contratados</h2>
              <Table />
            </div>
          </section>
          {openModalData && (
            <ModalTemplate close={isOpenModalData}>
              <h2>Actualizar información</h2>
              <UserDataList
                response={response}
                openModalData={openModalData}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                register={register}
                countryList={countryList}
              />
            </ModalTemplate>
          )}
        </section>
      )}
    </MainTemplate>
  );
};

export default Profile;
