import Image from "next/image";

export default function Contact() {
    return (
        <div className="contact-container">
            <section id="contact" className="contact-section">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-description">
                    If you have any questions or would like to get in touch, please fill out the form below:
                </p>
                <form action="https://formspree.io/your-email@example.com" method="POST" className="contact-form">
                    <div className="input-container">
                        <label htmlFor="name" className="input-label">Name:</label>
                        <input type="text" id="name" name="name" required className="input-field" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="input-label">Email:</label>
                        <input type="email" id="email" name="email" required className="input-field" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message" className="input-label">Message:</label>
                        <textarea id="message" name="message" rows={4} required className="input-field" />
                    </div>
                    <div>
                        <button type="submit" id="submit-button" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
            <footer className="footer">
                <p className="footer-text">Follow me for more updates</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
                        <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="footer-icon" />
                    </a>
                    <a href="https://github.com/javeria-fatima49" target="_blank">
                        <Image src="/image/github.png" alt="GitHub" width={30} height={30} className="footer-icon" />
                    </a>
                </div>
                <p className="footer-text">fatimajaveria409@gmail.com</p>
            </footer>
        </div>
    );
}
