import { ValidNetwork } from '@daohaus/common-utilities';
import {
  breakpoints,
  Button,
  Link,
  Spinner,
  WrappedCheckbox,
  WrappedInput,
} from '@daohaus/ui';
import { useContext } from 'react';
import styled from 'styled-components';
import { DaoSearchContext } from '../contexts/DaoSearchContext';
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

  const { state, dispatch } = useContext(DaoSearchContext);

  console.log('results', state);

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
