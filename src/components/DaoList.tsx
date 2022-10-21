import styled from 'styled-components';

import { breakpoints } from '@daohaus/ui';
import { ITransformedDao } from '@daohaus/dao-data';
import { DaoCard } from './DaoCard';
import { ValidNetwork } from '@daohaus/common-utilities';

export const DaoList = ({ daoData }: { daoData: ITransformedDao[] }) => {
  return <DaoCards daoData={daoData} />;
};

const CardListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 2rem;
  justify-content: center;
  @media (min-width: ${breakpoints.xs}) {
    justify-content: flex-start;
  }
`;

const DaoCards = ({ daoData }: { daoData: ITransformedDao[] }) => (
  <CardListBox>
    {daoData.map((dao) => (
      <DaoCard key={dao.id} {...dao} />
    ))}
  </CardListBox>
);
