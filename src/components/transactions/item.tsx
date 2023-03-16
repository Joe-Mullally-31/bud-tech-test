import type { Transaction as TransactionType } from "../../../types";
import { useGenerateAmountString } from "../hooks/useGenerateAmountString";
import { Avatar } from "./avatar";

type Props = {
  transaction: TransactionType;
};

export const Transaction = ({ transaction }: Props) => {
  const { description, category, date, amount } = transaction;

  const value = useGenerateAmountString(amount);

  return (
    <tr>
      <td>
        <div className="transaction-detail">
          <Avatar name={description} />
          <div className="transaction-description">
            {description}
            <div className="transaction-category">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <div>{new Date(date).toDateString()}</div>
      </td>
      <td className="transaction-amount">
        <div className="amount">{value}</div>
      </td>
    </tr>
  );
};
