import React from 'react';
import { ToastProvider } from './toast';

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
