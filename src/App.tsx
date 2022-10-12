import styled from 'styled-components';
import { Footer, H1 } from '@daohaus/ui';
import { SearchContextProvider } from './contexts/SearchContext';
import Search from './components/Search';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
  min-height: 50vh;
`;

function App() {
  return (
    <SearchContextProvider>
      <AppWrapper>
        <H1>Daohaus V3</H1>
        <Search />
      </AppWrapper>
      <Footer />
    </SearchContextProvider>
  );
}

export default App;
