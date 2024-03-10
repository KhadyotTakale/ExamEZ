import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Information from "./components/Information";
import LoginPage from "./components/Login";
import Signup from './components/Signup';
import Chapters from './components/Chapters';
import Realnumbers from './components/Realnumbers';
import Listing from './components/Listing';
import TutorLogin from './components/TutorLogin';
import StudentLogin from './components/StudentLogin';
import InstituteLogin from './components/InstituteLogin';
import TutorSignup from './components/TutorSignup';
import StudentSignup from './components/StudentSignup';
import InstituteSignup from './components/InstituteSignup';
import InstituteManagement from './components/InstituteManagement';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/realnumbers" element={<Realnumbers />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/tutorlogin" element={<TutorLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/institutelogin" element={<InstituteLogin />} />
        <Route path="/tutorsignup" element={<TutorSignup />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/institutesignup" element={<InstituteSignup />} />
        <Route path="/institutemanagement" element={<InstituteManagement />} />


      </Routes>
    </Router>
  );
}

export default App;
