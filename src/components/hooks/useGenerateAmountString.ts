enum CURRENCY_ISO {
  GBP = "GBP",
  EUR = "EUR",
  USD = "USD",
}
type TransactionAmount = {
  value: number;
  currency_iso: string;
};
type AccountsAmount = {
  value: number;
  currency: string;
};

export const useGenerateAmountString = (
  amount: AccountsAmount | TransactionAmount
) => {
  const { value } = amount;

  const currencyValue =
    "currency_iso" in amount ? amount.currency_iso : amount.currency;
  switch (currencyValue) {
    case CURRENCY_ISO.GBP:
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(value);
    case CURRENCY_ISO.EUR:
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    case CURRENCY_ISO.USD:
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    default:
      console.log(`Unkown currency_iso: ${currencyValue}`);
      return `${currencyValue}${value}`;
  }
};
