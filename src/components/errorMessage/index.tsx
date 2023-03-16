import "./index.css";

export const ErrorMessage = () => (
  <div
    className="error-message-container"
    role="alert"
    aria-label="Error loading transactions."
  >
    <h2>There was an error loading your transaction!</h2>
    <p>
      Please check your internet connection and try again later. Alternatively{" "}
      <a className="support-link" href="mailto: support@mail.co">
        contact support
      </a>
      .
    </p>
  </div>
);
