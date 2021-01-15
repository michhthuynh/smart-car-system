import React, { useEffect, useState } from 'react';
import FormLogin from '../components/FormLogin.jsx';
import { Alert, Col, Container, Row } from 'reactstrap';
import api from '../utils/api.js';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

Login.propTypes = {
  logged: PropTypes.bool
};

Login.defaultProps = {
  logged: false
};

function Login(props) {
  const { logged } = props
  const [errorMsg, setErrorMsg] = useState('')
  const [visible, setVisible] = useState(false)
  const onDismiss = () => setVisible(false)


  const handleOnSubmit = async values => {
    try {
      const response = await api.post('/auth/login', { username: values.username, password: values.password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.id)
      window.location.reload();
    } catch (error) {
      setErrorMsg('Cannot log to system. Please contact to Administrator!')
      setVisible(true)
    }
  }

  return logged ? <Redirect to='/dashboard' /> : <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", background: 'linear-gradient(to right, #2193b0, #6dd5ed)' }}>
    <Container style={{ backgroundColor: 'white', width: "600px", padding: '100px 40px', borderRadius: '15px' }}>
      <Row style={{ marginBottom: "20px" }} className="justify-content-md-center" >
        <Col >
          <h1 style={{ textAlign: "center" }}>Login Form</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
            {errorMsg}
          </Alert>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <FormLogin onSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  </div>
}

export default Login;