import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import PastExams from './pages/PastExams';
// import EnrollExams from './pages/EnrollExams';

import EnrollExams from './pages/EnrollExams';
import Rewards from './pages/Rewards';

// import CheckResults from './pages/CheckResults';
// import CardLayout from './pages/Exams';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          {/* <Route path="/exams" element={<CardLayout/>} /> */}
          <Route path="/pastexams" element={<PastExams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/enroll-exams" element={<EnrollExams />} /> */}
          <Route path="/rewards" element={<Rewards />} />
          {/* <Route path="/check-results" element={<CheckResults />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;