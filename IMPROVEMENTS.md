1. Update the `accounts` api so that it returns currency_iso instead of currency. Having both endpoints with the same shape makes for cleaner handling on FE. I have to handle both `currenccy` and `currency_iso` in `useGenerateAmountString`.
2. I think it is nicer to keep one component per file (i.e. not like how `transactions/index.tsx` looks). I also prefer to name the component file after the component rather than `index.tsx` as I find i hard to navigate when you have 20 tabs all called the same! But I appreciate everyone has their preferences.




...also: There might be a typo on the Figma? It displays "$1,00.00" in the accounts section which doesn't look quite correct?
