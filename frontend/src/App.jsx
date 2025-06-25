import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardHome from "./pages/DashBoardHome";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import Settings from "./pages/Settings";
import Dashboard from "./pages/DashBoard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
