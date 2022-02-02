import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { client, darkModeVar, isLoggedInVar } from './apollo';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import AppRoutes from 'components/AppRoutes';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  const helmetContext = {};

  return (
    <ApolloProvider client={client}>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <AppRoutes isLoggedIn={isLoggedIn} />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
