import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { showSolution } from "./workshop";

// The Home page and the Workshop map are already finished — use them as examples!
import HomePage from "./pages/HomePage";
import WorkshopPage from "./pages/WorkshopPage";

// 👩‍💻 The pages YOU build during the workshop
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

// ✅ Finished versions (only shown when switched on in workshop.ts)
import AboutSolution from "./solutions/AboutPage";
import TeamSolution from "./solutions/TeamPage";
import EventsSolution from "./solutions/EventsPage";
import ContactSolution from "./solutions/ContactPage";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={showSolution.about ? <AboutSolution /> : <AboutPage />} />
          <Route path="/team" element={showSolution.team ? <TeamSolution /> : <TeamPage />} />
          <Route path="/events" element={showSolution.events ? <EventsSolution /> : <EventsPage />} />
          <Route path="/contact" element={showSolution.contact ? <ContactSolution /> : <ContactPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="*" element={<h1 className="page-title">Oops, page not found 🙈</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
