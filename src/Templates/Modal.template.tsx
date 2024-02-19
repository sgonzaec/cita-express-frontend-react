import '../Styles/Modal.templates.scss'
const ModalTemplate = ({ children }: any) => {
  return (
    <div className='ventana'>
      <div className='contenido'>
        <span id='cerrar'className="material-symbols-outlined">close</span>
      {children}
      </div>  
    </div>
  );
};

export default ModalTemplate;