import React from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader';

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  max-width: 930px;
  width: 100%;
`;

function AuthLayout({ children }) {
  return (
    <>
      <AppHeader />
      <Content>{children}</Content>
    </>
  );
}

export default AuthLayout;
