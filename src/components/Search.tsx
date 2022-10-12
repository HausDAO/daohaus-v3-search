import styled from 'styled-components';
import { useSearch } from '../contexts/SearchContext';
import SearchInput from './SearchInput';

const SearchContainer = styled.div`
  margin-top: 10rem;
`;

const Search = () => {
  const { searchTerm, setSearchTerm, chainId, isLoading, results } =
    useSearch();

  console.log('results', results);

  return (
    <SearchContainer>
      <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </SearchContainer>
  );
};

export default Search;
