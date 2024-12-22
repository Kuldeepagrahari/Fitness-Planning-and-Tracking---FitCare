import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    foodPreference: "",
    allergies: "",
    fitnessGoal: "",
    healthConditions: "",
    medications: "",
    stressLevels: "",
    sleepQuality: "",
    mealTiming: "",
    workoutPreference: "",
    timeAvailability: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };
 
  return (
    <div className="profile-page">
      <div className="profile-header">
        
        <h1 style={{fontSize:"60px", marginBottom:"20px", textShadow:"1px 1px 10px rgb(200, 200, 200)"}}>Profile</h1>
        <p style={{fontSize:"25px", color:"var(--primary-color)", fontWeight:"bold"}}>Provide the required details to customize your diet and workout plan.</p>
      </div>
      <form onSubmit={handleSubmit} className="profile-form">
        {/* Weight, Height, and Age */}
        <div className="form-group short">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
          />
        </div>
        <div className="form-group short">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height"
          />
        </div>
        <div className="form-group short">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>

        {/* Gender and Activity Level */}
        <div className="form-group short">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group short">
          <label htmlFor="activityLevel">Activity Level:</label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderately_active">Moderately Active</option>
            <option value="very_active">Very Active</option>
          </select>
        </div>

        {/* Food Preferences */}
        <div className="form-group short">
          <label htmlFor="foodPreference">Food Preference:</label>
          <select
            id="foodPreference"
            name="foodPreference"
            value={formData.foodPreference}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <div className="form-group medium">
          <label htmlFor="allergies">Allergies (if any):</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="e.g., nuts, dairy"
          />
        </div>

        {/* Fitness Goals */}
        <div className="form-group short">
          <label htmlFor="fitnessGoal">Fitness Goal:</label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="maintain_weight">Maintain Weight</option>
            <option value="endurance">Improve Endurance</option>
          </select>
        </div>

        {/* Health Conditions and Medications */}
        <div className="form-group long">
          <label htmlFor="healthConditions">Health Conditions:</label>
          <textarea
            id="healthConditions"
            name="healthConditions"
            value={formData.healthConditions}
            onChange={handleChange}
            placeholder="Mention ongoing or past health conditions"
          ></textarea>
        </div>
        <div className="form-group long">
          <label htmlFor="medications">Medications:</label>
          <textarea
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            placeholder="List medications (if any)"
          ></textarea>
        </div>

        {/* Additional Info */}
        <div className="form-group short">
          <label htmlFor="stressLevels">Stress Levels:</label>
          <input
            type="text"
            id="stressLevels"
            name="stressLevels"
            value={formData.stressLevels}
            onChange={handleChange}
            placeholder="Low, Medium, High"
          />
        </div>
        <div className="form-group short">
          <label htmlFor="sleepQuality">Sleep Quality:</label>
          <input
            type="text"
            id="sleepQuality"
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            placeholder="Poor, Average, Good"
          />
        </div>
        <div style={{display:"flex", gap:"20px"}}>
        {/* Preferences */}
        <div className="form-group medium">
          <label htmlFor="mealTiming">Preferred Meal Timing:</label>
          <input
            type="text"
            id="mealTiming"
            name="mealTiming"
            value={formData.mealTiming}
            onChange={handleChange}
            placeholder="e.g., 8 AM - 8 PM"
          />
        </div>
        <div className="form-group medium">
          <label htmlFor="workoutPreference">Workout Preference:</label>
          <input
            type="text"
            id="workoutPreference"
            name="workoutPreference"
            value={formData.workoutPreference}
            onChange={handleChange}
            placeholder="e.g., Gym, Home Workout"
          />
        </div>
        </div>
        <div style={{display:"flex", gap:"20px"}}>
        <div className="form-group medium">
          <label htmlFor="timeAvailability">Time Availability:</label>
          <input
            type="text"
            id="timeAvailability"
            name="timeAvailability"
            value={formData.timeAvailability}
            onChange={handleChange}
            placeholder="e.g., 30 mins/day"
          />
        </div>
        <div className="form-group medium">
         
          <label htmlFor="fitnessGoal">Location</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="weight_loss">City</option>
            <option value="muscle_gain">Town</option>
            <option value="maintain_weight">Village</option>
            
          </select>
        </div></div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
