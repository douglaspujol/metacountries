import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './styles';

function Input({ label, placeholder, value, onChange, id, ...props }) {
  return (
    <Label htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Label>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  value: '',
  label: null,
};

export default Input;
