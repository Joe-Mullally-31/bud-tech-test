import type { Account } from "../../../types";
import { useGenerateAmountString } from "../hooks/useGenerateAmountString";
import "./index.css";

type Props = {
  account: Account;
};

export const AccountItem = ({ account }: Props) => {
  const {balance: {amount}} = account
  const value = useGenerateAmountString(amount);

  return (
    <div className="account">
      <div className="total">Total {amount.currency}</div>
      <strong>{value}</strong>
    </div>
  );
};
