import { truncateAddress } from '@daohaus/common-utilities';
import { Button, DataSm, DataXs, Tooltip } from '@daohaus/ui';
import styled from 'styled-components';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useNetwork,
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const AddressIndicator = styled.div`
  display: flex;
`;

const Profile = () => {
  const { isConnected, address } = useAccount();

  const { connect, connectors } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  console.log('chain', chain);

  if (isConnected)
    return (
      <div>
        <Button onClick={() => disconnect()}>Disconnect</Button>
        <AddressIndicator>
          {address && <DataXs>{truncateAddress(address)}</DataXs>}
          {chain?.unsupported && (
            <>
              <Tooltip content="Unsupported Network. Connect to Gnosis Chain or Goerli"></Tooltip>
            </>
          )}
        </AddressIndicator>
        {chain && !chain.unsupported && <DataXs>{chain?.name}</DataXs>}
      </div>
    );
  return <Button onClick={() => connect()}>Connect Wallet</Button>;
};

export default Profile;
