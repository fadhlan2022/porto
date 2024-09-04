import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import PdfFile from "../assets/img/cv.pdf"; // Ganti dengan nama file PDF Anda
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  const [showCvModal, setShowCvModal] = useState(false);
  let navigate = useNavigate();

  const handleCvModalShow = () => setShowCvModal(true);
  const handleCvModalClose = () => setShowCvModal(false);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h2 className="mb-4 animate__animated animate__fadeInUp">
                Hi Everyone <span className="wave-hand">👋🏼</span> <br />{" "}
                <span>Welcome to my portfolio</span>
              </h2>
              <p className="mb-4 mb-4 animate__animated animate__fadeInUp">
                I am an enthusiastic and highly motivated information systems
                graduate with leadership skills, initiative, and the ability to
                work in a team professionally.
              </p>
              <button
                className="btn btn-project btn-lg rounded-1 me-2 mb-xs-0 mb-2 mb-4 animate__animated animate__fadeInUp"
                onClick={() => navigate("/project")}
              >
                Project
              </button>
              <button
                className="btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2 mb-4 animate__animated animate__fadeInUp"
                onClick={handleCvModalShow}
              >
                Curriculum Vitae
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Full-page Modal Overlay */}
      {showCvModal && (
        <div className="cv-overlay">
          <div className="cv-modal">
            <Button className="close-button" onClick={handleCvModalClose}>
              <span className="sr-only">Close</span> {/* Accessibility */}
              &times;
            </Button>
            <iframe
              src={PdfFile}
              title="Curriculum Vitae"
              style={{ width: "100%", height: "80vh", border: "none" }}
            />
          </div>
        </div>
      )}

      {/* Section FAQ */}
      <FaqComponent />
      {/* Section FAQ */}
    </div>
  );
};

export default HomePage;
