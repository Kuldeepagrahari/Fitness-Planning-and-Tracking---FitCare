import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <div className="head">
  <div className="header">
    <h1>Your Journey to a Healthier You Starts Here!</h1>
    <p>
    FitCare empowers your fitness journey with tools for tracking workouts, planning diets, and living healthier—all in one place.
        </p>
    <a href="/sign-up" className="get-started">Get Started</a>
  </div>
  
      
</div>


      {/* About Section */}
   

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
