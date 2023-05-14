import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinIn from './componects/Sinin';
import Dash from './Pages/Dash';
import Generaldetail from './Pages/Generaldetails/Generaldetail';
import Experience from './Pages/Generaldetails/Expreience';
import Skills from './Pages/Generaldetails/Skills';
import Ho from './componects/Ho';
import About from './componects/About';
import { Message } from './componects/Messages';
import { Profile } from './componects/Profile';
import EditProfile from './Pages/Generaldetails/Editprofile';
import Organizationdetails from './Pages/Organizationaldetails/OrganizationDetail';
import Sinup from './componects/Sinup';
import Applicntsinup from './Pages/Generaldetails/Applicntsinup';
import Applicntsinin from './Pages/Generaldetails/ApplicntSinin';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SinIn />} /> */}
          <Route path="/home" element={<Ho />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/editprofile" element={<EditProfile />} />


          {/* <Route path="/sinup" element={<Sinup />} /> */}
          <Route path="/" element={<Dash />} />
          <Route path="/dash/applicant/applicntsinin" element={<Applicntsinin />} />

          <Route path="/dash/applicant/applicntsinup" element={<Applicntsinup />} />

          <Route path="/dash/:id/applicant/generaldata" element={<Generaldetail />} />
          <Route path="/applicant/generaldata/experience" element={<Experience />} />
          <Route path="/applicant/generaldata/experience/skills" element={<Skills />} />


          <Route path="/organization/Organizationdetails" element={<Organizationdetails />} />





        </Routes>
      </BrowserRouter>
    </div>
  )
}
