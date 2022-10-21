import { ChangeEvent, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Field, Input } from '@daohaus/ui';
import useDebounce from '../utils/debounceHook';

type SearchInputProps = {
  searchTerm?: string;
  setSearchTerm: (term: string) => void;
} & Partial<Field>;

const SearchInput = ({
  searchTerm,
  setSearchTerm,
  ...inputProps
}: SearchInputProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce<string>(localSearchTerm, 700);

  useEffect(() => {
    if (localSearchTerm !== searchTerm) {
      setSearchTerm(localSearchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm((prevState) =>
      prevState === event.target.value ? '' : event.target.value
    );
  };

  return (
    <Input
      icon={BiSearch}
      long
      id="dao-search"
      placeholder="Search DAOs"
      onChange={handleSearchTermChange}
      defaultValue={localSearchTerm}
      {...inputProps}
    />
  );
};

export default SearchInput;
