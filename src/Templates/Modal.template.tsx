import '../Styles/Modal.templates.scss'
const ModalTemplate = ({ children, close}: any) => {
  return (
    <div className='ventana'>
      <div className='contenido'>
        <span id='cerrar'className="material-symbols-outlined"  onClick={() => close(false)}>close</span>
       
      {children}
      </div>  
    </div>
  )
};

export default ModalTemplate;