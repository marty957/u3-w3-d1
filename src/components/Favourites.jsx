import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const companies = useSelector((state) => state.companies.content);
  return (
    <>
      <Container className="text-center">
        <h1 className="display-1">Favourites</h1>
      </Container>
      <Row>
        {companies.length > 0 ? (
          companies.map((company, i) => (
            <Col sm={12} key={i}>
              <Link to={"/:company"}>{company}</Link>
            </Col>
          ))
        ) : (
          <Col sm={12} className="lead ">
            <span className="text-primary opacity-50 fs-1 me-2"></span>
            Your cart is empty
          </Col>
        )}
      </Row>
    </>
  );
};

export default Favourites;
