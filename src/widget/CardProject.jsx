const CardProject = ({ projectName, projectDescription, projectImage}) => {
  return (
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div class="card-body p-0">
        <div class="d-flex align-items-center">
          <div class="p-5">
            <h2 class="fw-bolder">{projectName}</h2>
			<div>
				{projectDescription}
			</div>
          </div>
          <img
            class="img-fluid"
            src={projectImage}
            alt="image project"
			width={"300px"}
			height={"400px"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardProject;