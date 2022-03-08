import Header from './components/header/Header';
import GlobalStyle from './globalStyles';
import Theme from './Theme';
import Mercury from './pages/Mercury';
import PageWrapper from './components/pageWrapper/PageWrapper';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Mercury />
      </PageWrapper>
    </Theme>
  );
}

export default App;
