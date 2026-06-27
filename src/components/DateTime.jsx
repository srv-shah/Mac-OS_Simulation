import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.toLocaleString('en-US', { weekday: 'short' }).toLowerCase().replace(/^\w/, c => c.toUpperCase());
      const month = now.toLocaleString('en-US', { month: 'short' }).toLowerCase();
      const date = now.getDate();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const time = `${hours}:${minutes} ${ampm}`;
      setCurrentTime(`${day} ${month} ${date} ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>{currentTime}</div>
  )
}

export default DateTime