import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Theme from './Theme';
import PageWrapper from './components/pageWrapper/PageWrapper';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import { MobileNavigation } from './components/header/MobileNavigation';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <PageWrapper>
        <MobileNavigation />
        <Routes>
          <Route path='/' element={<Mercury />} />
          <Route path='/venus' element={<Venus />} />
          <Route path='/earth' element={<Earth />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/jupiter' element={<Jupiter />} />
          <Route path='/saturn' element={<Saturn />} />
          <Route path='/uranus' element={<Uranus />} />
          <Route path='/neptune' element={<Neptune />} />
        </Routes>
      </PageWrapper>
    </Theme>
  );
}

export default App;
