import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import descriptionFetch from 'utils/descriptionFetch';

import theme from './theme.module.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#000',
    fontWeight: 700,
    border: 'none',
  },
  body: {
    borderColor: '#fde4bd',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#fdf7ee',
  },
  head: {
    backgroundColor: '#FFE0B2',
  },
  hover: {
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: '#feeed7 !important',
    borderLeft: '5px solid #fcce8c',
  },
}))(TableRow);

type Transaction = {
  activity_id: string;
  type: string;
  date: string;
  amount: number;
  balance: number;
  destination: {
    type: string;
    description: string;
  };
  source: {
    type: string;
    description?: string;
  };
};

function TransactionTable({
  transactions,
  transactionOnDisplay,
  onTransactionSelect,
}: {
  transactions: Transaction[];
  transactionOnDisplay: string;
  onTransactionSelect: (activityId: string) => void;
}) {
  const classes = useStyles();
  return (
    <div className={theme.tableContainer}>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Transaction</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Balance</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <br />
          <TableBody>
            {transactions.map((transaction) => (
              <StyledTableRow
                key={transaction.activity_id}
                onClick={() => onTransactionSelect(transaction.activity_id)}
                hover={true}
                selected={transactionOnDisplay === transaction.activity_id}
              >
                <StyledTableCell>
                  <div className={theme.dateContainer}>
                    <span>{moment(transaction.date).format('DD MMMM YYYY')}</span>
                    <span className={theme.time}>
                      {moment(transaction.date).format('hh:mm:ss A')}
                    </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{transaction.type}</StyledTableCell>
                <StyledTableCell>{descriptionFetch(transaction)}</StyledTableCell>
                <StyledTableCell>
                  <span className={transaction.amount > 0 ? theme.credit : theme.debit}>
                    $ {transaction.amount}
                  </span>
                </StyledTableCell>
                <StyledTableCell>$ {transaction.balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransactionTable;
