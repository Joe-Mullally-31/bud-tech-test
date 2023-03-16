import reactLogo from "./assets/react.svg";
import "./app.css";
import { Home } from "./views/home";

const App = () => (
  <>
    <header>
      <img src="/public/bankly.svg" className="logo" alt="Bud logo" />
    </header>
    <div className="app">
      <div className="app__row"></div>
      <Home />
    </div>
  </>
);

export default App;
