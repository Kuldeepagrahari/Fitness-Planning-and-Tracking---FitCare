import React, { useState } from "react";
import "./DietPlanner.css";

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    caloriesConsumed: "",
    caloriesBurned: "",
    proteinIntake: "",
    carbIntake: "",
    fatIntake: "",
  });

  const [dietPlan, setDietPlan] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateDietPlan = async () => {
    // Simulating API call with mock data
    const calculatedCalories = 2000 - (formData.caloriesBurned - formData.caloriesConsumed);
    const foodSuggestions = [
      { food: "Grilled Chicken Breast", calories: 300 },
      { food: "Steamed Vegetables", calories: 200 },
      { food: "Brown Rice", calories: 250 },
    ];
    const workoutSuggestions = [
      { workout: "Cardio (30 minutes)", caloriesBurned: 300 },
      { workout: "Strength Training (45 minutes)", caloriesBurned: 400 },
    ];

    setDietPlan({
      dailyCalories: calculatedCalories,
      protein: 150,
      carbs: 200,
      fats: 50,
    });

    setRecommendations({
      foods: foodSuggestions,
      workouts: workoutSuggestions,
    });
  };

  return (
    <div className="diet-planner">
      <h1>Diet Planner</h1>
      <div className="form-section">
        <h2>Enter Daily Health & Food Data</h2>
        <form>
          <div className="form-group">
            <label>
              Calories Consumed:
              <input
                type="number"
                name="caloriesConsumed"
                value={formData.caloriesConsumed}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Calories Burned:
              <input
                type="number"
                name="caloriesBurned"
                value={formData.caloriesBurned}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Protein Intake (g):
              <input
                type="number"
                name="proteinIntake"
                value={formData.proteinIntake}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Carb Intake (g):
              <input
                type="number"
                name="carbIntake"
                value={formData.carbIntake}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Fat Intake (g):
              <input
                type="number"
                name="fatIntake"
                value={formData.fatIntake}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="button" className="generate-button" onClick={generateDietPlan}>
            Generate Diet Plan
          </button>
        </form>
      </div>

      {dietPlan && (
        <div className="diet-plan-section">
          <h2>Your Diet Plan for Tomorrow</h2>
          <p>Daily Calorie Goal: {dietPlan.dailyCalories} kcal</p>
          <p>Protein: {dietPlan.protein} g</p>
          <p>Carbs: {dietPlan.carbs} g</p>
          <p>Fats: {dietPlan.fats} g</p>
        </div>
      )}

      {recommendations && (
        <div className="recommendations-section">
          <h2>Recommendations</h2>
          <div>
            <h3>Foods</h3>
            <ul>
              {recommendations.foods.map((item, index) => (
                <li key={index}>
                  {item.food} - {item.calories} kcal
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Workouts</h3>
            <ul>
              {recommendations.workouts.map((item, index) => (
                <li key={index}>
                  {item.workout} - Burns {item.caloriesBurned} kcal
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietPlanner;
