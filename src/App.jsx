import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Layout from "./Components/Layout";
import Antdesign from "./Pages/Antdesign";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/antdesign" element={<Antdesign />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
