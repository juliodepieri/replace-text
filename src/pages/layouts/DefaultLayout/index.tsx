import { ReactNode } from 'react';

import { Body, Container } from './styles';

export type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = ({ children = undefined }: DefaultLayoutProps) => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

export default DefaultLayout;
