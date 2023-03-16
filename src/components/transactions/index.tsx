import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { Transaction as TransactionType } from "../../../types";
import { ErrorMessage } from "../errorMessage";
import { Loading } from "../loading";
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
    <>
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
    </>
  );
};

type IncomeProps = {
  transactions: TransactionType[] | undefined;
};
const Income = ({ transactions }: IncomeProps) => {
  return (
    <>
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
    </>
  );
};

export const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/transactions", { method: "GET" }).then(async (res) => {
      if (res.ok) {
        setTransactions(await res.json());
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="expenses">
          {loading && <Loading />}
          {error && <ErrorMessage />}
          {!loading && !error && <Expenses transactions={transactions} />}
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="income">
          {loading && <Loading />}
          {!loading && !error && <Income transactions={transactions} />}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};
