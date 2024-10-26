import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Header from "./components/Header";
import Add from "./components/Add";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
