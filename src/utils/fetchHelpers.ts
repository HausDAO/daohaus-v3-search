import { ReactSetter, ValidNetwork } from '@daohaus/common-utilities';
import {
  Dao_Filter,
  Dao_OrderBy,
  Haus,
  ITransformedDaoListQuery,
  Ordering,
  Paging,
} from '@daohaus/dao-data';

export const loadDaoList = async ({
  filter,
  ordering,
  paging,
  daochain,
  setData,
  setLoading,
  setNextPaging,
  shouldUpdate,
}: {
  filter: Dao_Filter;
  ordering?: Ordering<Dao_OrderBy>;
  paging?: Paging;
  daochain: ValidNetwork;
  setData: ReactSetter<ITransformedDaoListQuery['daos'] | undefined>;
  setLoading: ReactSetter<boolean>;
  setNextPaging: ReactSetter<Paging | undefined>;
  shouldUpdate: boolean;
}) => {
  try {
    setLoading(true);
    const haus = Haus.create();
    const res = await haus.query.listDaos({
      networkId: daochain,
      filter,
      ordering,
      paging,
    });

    if (shouldUpdate) {
      setNextPaging(res.nextPaging);

      setData(res.items);
    }
  } catch (error) {
    console.error(error);
    setData(undefined);
  } finally {
    if (shouldUpdate) {
      setLoading(false);
    }
  }
};
