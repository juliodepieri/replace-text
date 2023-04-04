import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { StylizedButton } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: string;
};

const Button = ({
  children,
  type = 'button',
  isLoading = false,
  disabled = false,
  ...rest
}: Props) => (
  <StylizedButton
    type={type}
    disabled={disabled}
    {...rest}
    isLoading={isLoading}
  >
    {isLoading ? <AiOutlineLoading /> : children}
  </StylizedButton>
);

export default Button;
