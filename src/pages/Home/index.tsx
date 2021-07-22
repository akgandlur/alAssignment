import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import HomeLayout from 'components/HomeLayout';

import BalanceWidget from './BalanceWidget';
import TransactionTable from './TransactionTable';
import TransactionDetail from './TransactionDetail';
import LedgerSwitch from './LedgerSwitch';

import transactionFetch from 'utils/transactionFetch';

import theme from './theme.module.scss';

function App() {
  const [transactions, setTransactions] = useState(transactionFetch('simple'));
  const [transactionOnDisplay, setTransactionOnDisplay] = useState<string>('');
  const [ledgerType, setLedgerType] = useState<'simple' | 'duplicate' | 'complicated'>('simple');

  useEffect(() => {
    // watch for changes from the ledger switch component
    setTransactions(transactionFetch(ledgerType));
  }, [ledgerType]);

  return (
    <HomeLayout>
      <div className={theme.homeContainer}>
        <div className={theme.tabs}>
          {/* A section to house tabs for future sections like transfer of funds etc, or settings */}
          <IconButton color="primary" aria-label="upload picture" component="span">
            <HomeIcon />
          </IconButton>
        </div>
        <div className={theme.tabContent}>
          <div className={theme.container}>
            <div className={theme.transactionsContainer}>
              {/* display current ledger balance */}
              <BalanceWidget balance={transactions[0].balance} />
              {/* Switch between the different ledger json files we have */}
              <LedgerSwitch ledgerType={ledgerType} onTypeSelect={setLedgerType} />
              <TransactionTable
                transactions={transactions}
                transactionOnDisplay={transactionOnDisplay}
                onTransactionSelect={(activityId: string) => setTransactionOnDisplay(activityId)}
              />
            </div>
            {/* Show full transaction details on the side */}
            <TransactionDetail activityId={transactionOnDisplay} transactions={transactions} />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default App;
