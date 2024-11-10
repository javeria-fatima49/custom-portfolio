import Image from "next/image";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-text-container">
                <h1 className="about-title">About Me</h1>
                <p className="about-text">
                    Hello! I&apos;m Javeria Fatima, a passionate learner currently in my second year of pre-medical studies.
                    While my academic path is in pre-med, my curiosity for technology led me to explore web development.
                    I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
                    I love creating interactive and visually engaging applications.
                </p>

                <h1 className="about-title">Learning & Growing</h1>
                <p className="about-text">
                    Balancing my studies with my interest in tech has been challenging but rewarding, and
                    I&apos;m always excited to take on new projects that push my skills further.
                    I believe in the power of technology to create meaningful experiences, and
                    I&apos;m looking forward to connecting with others who share this passion.
                    Whether it&apos;s about web development, user experience, or new tech trends, I&apos;d love to connect!
                </p>
            </div>
            <div className="about-image-container">
                <Image
                    src="/image/AI-image.jpg"
                    alt="Profile"
                    layout="intrinsic"
                    width={800}
                    height={500}
                    className="about-image"
                />
            </div>
            <footer className="footer-desktop">
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

            <footer className="footer-mobile">
                <p className="footer-text">Follow me for updates</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
                        <Image src="/image/linkdin.jpg" alt="LinkedIn" width={24} height={24} className="footer-icon" />
                    </a>
                    <a href="https://github.com/javeria-fatima49" target="_blank">
                        <Image src="/image/github.png" alt="GitHub" width={24} height={24} className="footer-icon" />
                    </a>
                </div>
                <p className="footer-text">fatimajaveria409@gmail.com</p>
            </footer>
        </div>
    );
}
