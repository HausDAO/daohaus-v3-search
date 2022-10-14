// import { FormBuilder } from '@daohaus/haus-form-builder';
// import { CustomFields } from '../legos/config';
// import { TABULA_FORMS } from '../legos/form';

import { FormBuilder } from '@daohaus/haus-form-builder';
import { useTxBuilder } from '@daohaus/tx-builder-feature';
import { Button } from '@daohaus/ui';
import { LOCAL_ABI } from '@daohaus/abi-utilities';

const formLego = {
  id: 'SIGNAL',
  title: 'Signal Form',
  subtitle: 'Signal Proposal',
  description: 'Ratify on chain using a DAO proposal',
  requiredFields: { title: true, description: true },
  log: true,
  // tx: TX.POST_SIGNAL,
  fields: [
    // FIELD.TITLE,
    // FIELD.DESCRIPTION,
    // FIELD.LINK,
    // ...PROPOSAL_SETTINGS_FIELDS,
    {
      id: 'title',
      type: 'input',
      label: 'Proposal Name',
      placeholder: 'Enter title',
    },
  ],
};

export function FormTest() {
  const { fireTransaction } = useTxBuilder();

  // return <FormBuilder form={formLego} />;
  // return null;

  const handleClick = async () => {
    console.log('poopin');
    await fireTransaction({
      tx: {
        id: 'APPROVE_TOKEN',
        contract: {
          type: 'static',
          contractName: 'ERC20',
          abi: LOCAL_ABI.ERC20,
          targetAddress: '.tokenAddress',
        },
        method: 'approve',
        args: [
          {
            type: 'static',
            value: '0xEd6AA9879Ed6ba07411C3224F748Dc65D3f8e685',
          },
          { type: 'static', value: '0' },
        ],
      },
      callerState: {
        tokenAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      },
      lifeCycleFns: {},
    });
  };

  return <Button onClick={handleClick}>make tx</Button>;
}

export default FormTest;
