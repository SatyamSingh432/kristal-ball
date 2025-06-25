import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardHome from "./pages/DashBoardHome";

import Dashboard from "./pages/DashBoard.jsx";
export default function App() {
  return (
    <Router>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
      </Route>
    </Router>
  );
}
