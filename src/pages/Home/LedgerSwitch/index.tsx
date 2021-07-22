import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import theme from './theme.module.scss';

function LedgerSwitch({
  ledgerType,
  onTypeSelect,
}: {
  ledgerType: string;
  onTypeSelect: (ledgerType: 'simple' | 'duplicate' | 'complicated') => void;
}) {
  return (
    <div className={theme.ledgerSwitchContainer}>
      <ButtonGroup color="secondary">
        <Button
          variant={ledgerType === 'simple' ? 'contained' : 'outlined'}
          onClick={() => onTypeSelect('simple')}
        >
          Simple
        </Button>
        <Button
          variant={ledgerType === 'duplicate' ? 'contained' : 'outlined'}
          onClick={() => onTypeSelect('duplicate')}
        >
          Duplicate
        </Button>
        <Button
          variant={ledgerType === 'complicated' ? 'contained' : 'outlined'}
          onClick={() => onTypeSelect('complicated')}
        >
          Complicated
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default LedgerSwitch;
