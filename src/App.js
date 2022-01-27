import {GlobalStyle} from "./Styles/global";
import { ThemeProvider } from 'styled-components';
import {theme} from "./Styles/theme";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AppRoutes/>
      </ThemeProvider> 
    </>
  );
}

export default App;
