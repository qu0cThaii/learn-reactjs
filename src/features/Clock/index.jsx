import React, { useEffect, useState } from "react";

Clock.propTypes = {};
function formatDate(date) {
  const Hours = `0${date.getHours()}`.slice(-2);
  const Minutes = `0${date.getMinutes()}`.slice(-2);
  const Seconds = `0${date.getSeconds()}`.slice(-2);
  return `${Hours}:${Minutes}:${Seconds}`;
}
function Clock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return <p>{timeString}</p>;
}

export default Clock;
