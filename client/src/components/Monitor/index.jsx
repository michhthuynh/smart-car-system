import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Row } from 'reactstrap';
import { ProgressBar } from 'react-bootstrap'

function Monitor(props) {
  return (
    <Container style={{ marginTop: "100px" }} >
      <Row>
        <Col sm={6}>
          <Card>
            <CardHeader>
              <h1>Monitor</h1>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm={6}>
                  Quảng đường đi được: 55%
                </Col>
                <Col sm={6}>
                  <ProgressBar now={60} />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Vận tốc:
                </Col>
                <Col sm={6}>
                  10 Km/s
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Trạng thái:
                </Col>
                <Col sm={6}>
                  <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'green' }}></div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Sự cố xe:
                </Col>
                <Col sm={6}>
                  None
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <CardHeader>Control</CardHeader>
            <CardBody>
              <Row className="mt-4">
                <Col sm={6}>
                  Chuyển hướng xe:
                </Col>
                <Col sm={6}>
                  <Button color='primary'>Chuyển hướng</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Dừng xe:
                </Col>
                <Col sm={6}>
                  <Button color='success'>Start</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Dừng xe:
                </Col>
                <Col sm={6}>
                  <Button color='danger'>Stop</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  Thay đổi vận tốc
                </Col>
                <Col sm={4}>
                  <Input placeholder="Nhập vận tốc" />
                </Col>
                <Col sm={2}>
                  Km/h
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Monitor;