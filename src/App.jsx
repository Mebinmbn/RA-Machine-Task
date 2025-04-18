import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
