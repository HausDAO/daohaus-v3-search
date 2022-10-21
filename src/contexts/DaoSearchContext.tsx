import { createContext, Dispatch, useReducer, ReactNode } from 'react';
import {
  Dao_Filter,
  ITransformedDaoListQuery,
  Ordering,
} from '@daohaus/dao-data';
import {
  daoReducer,
  DaosActions,
  FilterAction,
  filterReducer,
} from './reducers';

// type SearchOptions = {
//   filter: Dao_Filter;
//   sort: Ordering
// };

type InititalStateType = {
  daos: ITransformedDaoListQuery['daos'];
  filter: {};
  //   isLoading: boolean;
};

const initialState = {
  daos: [],
  filter: {},
  //   isLoading: false,
};

const DaoSearchContext = createContext<{
  state: InititalStateType;
  dispatch: Dispatch<DaosActions | FilterAction>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (
  { daos, filter }: InititalStateType,
  action: DaosActions | FilterAction
) => ({
  daos: daoReducer(daos, action),
  filter: filterReducer(filter, action),
});

const DaoSearchProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  //   const asyncDispatch = useMemo(() => wrapAsync(dispatch), [dispatch]);

  return (
    <DaoSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </DaoSearchContext.Provider>
  );
};

export { DaoSearchContext, DaoSearchProvider };
