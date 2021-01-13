import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  className: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disable: false,
  className: ''
}

function InputField(props) {
  const {
    field, form, placeholder,
    type, label, disable,
    className
  } = props

  const { name } = field
  const { errors, touched } = form
  const showError = touched[name] && errors[name]
  return (
    <div>
      <Input
        id={name}
        {...field}

        type={type}
        placeholder={placeholder}
        disabled={disable}
        required
      />
      {
        showError &&
        <p >
          {
            errors[name]
          }
        </p>
      }
    </div>
  );
}

export default InputField;