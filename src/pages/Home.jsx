import DotSvg from '../widget/DotSvg'
const Home = () => {
    return (
        <>
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
                                    <img className="profile-img" src="/images/pas-foto.png" alt="..." />
                                    <div className="dots-1">
                                        <DotSvg />
                                    </div>
                                    <div className="dots-2">
                                        <DotSvg />
                                    </div>
                                    <div className="dots-3">
                                        <DotSvg />
                                    </div>
                                    <div className="dots-4">
                                        <DotSvg />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Tentang</span></h2>
                                <p className="lead fw-light mb-4">Nama saya Muhamad Hidayatulloh dan saya adalah seorang Fullstack Web Developer.</p>
                                <p className="text-muted">
                                    Dengan pengalaman dalam mengembangkan aplikasi menggunakan berbagai teknologi seperti React.js, Node.js, Laravel, Yii, CodeIgniter, Flutter, Java, dan C++.

                                    Saya terbiasa membangun aplikasi end-to-end, mulai dari frontend yang interaktif hingga backend yang efisien dan aman. Pengalaman saya mencakup pembuatan aplikasi web, RESTful API, hingga aplikasi mobile cross-platform.

                                    Saya memiliki semangat tinggi dalam belajar hal baru dan terus mengikuti perkembangan teknologi. Saat ini saya mencari kesempatan untuk bergabung dengan tim yang dinamis dan berkontribusi dalam membangun solusi digital yang berdampak nyata.</p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home