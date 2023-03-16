import { AccountItem } from "./item";
import "./index.css";
import { useEffect, useState } from "react";
import { Account } from "../../../types";

export const Accounts = () => {
  const [accounts, setAccounts] = useState<Account[]>();
  useEffect(() => {
    fetch("/api/accounts", { method: "GET" })
      .then((res) => res.json())
      .then(setAccounts);
  }, []);

  return (
    <div>
      <h1 className="align-left">Your accounts</h1>
      <div className="accounts">
        {accounts?.map((account) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </div>
  );
};
