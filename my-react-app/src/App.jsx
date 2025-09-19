import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderSection } from "./pages/HeaderSection";
import { ContextSection } from "./pages/ContextSection";
import { ConclusionSection } from "./pages/ConclusionSection";
import { TimelineSection } from "./pages/TimelineSection";
import { ApplicationSection } from "./pages/ApplicationSection";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<HeaderSection />} />
        <Route path="/context" element={<ContextSection />} />
        <Route path="/conclusion" element={<ConclusionSection />} />
        <Route path="/timeline" element={<TimelineSection />} />
        <Route path="/application" element={<ApplicationSection />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
