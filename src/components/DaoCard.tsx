import styled from 'styled-components';

import {
  charLimit,
  formatValueTo,
  fromWei,
  getNetworkName,
  readableNumbers,
  toBaseUnits,
  toWholeUnits,
} from '@daohaus/common-utilities';
import { ITransformedDao, ITransformedMembership } from '@daohaus/dao-data';
import {
  Badge,
  Bold,
  border,
  ParLg,
  ParMd,
  ParSm,
  ProfileAvatar,
  Tag,
} from '@daohaus/ui';
import { ButtonLink } from './ButtonLink';
import { useSearch } from '../contexts/SearchContext';

const StyledDaoCard = styled.div`
  background-color: ${(props) => props.theme.card.bg};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 34rem;
  min-width: 26rem;
  border: 1px solid ${(props) => props.theme.card.border};
  padding: 2.4rem;
  border-radius: ${border.radius};
  .top-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.3rem;
  }

  .badge {
    transform: translateX(-0.8rem);
  }
  .dao-description {
    margin: 1rem 0;
  }
  .stats-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    p {
      margin-bottom: 0.6rem;
    }
  }
  .tag-box {
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
    div {
      margin-right: 1.5rem;
    }
  }
`;

export const DaoCard = ({
  id,
  activeMemberCount,
  shareTokenSymbol,
  totalShares,
  proposalCount,
  name,
  description,
}: ITransformedDao) => {
  const { chainId } = useSearch();
  return (
    <StyledDaoCard className="dao-card">
      <div className="top-box">
        <div className="alert-box">
          <ProfileAvatar size="xl" address={id} />
        </div>
      </div>
      <ParLg className="dao-title">
        {name ? charLimit(name, 21) : charLimit(id, 21)}{' '}
      </ParLg>

      {description && (
        <ParSm className="dao-description">{charLimit(description, 100)}</ParSm>
      )}
      <div className="stats-box">
        {activeMemberCount && (
          <ParMd>
            <Bold>{activeMemberCount}</Bold>{' '}
            {parseInt(activeMemberCount) === 1 ? 'Member' : 'Members'}
          </ParMd>
        )}
        {proposalCount && (
          <ParMd>
            <Bold>{proposalCount}</Bold>{' '}
            {parseInt(proposalCount) === 1 ? 'Proposal' : 'Proposals'}
          </ParMd>
        )}
        {shareTokenSymbol && (
          <ParMd>
            <Bold>{toWholeUnits(totalShares)}</Bold>{' '}
            {/* <Bold>
              {formatValueTo({
                value: fromWei(totalShares),
                decimals: 2,
                format: 'numberShort',
              })}
            </Bold> */}
            {`${charLimit(shareTokenSymbol, 20)} tokens in circulation`}
          </ParMd>
        )}
      </div>
      <div className="tag-box">
        {chainId && <Tag tagColor="red">{getNetworkName(chainId)}</Tag>}
        <Tag tagColor="blue">Moloch V3</Tag>
      </div>
      <ButtonLink
        secondary
        fullWidth
        centerAlign
        href={`https://admin.daohaus.fun/molochv3/${chainId}/${id}`}
        linkType="external"
        target="_blank"
        rel="noreferrer"
      >
        Go
      </ButtonLink>
    </StyledDaoCard>
  );
};
