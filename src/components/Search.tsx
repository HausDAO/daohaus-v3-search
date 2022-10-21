import { breakpoints, Spinner } from '@daohaus/ui';
import styled from 'styled-components';
import { useSearch } from '../contexts/SearchContext';
import { DaoList } from './DaoList';
import NetworkToggle from './NetworkToggle';
import SearchInput from './SearchInput';

const SearchContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 40rem;
  margin-bottom: 3rem;
  @media (max-width: ${breakpoints.xs}) {
    width: 90%;
  }
`;

const Search = () => {
  const { searchTerm, setSearchTerm, chainId, isLoading, results } =
    useSearch();

  return (
    <SearchContainer>
      <NetworkToggle />
      <InputContainer>
        <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </InputContainer>
      {isLoading && <Spinner />}
      {results && results.length > 0 && <DaoList daoData={results} />}
    </SearchContainer>
  );
};

export default Search;
