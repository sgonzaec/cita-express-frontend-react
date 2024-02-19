import MainTemplate from "../../Templates/Main.template";
import DummyImage from "../../Assets/dummy-profile.png";
import "./Profile.scss";
import { ProfileService } from "../../Services/Profile.service";
import Loading from "../../Components/Loading/Loading";
import UserDataList from "./ProfileComponents/UserDataList";
// import { useForm } from "react-hook-form";
import { DecodeImage } from "../../Helpers/DecodeImage";
import ModalTemplate from "../../Templates/Modal.template";

const Profile = () => {
  const {
    loading,
    response,
    isOpenModal,
    openModal,
    onSubmit,
    handleSubmit,
    register,
  } = ProfileService();

  // const {
  //   register,
  //   handleSubmit
  // } = useForm<any>();

  //   const getBase64 = (file:any, cb:any) => {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = function () {
  //         cb(reader.result)
  //     };
  //     reader.onerror = function (error) {
  //         console.log('Error: ', error);
  //     };
  // }

  //   const onSubmit = async (data: any) => {
  //     let image64 = ''

  //     getBase64(data.image[0], (result:any) => {
  //       return result
  //     })

  //     fetch("http://127.0.0.1:5000/api/clients/updateImage", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         user: "test@test.com",
  //         image: image64,
  //       }),
  //     })
  //       .then((r) => r.json())
  //       .then((e) => console.log(e));
  //   };

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <section className="profile">
          <section className="rigth-section">
            <picture>
              <img
                style={{ minWidth: "10em", minHeight: "10em" }}
                src={
                  response.client.image
                    ? DecodeImage(response.client.image)
                    : DummyImage
                }
                alt="profilePhoto"
              />
              <span className="material-symbols-outlined">edit</span>
            </picture>
            <div className="card">
              <span
                className="material-symbols-outlined"
                onClick={() => isOpenModal(!openModal)}
              >
                edit_note
              </span>
              <h3>Tu información</h3>
              <UserDataList
                response={response}
                handleSubmit={handleSubmit}
                register={register}
              />
            </div>
          </section>
          <section className="left-section">
            <div className="card">
              <h2>Tus Servicios</h2>
            </div>
            <div className="card">
              <h2>Servicios contratados</h2>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="file"
                  id="image"
                  {...register("image", { required: true })}
                />
                <input type="submit" value="enviar" />
              </form> */}
            </div>
          </section>
          {openModal && (
            <ModalTemplate close={isOpenModal}>
              <h2>Actualizar información</h2>
              <UserDataList
                response={response}
                openModal={openModal}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                register={register}
              />
            </ModalTemplate>
          )}
        </section>
      )}
    </MainTemplate>
  );
};

export default Profile;
