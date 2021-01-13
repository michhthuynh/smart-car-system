import React from 'react';
import PropTypes from 'prop-types';
import FormLogin from '../components/FormLogin.jsx';
import { Col, Container, Row } from 'reactstrap';

Login.propTypes = {

};


function Login(props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", background: 'linear-gradient(to right, #2193b0, #6dd5ed)' }}>
      <Container style={{ backgroundColor: 'white', maxWidth: "600px", padding: '100px 40px', borderRadius: '15px' }}>
        <Row style={{ marginBottom: "20px" }} className="justify-content-md-center" >
          <Col >
            <h1 style={{ textAlign: "center" }}>Login Form</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col  >
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;