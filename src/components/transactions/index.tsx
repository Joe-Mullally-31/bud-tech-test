import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Transaction as TransactionType } from "../../../types";
import "./index.css";
import { Transaction } from "./item";

const isExpense = (transaction: TransactionType) =>
  transaction.amount.value < 0;
const isIncome = (transaction: TransactionType) => transaction.amount.value > 0;

type ExpensesProps = {
  transactions: TransactionType[] | undefined;
};
const Expenses = ({ transactions }: ExpensesProps) => {
  return (
    <table aria-label="Expenses">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.filter(isExpense).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

type IncomeProps = {
  transactions: TransactionType[] | undefined;
};
const Income = ({ transactions }: IncomeProps) => {
  return (
    <table aria-label="Income">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.filter(isIncome).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>();

  fetch("/api/transactions", { method: "GET" })
    .then((res) => res.json())
    .then(setTransactions);
  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="expenses">
          <Expenses transactions={transactions} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="income">
          <Income transactions={transactions} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};
