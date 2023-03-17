1. `useGenerateAmountString` is probably a bit overkill at the moment, I could probably replace it with just calling `Intl.NumberFormat` in the components. However this hook could be used later if additional functionality was added, such as convertion of currency. Would want to add tests using react-hook testing library.
2. Update the `accounts` api so that it returns currency_iso instead of currency. Having both endpoints with the same shape makes for cleaner handling on FE. I have handled both `currenccy` and `currency_iso` in `useGenerateAmountString`.
3. I think it is nicer to keep one component per file (i.e. not like how `transactions/index.tsx` looks). I also prefer to name the component file after the component rather than `index.tsx` as I find i hard to navigate when you have 20 tabs all called the same! But I appreciate everyone has their preferences.
4. Could implement react query (https://react-query-v3.tanstack.com/). If the server response from transactions is slow, this would allow the response to be cached locally so doesn't have to be requested on every refresh.


# Ideas for features
* Filtering on transactions, e.g. only ones in £.
* Search transactions.
* Currency conversion. 
* Button to refresh transaction history.
* Pagination of transactions as it is likely to get very long. React query would be good choice for this REST api (apollo if using GraphQL)





...also: There might be a typo on the Figma? It displays "$1,00.00" in the accounts section which doesn't look quite correct?
