import simpleTransactions from 'data/simple_ledger.json';
import duplicateTransactions from 'data/duplicate_ledger.json';
import complicatedTransactions from 'data/complicated_ledger.json';
import moment from 'moment';

type Transaction = {
  activity_id: string;
  date: string;
  type: string;
  method?: string;
  amount: number;
  balance: number;
  requester?: {
    type: string;
  };
  source: {
    type: string;
    description?: string;
  };
  destination: {
    type: string;
    description: string;
  };
};

function fetchJSONByLedger(ledgerType: string) {
  switch (ledgerType) {
    case 'simple':
      return simpleTransactions;
    case 'duplicate':
      return duplicateTransactions;
    case 'complicated':
      return complicatedTransactions;
    default:
      return simpleTransactions;
  }
}

function removeDuplicates(transactions: Transaction[]) {
  // Find and remove duplicages in the transactions array
  return transactions.filter(
    (tr, i, a) => a.findIndex((t) => t.activity_id === tr.activity_id) === i
  );
}

function sortChronologically(transactions: Transaction[]) {
  // Sort transactions to show the latest at the top
  return transactions.sort((a, b) => {
    if (moment(a.date) > moment(b.date)) return -1;
    if (moment(a.date) < moment(b.date)) return 1;
    if (a.activity_id > b.activity_id) return 1;
    if (a.activity_id < b.activity_id) return -1;
    return 0;
  });
}

function transactionFetch(ledgerType: string) {
  // Perform both operations on any fetched data
  return sortChronologically(removeDuplicates(fetchJSONByLedger(ledgerType)));
}

export default transactionFetch;
