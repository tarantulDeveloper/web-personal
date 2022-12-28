import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorksPage from "./pages/WorksPage";
import EducationPage from "./pages/EducationPage";
import ContactsPage from "./pages/ContactsPage";
import FeedbackPage from "./pages/FeedbackPage";
import MyStackPage from "./pages/MyStackPage";
import ExperiencePage from "./pages/ExperiencePage";
import MySoftSkillsPage from "./pages/MySoftSkillsPage";
import AssistantsPage from "./pages/AssistantsPage";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="feedbacks" element={<FeedbackPage />} />
        <Route path="mystack" element={<MyStackPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="soft-skills" element={<MySoftSkillsPage />} />
        <Route path="assistants" element={<AssistantsPage />} />
        <Route path="price" element={<PricePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
