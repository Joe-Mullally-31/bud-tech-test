import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TransactionHistory } from ".";
import { server } from "../../../jest.setup";
import { rest } from "msw";

describe("transaction history", () => {
  test("the expenses tab should be shown by default", async () => {
    render(<TransactionHistory />);

    expect(screen.getByText("Transaction History")).toBeInTheDocument();

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });

    expect(expensesTabTrigger).toHaveAttribute("data-state", "active");

    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(await screen.findByText("-€20.25")).toBeInTheDocument();
  });

  test("each tab shows loading state", () => {
    server.use(
      rest.get("/api/accounts", (req, res, ctx) =>
        res(ctx.delay(2000000), ctx.status(200), ctx.json("foo"))
      )
    );
    render(<TransactionHistory />);

    expect(
      screen.getByRole("status", { name: "Transaction data loading" })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Income" }));

    expect(
      screen.getByRole("status", { name: "Transaction data loading" })
    ).toBeInTheDocument();
  });

  test.skip("changing between the expenses and income tabs should show different transactions", async () => {
    render(<TransactionHistory />);

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });
    const incomeTabTrigger = screen.getByRole("tab", {
      name: "Income",
    });
    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });
    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(incomeTable).not.toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("-€20.25")).toBeInTheDocument()
    );

    fireEvent.click(incomeTabTrigger);

    await waitFor(() =>
      expect(incomeTabTrigger).toHaveAttribute("data-state", "active")
    );
    expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
    expect(screen.queryByText("-€20.25")).not.toBeInTheDocument();
  });
});
