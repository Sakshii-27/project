import React, { useState } from 'react';
import './Dashboard.css'; // Ensure this file exists for styling

function Dashboard() {
  // Sample data: Replace with dynamic data in a real app
  const [userData, setUserData] = useState({
    name: "Sakshi",
    currentBalance: 5000,
    goalAmount: 10000,
    progress: 0.5, // Represents 50% progress toward the goal
  });

  // Calculate the percentage progress
  const progressPercentage = Math.min(Math.max((userData.progress * 100).toFixed(0), 0), 100);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {userData.name}!</h1>
        <p>Your current balance is ${userData.currentBalance.toLocaleString()}</p>
      </header>

      <section className="financial-goal">
        <h2>Financial Goal: Save ${userData.goalAmount.toLocaleString()}</h2>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: progressPercentage >= 100 ? "green" : "blue",
            }}
          ></div>
        </div>
        <p>{progressPercentage}% toward your goal!</p>
        <button
          onClick={() => {
            setUserData((prev) => ({
              ...prev,
              progress: Math.min(prev.progress + 0.1, 1), // Increment progress by 10%
            }));
        }}
    >
        Update Progress
    </button>
    </section>

      <section className="account-summary">
        <h3>Account Summary</h3>
        <ul>
          <li><strong>Current Balance:</strong> ${userData.currentBalance.toLocaleString()}</li>
          <li><strong>Goal Amount:</strong> ${userData.goalAmount.toLocaleString()}</li>
          <li><strong>Progress:</strong> {progressPercentage}%</li>
        </ul>
      </section>

      <footer className="dashboard-footer">
        <button onClick={() => alert('Feature coming soon!')}>View More</button>
      </footer>
    </div>
  );
}

export default Dashboard;
