import styled from 'styled-components';
import { Footer, MainLayout } from '@daohaus/ui';
import { SearchContextProvider } from './contexts/SearchContext';
import Search from './components/Search';

import HausImg from './assets/haus__avatar.png';
import { DaoSearchProvider } from './contexts/DaoSearchContext';
import { ConnectButton } from '@daohaus/daohaus-connect-feature';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

function App() {
  return (
    <DaoSearchProvider>
      <SearchContextProvider>
        <MainLayout>
          <ConnectButton isSm />
          <ContentWrapper>
            <img width="200px" src={HausImg} />
            <Search />
          </ContentWrapper>
        </MainLayout>
        <Footer />
      </SearchContextProvider>
    </DaoSearchProvider>
  );
}

export default App;
