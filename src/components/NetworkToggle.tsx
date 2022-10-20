import { DataXs, ParXs } from '@daohaus/ui';
import { useState } from 'react';
import styled from 'styled-components';

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
`;

const Radio = styled.div`
  display: flex;
  align-items: initial;
  gap: 0.4rem;
`;

const radios = [
  {
    value: '0x64',
    label: 'Gnosis Chain',
    id: 'gc',
  },
  {
    value: '0x5',
    label: 'Goerli',
    id: 'goerli',
  },
];

const NetworkToggle = () => {
  const [network, setNetwork] = useState('0x64');

  const updateNetwork = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNetwork(e.target.value);
  };
  return (
    <RadioGroup>
      <ParXs>Network:</ParXs>
      {radios.map((radio) => {
        return (
          <Radio key={radio.id}>
            <input
              type="radio"
              id={radio.id}
              value={radio.value}
              checked={network === radio.value}
              onChange={updateNetwork}
            />
            <DataXs>{radio.label}</DataXs>
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export default NetworkToggle;
