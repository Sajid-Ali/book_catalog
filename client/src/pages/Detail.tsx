import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export interface IDetailPageProps {}

const DetailPage: React.FunctionComponent<IDetailPageProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <p>This is the detail page</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
