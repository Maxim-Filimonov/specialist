import { Link } from "react-router-dom";

function App() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/invoices/123">Latest invoice</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
  )
}

export default App;