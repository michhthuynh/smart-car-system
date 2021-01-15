import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { FastField, Formik } from 'formik'
import InputField from '../../custom-fields/inputField';

FormLogin.propTypes = {
  onSubmit: PropTypes.func
};

FormLogin.defaultProps = {
  onSubmit: null
}

function FormLogin(props) {
  const { onSubmit } = props
  const initialValue = {
    username: '',
    password: '',
  }
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={async values => {
        if (!onSubmit) return
        onSubmit(values)
      }}
    >
      { formikProps =>
        <Form onSubmit={formikProps.handleSubmit} style={{ textAlign: 'left' }}>
          <FormGroup>
            <Label>Username:</Label>
            <FastField
              name="username"
              component={InputField}

              placeholder="Enter username"
              className="login-form"
            />
          </FormGroup>

          <FormGroup>
            <Label>Password:</Label>
            <FastField
              name="password"
              component={InputField}

              type="password"
              placeholder="Enter password"
              className="login-form"
            />
          </FormGroup>
          <Button type="submit" className="w-100" color="primary" style={{ marginTop: '30px' }}>Login</Button>
        </Form>
      }
    </Formik>
  );
}

export default FormLogin;