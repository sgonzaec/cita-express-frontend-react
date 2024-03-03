import ModalTemplate from "../../../Templates/Modal.template";
import BinaryToImage from "./BinaryToImage";

const ImageSection = ({
  response,
  isOpenModalImage,
  openModalImage,
  handleSubmit,
  onSubmitImage,
  register,
  binaryToImage
}: {
  response: any;
  isOpenModalImage: any;
  openModalImage: boolean;
  handleSubmit: any;
  onSubmitImage: any;
  register: any;
  binaryToImage: any;
}) => {
  return (
    <picture>
      <BinaryToImage binaryData={response.client.image} />
      <span
        className="material-symbols-outlined"
        onClick={() => isOpenModalImage(!openModalImage)}
      >
        {!openModalImage ? 'edit' : 'close'}
      </span>
      {openModalImage && (
        <ModalTemplate>
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
