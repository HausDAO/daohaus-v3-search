import { Dao_Filter, ITransformedDaoListQuery } from '@daohaus/dao-data';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export enum ActionTypes {
  Load = 'LOAD_DAOS',
  UpdateFilter = 'UPDATE_FILTER',
}

type DaosPayload = {
  [ActionTypes.Load]: ITransformedDaoListQuery['daos'];
};

export type DaosActions = ActionMap<DaosPayload>[keyof ActionMap<DaosPayload>];

export const daoReducer = (
  state: ITransformedDaoListQuery['daos'],
  action: DaosActions | FilterAction
) => {
  switch (action.type) {
    case 'LOAD_DAOS':
      return action.payload;
    default:
      return state;
  }
};

type FilterPayload = {
  [ActionTypes.UpdateFilter]: Dao_Filter;
};

export type FilterAction =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (
  state: Dao_Filter,
  action: DaosActions | FilterAction
) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.payload;
    default:
      return state;
  }
};
