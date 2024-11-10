import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="image-container">
          <Image
            src="/image/girl-image.jpg"
            alt="Profile"
            layout="responsive"
            width={736}
            height={700}
            className="profile-image"
          />
        </div>
        <div className="text">
                  <div className="text-container">
          <div className="title">
            <span className="title-text">My</span>
            <div className="divider"></div>
            <span className="title-text">Portfolio</span>
          </div>
          <p className="intro-text">
            Hi, I&apos;m Javeria Fatima, a passionate web developer specializing in Typescript, HTML, CSS, JavaScript, and Next.js.
          </p>
          <div className="button-container">
            <button className="explore-button">
              <a href="/project">Explore Now</a>
            </button>
          </div>
          </div>

        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">Follow me for more updates</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/linkdin.jpg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>
          <a href="https://github.com/javeria-fatima49" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/github.png"
              alt="GitHub"
              width={30}
              height={30}
              className="social-icon"
            />
          </a>
        </div>
        <p className="footer-text">fatimajaveria409@gmail.com</p>
      </footer>
    </div>
  );
}
