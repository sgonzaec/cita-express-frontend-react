import ModalTemplate from "../../../Templates/Modal.template";
import DummyImage from "../../../Assets/dummy-profile.png";
import { imagesHelpers } from "../../../Helpers/DecodeImage";

const ImageSection = ({
  response,
  isOpenModalImage,
  openModalImage,
  handleSubmit,
  onSubmitImage,
  register,
}: {
  response: any;
  isOpenModalImage: any;
  openModalImage: boolean;
  handleSubmit: any;
  onSubmitImage: any;
  register: any;
}) => {
  return (
    <picture>
      <img
        style={{ minWidth: "10em", minHeight: "10em" }}
        src={
          response.client.image
            ? imagesHelpers.DecodeImage(response.client.image)
            : DummyImage
        }
        alt="profilePhoto"
      />
      <span
        className="material-symbols-outlined"
        onClick={() => isOpenModalImage(!openModalImage)}
      >
        {!openModalImage ? 'edit' : 'close'}
      </span>
      {openModalImage && (
        <ModalTemplate close={isOpenModalImage}>
          <form onSubmit={handleSubmit(onSubmitImage)}>
            <input
              name="image"
              type="file"
              id="image"
              {...register("image", { required: true })}
            />
            <input type="submit" value="Actualizar Imagen" />
          </form>
        </ModalTemplate>
      )}
    </picture>
  );
};

export default ImageSection;
