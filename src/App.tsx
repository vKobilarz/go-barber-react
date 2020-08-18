import React, { FC } from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthConfig';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
