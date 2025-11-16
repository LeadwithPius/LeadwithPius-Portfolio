import React, { useState, useEffect } from 'react';

// Define the timezones and their display names
const timezones = [
  { city: "Lusaka (CAT)", tz: "Africa/Lusaka" },
  { city: "Nairobi (EAT)", tz: "Africa/Nairobi" }, // <-- Nairobi Added Here
  { city: "London (GMT/BST)", tz: "Europe/London" },
  { city: "New York (EST/EDT)", tz: "America/New_York" },
];

// Helper function to get the formatted time string for a given timezone
const getFormattedTime = (timezone) => {
  const now = new Date();
  
  // Use Intl.DateTimeFormat for robust timezone handling and formatting
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone.tz,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Display in 12-hour format with AM/PM
  });

  return formatter.format(now);
};

const TimezoneDisplay = () => {
  // Initialize state with the current formatted times
  const [times, setTimes] = useState(
    timezones.map(tz => ({
      city: tz.city,
      time: getFormattedTime(tz),
    }))
  );

  useEffect(() => {
    // Update the time every second (1000ms)
    const timerId = setInterval(() => {
      setTimes(prevTimes =>
        prevTimes.map(item => {
          // Find the corresponding timezone object to use the helper function
          const tzObject = timezones.find(t => t.city === item.city);
          return {
            ...item,
            time: getFormattedTime(tzObject),
          };
        })
      );
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="timezone-container">
      <h3>Global Time</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {times.map((item, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>{item.city}:</span> {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimezoneDisplay;