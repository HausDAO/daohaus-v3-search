import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { ValidNetwork } from '@daohaus/common-utilities';
import {
  Dao_Filter,
  Dao_OrderBy,
  ITransformedDaoListQuery,
  Ordering,
  Paging,
} from '@daohaus/dao-data';
import { loadDaoList } from '../utils/fetchHelpers';

const DEFAULT_DAO_PAGE_SIZE = 25;

export const defaultDaoData = {
  chainId: '0x5' as ValidNetwork,
  setChainId: async () => {
    return;
  },
  results: null,
  isLoading: false,
  searchTerm: undefined,
  setSearchTerm: async () => {
    return;
  },
  resetResults: async () => {
    return;
  },
  daoFilter: undefined,
  setDaoFilter: () => {
    return;
  },
  daoSort: undefined,
  setDaoSort: () => {
    return;
  },
  daoPaging: { offset: 0, pageSize: DEFAULT_DAO_PAGE_SIZE },
  daoNextPaging: undefined,
  setDaoPaging: () => {
    return;
  },
  getNextPage: async () => {
    return;
  },
};

export type SearchContextType = {
  chainId: ValidNetwork | null;
  setChainId: Dispatch<SetStateAction<ValidNetwork | null | undefined>>;
  results: ITransformedDaoListQuery['daos'] | null | undefined;
  isLoading: boolean;
  searchTerm: string | undefined;
  setSearchTerm: Dispatch<SetStateAction<string | undefined>>;
  resetResults: () => Promise<void>;
  daoFilter: Dao_Filter | undefined;
  setDaoFilter: Dispatch<SetStateAction<Dao_Filter | undefined>>;
  daoSort: Ordering<Dao_OrderBy> | undefined;
  setDaoSort: Dispatch<SetStateAction<Ordering<Dao_OrderBy> | undefined>>;
  daoPaging: Paging | undefined;
  daoNextPaging: Paging | undefined;
  setDaoPaging: Dispatch<SetStateAction<Paging | undefined>>;
  getNextPage: (entity: string) => Promise<void>;
};

export const SearchContext = createContext<SearchContextType>(defaultDaoData);

type SearchContextProviderProps = {
  children: ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [results, setResults] = useState<
    ITransformedDaoListQuery['daos'] | undefined
  >();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const [chainId, setChainId] = useState<ValidNetwork | null>('0x5');
  const [daoFilter, setDaoFilter] = useState<Dao_Filter | undefined>();
  const [daoSort, setDaoSort] = useState<Ordering<Dao_OrderBy> | undefined>();
  const [daoPaging, setDaoPaging] = useState<Paging | undefined>(
    defaultDaoData.daoPaging
  );
  const [daoNextPaging, setDaoNextPaging] = useState<Paging | undefined>();

  useEffect(() => {
    let shouldUpdate = true;
    if (searchTerm && chainId) {
      setLoading(true);

      loadDaoList({
        filter: {
          name_contains_nocase: searchTerm,
        },
        ordering: daoSort,
        paging: daoPaging,
        daochain: chainId,
        setData: setResults,
        setLoading: setLoading,
        setNextPaging: setDaoNextPaging,
        shouldUpdate,
      });
    } else {
      setResults([]);
    }

    return () => {
      shouldUpdate = false;
    };
  }, [searchTerm, chainId]);

  const resetResults = async () => {
    setResults([]);
  };

  const getNextPage = async (entity: string): Promise<void> => {
    // if (entity === 'members' && membersNextPaging) {
    //   setMembersPaging(membersNextPaging);
    // }
    // if (entity === 'proposal' && proposalsNextPaging) {
    //   setProposalsPaging(proposalsNextPaging);
    // }
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        isLoading,
        chainId,
        setChainId,
        searchTerm,
        setSearchTerm,
        resetResults,
        daoFilter,
        setDaoFilter,
        daoSort,
        setDaoSort,
        daoPaging,
        setDaoPaging,
        daoNextPaging,
        getNextPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const {
    results,
    isLoading,
    chainId,
    setChainId,
    searchTerm,
    setSearchTerm,
    resetResults,
    daoFilter,
    setDaoFilter,
    daoSort,
    setDaoSort,
    daoPaging,
    setDaoPaging,
    daoNextPaging,
    getNextPage,
  } = useContext(SearchContext);
  return {
    results,
    isLoading,
    chainId,
    setChainId,
    searchTerm,
    setSearchTerm,
    resetResults,
    daoFilter,
    setDaoFilter,
    daoSort,
    setDaoSort,
    daoPaging,
    setDaoPaging,
    daoNextPaging,
    getNextPage,
  };
};
