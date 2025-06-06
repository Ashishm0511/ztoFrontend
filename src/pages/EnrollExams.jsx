import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollExams.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const EnrollExams = () => {
  const navigate = useNavigate();

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };
  

  return (
    <>
      <Navbar />
      
      <div className="enroll-exams-container">
          
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh", // enough height for vertical centering
    backgroundColor: "#f7f8fa", // optional background
  }}
>
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
    }}
  >
    <h2 style={{ marginBottom: "20px", color: "#2a4d8f" }}>
      Student Exam Registration
    </h2>

    <input
      type="text"
      placeholder="Enter your name"
      style={inputStyle}
    />
    <input
      type="text"
      placeholder="Enter your class"
      style={inputStyle}
    />
    <input
      type="email"
      placeholder="Enter your email"
      style={inputStyle}
    />
    <input
      type="text"
      placeholder="Enter your roll number"
      style={inputStyle}
    />
    <select style={inputStyle}>
      <option value="">Select Subject</option>
      <option value="maths">Mathematics</option>
      <option value="science">Science</option>
      <option value="english">English</option>
      <option value="computers">Computer Science</option>
    </select>

    <button
      type="submit"
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        border: "none",
        backgroundColor: "#2a4d8f",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    >
      Register
    </button>
  </form>
</div>
 
        </div>
      <Footer />
    </>
    
  );
};

export default EnrollExams;