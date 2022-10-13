import styled from 'styled-components';
import {
  Footer,
  H1,
  MainLayout,
  OuterLayout,
  SingleColumnLayout,
} from '@daohaus/ui';
import { SearchContextProvider } from './contexts/SearchContext';
import Search from './components/Search';

import HausImg from './assets/haus__avatar.png';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

function App() {
  return (
    <SearchContextProvider>
      <MainLayout>
        <ContentWrapper>
          <img width="200px" src={HausImg} />
          <Search />
        </ContentWrapper>
      </MainLayout>
      <Footer />
    </SearchContextProvider>
  );
}

export default App;
