import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import DarkTheme from './styles/DarkTheme';
import AppProvider from './hooks';
import AllRoutes from './router';
import 'react-tooltip/dist/react-tooltip.css';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Router>
        <AppProvider>
          <AllRoutes />
        </AppProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
