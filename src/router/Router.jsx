import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
// import {HomePage} from '../Pages/HomePage'
import ProgramExplainers_p8 from "../Pages/ProgramExplainers_p8";
import HomePage from "../Pages/HomePage";
import CompanyProfile from "../Pages/CompanyProfile";
import StudyVillageStudents from "../Pages/StudyVillageStudents";
import Counsellors from "../Pages/Counsellors";
import PartnershipManager from "../Pages/PartnershipManager";
import StudyVillageResources from '../Pages/StudyVillageResources';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/company_profile" element={<CompanyProfile />} />
      <Route path="/your_students" element={<StudyVillageStudents />} />
      <Route path="/counsellors" element={<Counsellors />} />
      <Route path="/partnership_manager" element={<PartnershipManager />} />
      <Route path="/program_explainers" element={<ProgramExplainers_p8 />} />
      <Route path="/study_village_resources" element={<StudyVillageResources />} />

    </>
  )
);
