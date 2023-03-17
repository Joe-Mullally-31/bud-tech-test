import { render, screen, waitFor } from "@testing-library/react";
import { Accounts } from ".";

describe("accounts", () => {
  test("it should display accounts total", async () => {
    render(<Accounts />);

    await waitFor(() =>
      expect(screen.getByText("£200,000.00")).toBeInTheDocument()
    );
  });
});
