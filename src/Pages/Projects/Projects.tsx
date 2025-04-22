import styles from "./Projects.module.css";
import jmboardimg from "../../assets/google-pixelbook-mockup.png"
import casadiezimg from "../../assets/iphone-x-mockup.png"
import francospadaimg from "../../assets/modern-browser-mockup.png"
import Project from "../../Components/Project/Project";

const About: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.title}>Some of my projects</h2>
      <div className={styles.container}>
        <Project title="JMBoard" description="Full stack CRUD Kanban board app for collage project" stack="HTML ・ CSS ・ JavaScript ・ PHP ・ MYSQL" img={jmboardimg} imgAlt="JMBoard image" reverse={true} time="2024 - Nov" github="https://github.com/mLascurain/JMboard-php" />
        <Project title="Casa Diez Ventas" description="Frontend CRUD App to organize client purchase orders for Casa Diez" stack="HTML ・ CSS ・ JavaScript ・ React" img={casadiezimg} imgAlt="CasaDiez image" reverse={true} time="2025 - Apr" github="https://github.com/mLascurain/Casa-Diez-Ventas" />
        <Project title="Fanco Spada Landing Page" description="Landing page and portfolio for Franco Spada" stack="HTML ・ CSS ・ JavaScript ・ React ・ Typescript" img={francospadaimg} imgAlt="Fanco Spada Landing Page Image" reverse={true} time="2025 - Jan" github="https://github.com/mLascurain/Franco-Spada-LandingPage" />
      </div>
      <a
        href="https://github.com/mLascurain/"
        target="_blank"
        className={styles.link}
      >See more of my work → </a>
    </div>
  );
};

export default About;
