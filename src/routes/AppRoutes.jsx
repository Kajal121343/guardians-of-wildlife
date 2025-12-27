import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import JoinTeam from "../pages/JoinTeam";
import Wildlife from "../pages/Wildlife";
import Programs from "../pages/Programs";
import ContactUs from "../pages/ContactUs"; 
  import ProgramDetails from "../pages/ProgramDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/join-team" element={<JoinTeam />} />
      <Route path="/wildlife" element={<Wildlife />} />
      <Route path="/programs" element={<Programs />} />
      {/* <Route path="/contact-us" element={<ContactUs />} />  ✅ Route */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/programs/:id" element={<ProgramDetails />} /> 
    </Routes>
  );
};

export default AppRoutes;
