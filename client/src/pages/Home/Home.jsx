import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <div className="head">
      <img src="header.jpg" alt=""/>
      <a href="/sign-up" className="get-started">
            Get Started
          </a>
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2>Welcome to FitCare</h2>
        <p>
          FitCare is designed to help you take control of your fitness journey.
          Whether you're tracking your workouts, planning a diet, or simply
          trying to live a healthier life, FitCare offers the tools you need to
          succeed.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How to Use FitCare</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Sign Up</h3>
            <p>Create your account to get started and access all features.</p>
          </div>
          <div className="step">
            <h3>Step 2: Set Your Goals</h3>
            <p>
              Define your fitness objectives, whether it's weight loss, muscle
              gain, or simply staying active.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Plan Your Journey</h3>
            <p>
              Use our tools like the diet planner, workout tracker, and progress
              analyzer to stay on track.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose FitCare?</h2>
        <ul>
          <li>
            Personalized tools to meet your health and fitness needs.
          </li>
          <li>
            Easy-to-use interface with all-in-one fitness management.
          </li>
          <li>
            Regular insights and analytics to monitor your progress.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
