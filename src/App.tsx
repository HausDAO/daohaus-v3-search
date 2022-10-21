import styled from 'styled-components';
import { Footer, MainLayout } from '@daohaus/ui';
import { SearchContextProvider } from './contexts/SearchContext';
import Search from './components/Search';

import HausImg from './assets/haus__avatar.png';
import { DaoSearchProvider } from './contexts/DaoSearchContext';
// import Profile from './components/Profile';
// import NetworkToggle from './components/NetworkToggle';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem;
`;

function App() {
  return (
    <DaoSearchProvider>
      <SearchContextProvider>
        <NavContainer>
          {/* <Profile />
           */}
        </NavContainer>
        <MainLayout>
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
