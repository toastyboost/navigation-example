import * as React from "react";

const now = new Date();

export const Timer = ({ offset }) => {
  const [date, setDate] = React.useState(formatDate(now, offset));
    
  React.useEffect(() => {
    const timer = setInterval(() => setDate(formatDate(now, offset)), 1000);
    return () => clearInterval(timer);
  });

  return date
}

function formatDate(date, offset) {

  function withZero(num) {
    return num > 9 ? num : `0${num}`;
  }

  const offsetDifference = offset + date.getTimezoneOffset();
  const d = new Date(date.getTime() + offsetDifference * 60 * 1000);
  const hours = withZero(d.getHours());
  const minutes = withZero(d.getMinutes());

  return `${hours}:${minutes}`
}
 
 
 
 