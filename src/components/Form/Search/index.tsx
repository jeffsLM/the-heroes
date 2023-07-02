import React, { InputHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai';

import { FormControl, InputStyled, IconButton } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

export const SearchBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ id, error = null, ...rest }, ref) => {

  return (
    <FormControl isInvalid={!!error}>
      <InputStyled
        id={id}
        ref={ref}
        {...rest}
      />
      <IconButton type='submit'>
        <AiOutlineSearch size={20} />
      </IconButton>
    </FormControl>
  );
}

export const Search = forwardRef(SearchBase)
