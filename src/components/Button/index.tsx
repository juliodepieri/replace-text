import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { StylizedButton } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isLoading: boolean;
  type?: string;
};

const Button = ({ children, type = 'button', isLoading }: Props) => (
  <StylizedButton type={type}>
    {isLoading ? <AiOutlineLoading /> : children}
  </StylizedButton>
);

export default Button;
