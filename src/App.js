import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Fintech Hackathon</h1>
        <p>Innovating financial solutions for a better future.</p>
      </header>

      <section className="section">
        <h2>About Our Project</h2>
        <p>
          This project aims to develop a credit card management system that helps users track their credit score,
          provides alerts for payment reminders, and offers financial tips based on user data.
        </p>
        <button className="cta-button" onClick={() => alert('Demo Coming Soon!')}>
          See Demo
        </button>
      </section>

      <footer className="App-footer">
        <p>Contact us at <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;
