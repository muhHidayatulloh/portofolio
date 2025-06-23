const CardProject = ({ projectName, projectDescription, projectImage }) => {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-8 col-sm-12 ">
            <div className="p-5">
              <h2 className="fw-bolder">{projectName}</h2>
              <div>{projectDescription}</div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex align-items-center justify-content-center">
            <img
              className="img-fluid"
              src={projectImage}
              alt="image project"
              width={"300px"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
