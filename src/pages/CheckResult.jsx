import React from "react";
import "./CheckResult.css";

const CheckResult = ({ resultData }) => {
  return (
    <div className="result-container">
      <div className="result-header">
        <h1>Exam Results</h1>
        <p>Access your examination results with detailed performance analysis</p>
      </div>

      {resultData ? (
        <div className="result-details">
          <h2>{resultData.studentName}</h2>
          <p><strong>Roll Number:</strong> {resultData.rollNumber}</p>
          <p><strong>Course:</strong> {resultData.course}</p>
          <p><strong>Total Marks:</strong> {resultData.totalMarks}</p>
          <p><strong>Marks Obtained:</strong> {resultData.marksObtained}</p>
          <p><strong>Percentage:</strong> {resultData.percentage}%</p>
          <p><strong>Status:</strong> {resultData.status}</p>

          <div className="subject-analysis">
            <h3>Subject-wise Analysis</h3>
            <ul>
              {resultData.subjects.map((subject, index) => (
                <li key={index}>
                  <span>{subject.name}</span>
                  <span>{subject.marks} / {subject.total}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="no-result">No result data available.</p>
      )}
    </div>
  );
};

export default CheckResult;
