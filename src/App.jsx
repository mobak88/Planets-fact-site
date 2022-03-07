import Header from './components/header/Header';
import GlobalStyle from './globalStyles';
import Theme from './Theme';
import Planets from './components/planets/Planets';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Planets />
    </Theme>
  );
}

export default App;
