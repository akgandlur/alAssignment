import React from 'react';

import theme from './theme.module.scss';

function BalanceWidget({ balance }: { balance: number }) {
  return (
    <div className={theme.balanceContainer}>
      <span className={theme.label}>BALANCE</span>
      <span className={theme.value}>$ {balance}</span>
    </div>
  );
}

export default BalanceWidget;
