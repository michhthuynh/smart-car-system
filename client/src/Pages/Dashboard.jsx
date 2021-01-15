import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PositionGo from '../components/PositionGo';
import PositionBack from '../components/PositionBack';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { Col, Container, Row } from 'reactstrap';
import Monitor from '../components/Monitor';

Dashboard.propTypes = {
  logged: PropTypes.bool
};

Dashboard.defaultProps = {
  logged: false
};

function Dashboard(props) {
  const { logged } = props

  return !logged ? <Redirect to="/login" /> : (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <PositionGo now={55} direction="go" />
          </Col>
        </Row>
        <Row>
          <Monitor />
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard;