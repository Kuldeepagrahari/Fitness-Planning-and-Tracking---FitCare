import React from "react";
import "./Notification.css";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      message: "Your diet plan for tomorrow is ready!",
      timestamp: "10 minutes ago",
      type: "success",
    },
    {
      id: 2,
      message: "New workout recommendation added.",
      timestamp: "30 minutes ago",
      type: "info",
    },
    {
      id: 3,
      message: "Calorie goal not met today.",
      timestamp: "2 hours ago",
      type: "warning",
    },
  ];

  return (
    <div className="notification">
      <h1>Notifications</h1>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className={`notification-item ${notification.type}`}>
            <div className="icon">
              {notification.type === "success" && "✔️"}
              {notification.type === "info" && "ℹ️"}
              {notification.type === "warning" && "⚠️"}
            </div>
            <div className="content">
              <p className="message">{notification.message}</p>
              <span className="timestamp">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
