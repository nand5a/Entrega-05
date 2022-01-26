import './App.css';
import { Page } from './styles';
import Header from './Components/Header'; 
import Market from './Components/Market'
import Novidades from './Components/Novidades'

function App() {
  return (
    <Page>
      <Header/>
      <Novidades/>
      <Market/>
    </Page> 
  );
}

export default App;
