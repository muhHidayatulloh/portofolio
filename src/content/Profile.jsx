import DotSvg from "../widget/DotSvg"

const Profile = () => {
    return (
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Mewujudkan &middot; Ide &middot; Menjadi &middot; Aplikasi</div></div>
                            <div className="fs-3 fw-light text-muted">Hi, Saya Muhamad Hidayatulloh</div>
                            <h1 className="display-3 fw-bolder"><span className="text-gradient d-inline">Fullstack Web Developer</span></h1>
                            <div className="fs-3 fw-light text-muted mb-5">And Andriod Developer</div>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume">Resume</a>
                                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects">Projects</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                            <div className="profile bg-gradient-primary-to-secondary">
                                <img className="profile-img" src="/images/profile.png" alt="..." />
                                <div className="dots-1">
                                    <DotSvg />
                                </div>
                                <div class="dots-2">
                                    <DotSvg />
                                </div>
                                <div class="dots-3">
                                    <DotSvg />
                                </div>
                                <div class="dots-4">
                                    <DotSvg />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Profile