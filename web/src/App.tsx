import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyles } from "./styles/global-styles";

export function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </div>
  )
}