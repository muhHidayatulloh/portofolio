const CardResume = ({ year, position, company, location, gelar, description, jurusan, cssColorYear, imgSrc }) => {
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-start gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className={cssColorYear+" fw-bolder mb-2"}>{year}</div>
                            <div className="mb-2">
                                <div className="small fw-bolder">{position}</div>
                                <div className="small text-muted">{company}</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">{location ? location : gelar}</div>
                                <div className="small text-muted">{jurusan}</div>
                            </div>
                        </div>
                    </div>
                    <div className={ imgSrc ? "col-lg-6" : "col-lg-8"}><div>{description}</div></div>
                    {
                        imgSrc ?
                        <div className="col-lg-2">
                            <img src={imgSrc} className="img-fluid" alt="best inovers 2024" />
                        </div> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default CardResume