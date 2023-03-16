import { TailSpin } from "react-loader-spinner";
import "./index.css";

export const Loading = () => (
  <div className="loading-container">
    <TailSpin
      height="80"
      width="80"
      color="#1e1e27"
      ariaLabel="Transaction data loading"
      radius="1"
      wrapperStyle={{
        justifyContent: "center",
        paddingTop: "100px",
        columnFill: "balance",
      }}
      wrapperClass=""
      visible={true}
    />
    Loading...
  </div>
);
