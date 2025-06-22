import { useState } from "react";

const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        if(formData.name && formData.email && formData.phone && formData.message){
            const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
            const body = encodeURIComponent(`Nama : ${formData.name}\nEmail : ${formData.email}\nNo Telepon : ${formData.phone}\n\n${formData.message}`);
            window.location.href = `mailto:muhhi73@gmail.com?subject=${subject}&body=${body}`;
        }
    }

    return (
        <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Contact Me</h1>
                            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="name" type="text" placeholder="Enter your name..." onChange={handleChange} data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" >A name is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="email" type="email" placeholder="name@example.com" onChange={handleChange} data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="phone" type="tel" placeholder="0838..." data-sb-validations="required" onChange={handleChange} />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" name="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required" onChange={handleChange}></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    
                                    <div className={ isSuccess ? "d-block" : "d-none"} >
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                        </div>
                                    </div>
                                    
                                    <div className={ isSuccess ? "d-block" : "d-none"} ><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    <div className="d-grid"><button className="btn btn-primary btn-lg" onClick={handleSubmit} type="button">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Contact;