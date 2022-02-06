import { HashRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={12} />
        <Route path="/23" element={23} />
      </Routes>
    </HashRouter>
  );
}
