import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Fadhlan Hisyam</span>, All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
