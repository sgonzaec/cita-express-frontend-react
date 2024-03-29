import './AppoimentSkeleton.scss'

const AppoimentSkeleton = () => {
  return (
    <article className="card skeleton_appoiment_card">
      <div className="skeleton_title_section">
        <p className="skeleton skeleton_title"></p>
        <span className="skeleton skeleton_id"></span>
      </div>
      <div className="skeleton_conten_section">
        <div className="skeleton_supplier_section">
          <span className='skeleton skeleton_image'/>
          <div className="skeleton_info">
            <p className="skeleton skeleton_name_supplier">
            </p>
            <p className="skeleton skeleton_type_supplier">
            </p>
            <div className="skeleton skeleton_note">
            </div>
          </div>
        </div>
        <div className="skeleton skeleton_service_section">
          <div className="skeleton skeleton_location"></div>
          <div className="skeleton skeleton_rate"></div>
        </div>
      </div>
      <div className="skeleton_contact_section">
        <span  className="skeleton"></span>
        <span  className="skeleton"></span>
        <span  className="skeleton"></span>
      </div>
    </article>
  )
}

export default AppoimentSkeleton