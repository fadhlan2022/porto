import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Adjust the duration of animations
      easing: "ease-out", // Easing function for smooth animations
      once: true, // Ensures animations only run once
    });
  }, []);

  return (
    <div className="project-page">
      <div className="project min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-0.3s">
                Project List
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-0.4s">
                Berikut merupakan daftar project yang pernah saya kerjakan.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((project, index) => {
              const aosDelay = (index + 1) * 100; // 100ms delay per item for smoother animation

              return (
                <Col
                  key={project.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="600" // Set the duration for smoother animations
                  data-aos-delay={aosDelay} // Adjusted delay
                >
                  <img
                    src={project.image}
                    alt="unsplash.com"
                    className="w-100 mb-3 rounded-top"
                  />
                  <h5 className="mb-2 px-3">{project.title}</h5>
                  <div className="star-mb2 px-3">
                    <p>{project.desc}</p>
                  </div>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{project.price}</p>
                    <button className="btn btn-project rounded-1">
                      {project.button}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default ProjectPage;
