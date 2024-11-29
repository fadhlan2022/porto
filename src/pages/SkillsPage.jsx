import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-0.3s">
                Skills
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-0.4s">
                Skill yang dimiliki dan terus dikembangkan
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <div className="people">
                  <img src={data.image} alt="" className="center-img" />
                    <div>
                    </div>
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

export default TestimonialPage;
