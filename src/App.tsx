import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Infrastructure } from './pages/Infrastructure';
import { BeyondAcademics } from './pages/BeyondAcademics';
import { Hostel } from './pages/Hostel';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

// Nested About Pages
import { Overview } from './pages/about/Overview';
import { CbsePolicies } from './pages/about/CbsePolicies';
import { ManagingCommittee } from './pages/about/ManagingCommittee';
import { Blog } from './pages/about/Blog';

// Nested Academics Pages
import { Faculty } from './pages/academics/Faculty';
import { AssessmentPolicy } from './pages/academics/AssessmentPolicy';

// Nested Admission Pages
import { AdmissionProcess } from './pages/admission/AdmissionProcess';
import { ApplyOnline } from './pages/admission/ApplyOnline';
import { InteractionSyllabus } from './pages/admission/InteractionSyllabus';
import { FeeStructure } from './pages/admission/FeeStructure';
import { Enquiry } from './pages/admission/Enquiry';
import { DownloadProspectus } from './pages/admission/DownloadProspectus';
import { Faq } from './pages/admission/Faq';

// Nested Alumni Pages
import { AlumniOverview } from './pages/alumni/AlumniOverview';
import { Registration } from './pages/alumni/Registration';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Top-Level Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/beyond-academics" element={<BeyondAcademics />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/login" element={<Login />} />

          {/* About Us Sub-routes */}
          <Route path="/about">
            <Route path="overview" element={<Overview />} />
            <Route path="policies" element={<CbsePolicies />} />
            <Route path="managing-committee" element={<ManagingCommittee />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Academics Sub-routes */}
          <Route path="/academics">
            <Route path="faculty" element={<Faculty />} />
            <Route path="assessment-policy" element={<AssessmentPolicy />} />
          </Route>

          {/* Admission Sub-routes */}
          <Route path="/admission">
            <Route path="process" element={<AdmissionProcess />} />
            <Route path="apply" element={<ApplyOnline />} />
            <Route path="interaction-syllabus" element={<InteractionSyllabus />} />
            <Route path="fee-structure" element={<FeeStructure />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="prospectus" element={<DownloadProspectus />} />
            <Route path="faq" element={<Faq />} />
          </Route>

          {/* Alumni Sub-routes */}
          <Route path="/alumni">
            <Route path="overview" element={<AlumniOverview />} />
            <Route path="register" element={<Registration />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer className="bg-blue-950 text-gray-400 py-8 text-center text-xs border-t border-blue-900">
        © 2026 Pavna International School. Built with React & TypeScript.
      </footer>
    </div>
  );
};

export default App;