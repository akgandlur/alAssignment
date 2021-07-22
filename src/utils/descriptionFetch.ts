type Transaction = {
  type: string;
  method?: string;
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

function descriptionFetch(transaction: Transaction) {
  switch (transaction.type) {
    case 'DEPOSIT':
      return `Deposit via ${transaction.method} to ${transaction.destination.description}`;
    case 'TRANSFER':
      return `Transferred from ${transaction.source.description} to ${transaction.destination.description}`;
    case 'WITHDRAWAL':
      return `Debited via ${transaction.method} from ${transaction.source.description} to ${transaction.destination.description}`;
    case 'REFUND':
      return `Refund received from ${transaction.source.description} to ${transaction.destination.description}`;
    case 'INVESTMENT':
      return `Invested in ${transaction.destination.description}`;
    default:
      return transaction.destination.description;
  }
}

export default descriptionFetch;
