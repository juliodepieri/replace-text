import { ReactNode } from 'react';

import { Container } from './styled';

type TooltipProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

const Tooltip = ({ title, className = '', children }: TooltipProps) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
