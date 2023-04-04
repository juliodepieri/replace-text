import React from 'react';

import Header from '../../../components/Header';
import { Body, Container } from './styles';

export type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children = undefined }: DefaultLayoutProps) => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

export default DefaultLayout;
