// Libs
import React from 'react';
import {
  bool, string, func, oneOfType,
} from 'prop-types';

// Styles
import * as S from './InputField.style';

export default function InputField({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <S.Container>
      <S.Label htmlFor={name}>
        {type !== 'checkbox' && label}

        <S.Input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

        {type === 'checkbox' && label}
      </S.Label>
    </S.Container>
  );
}

InputField.defaultProps = {
  placeholder: '',
};

InputField.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string, bool]).isRequired,
  placeholder: string,
  onChange: func.isRequired,
};
