import Image from "next/image";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="animate-slideLeft">
        <h1 className="projects-header">My Projects</h1>
        <p className="projects-descriptions">
          Here are some of the projects I&apos;ve developed using HTML, CSS, and Next.js, each focusing on creating responsive, interactive, and 
          user-friendly websites. These projects highlight my skills in front-end development and modern web technologies. Feel free to explore the details below!
        </p>

        <h3 className="milestone-title">Milestone 1</h3>
        <div className="project-card">
          <Image
            src="/image/milestone 1.png"
            alt="Milestone 1"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">The first milestone of my project, developed with HTML/CSS, focusing on creating the foundational structure and layout.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/resume.git">Milestone 1</a></li>
            <li>Vercel:<a className="project-link" href="http://resume-kohl-nine.vercel.app/">Milestone 1</a></li>
          </ul>
        </div>

        <h3 className="milestone-title">Milestone 2</h3>
        <div className="project-card">
          <Image
            src="/image/milestone 2.png"
            alt="Milestone 2"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">Milestone 2 highlights my skills in building dynamic, interactive elements using HTML/CSS while ensuring a smooth and responsive user experience.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/milestone-3.git">Milestone 2</a></li>
            <li>Vercel:<a className="project-link" href="https://milestone-3-one-henna.vercel.app/">Milestone 2</a></li>
          </ul>
        </div>

        <h3 className="milestone-title">Milestone 3</h3>
        <div className="project-card">
          <Image
            src="/image/milestone 3.png"
            alt="Milestone 3"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">In Milestone 3, I added functionality to generate user-specific content dynamically, using HTML/CSS, to enhance the overall interactivity of the project.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/milestone-4.git">Milestone 3</a></li>
            <li>Vercel:<a className="project-link" href="https://milestone-4-orpin.vercel.app/">Milestone 3</a></li>
          </ul>
        </div> 

        <h3 className="milestone-title">Calculator</h3>
        <div className="project-card">
          <Image
            src="/image/calculator.png"
            alt="Calculator"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">A responsive calculator app built with HTML and CSS. It demonstrates my skills in creating clean, interactive user interfaces with dynamic functionality.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/calculator-.git ">Calculator</a></li>
            <li>Vercel:<a className="project-link" href="https://calculator-vert-ten-77.vercel.app/">Calculator</a></li>
          </ul>
        </div>  

        <h3 className="milestone-title">Portfolio</h3>
        <div className="project-card">
          <Image
            src="/image/portfolio.png"
            alt="Portfolio"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">A personal portfolio built with HTML/CSS showcasing my web development skills, including responsive design and modern user interfaces.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/javeria-projects-portfolio.git">Portfolio</a></li>
            <li>Vercel:<a className="project-link" href="https://javeria-projects-portfolio.vercel.app/">Portfolio</a></li>
          </ul>
        </div>     

        <h3 className="milestone-title">Men&apos;s clothes collection</h3>
        <div className="project-cards">
          <Image
            src="/image/men.png"
            alt="Men's collection"
            layout="responsive"
            width={200}
            height={300}
            className="project-image"
          />
          <p className="project-description">An e-commerce website displaying a men&apos;s clothing collection, developed using Next.js with a focus on creating a user-friendly shopping experience.</p>
          <ul>
            <li>GitHub:<a className="project-link" href="https://github.com/javeria-fatima49/Men-clothes-collection.git">Men&apos;s collection</a></li>
            <li>Vercel:<a className="project-link" href="https://men-clothes-collection.vercel.app/">Men&apos;s collection</a></li>
          </ul>
        </div>
        <footer className="footer">
          <p className="footer-text">Follow me for more updates</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
              <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="social-icon" />
            </a>
            <a href="https://github.com/javeria-fatima49" target="_blank">
              <Image src="/image/github.png" alt="GitHub" width={30} height={30} className="social-icon" />
            </a>
          </div>
          <p className="footer-email">fatimajaveria409@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}
