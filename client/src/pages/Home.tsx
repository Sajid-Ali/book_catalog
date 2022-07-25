import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <p>This is the home page</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
