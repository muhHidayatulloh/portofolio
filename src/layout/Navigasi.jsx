import { use, useEffect, useState } from "react"

const Navigasi = () => {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white py-3 ${isFixed ? 'fixed-top' : ''}`}>
            <div className="container px-5">
                <a className="navbar-brand" href="/"><span className="fw-bolder text-primary">Portofolio</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="resume">Resume</a></li>
                        <li className="nav-item"><a className="nav-link" href="projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigasi