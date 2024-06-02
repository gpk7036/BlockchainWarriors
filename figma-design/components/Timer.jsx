"use client"

import { useEffect, useState } from "react";

export default function Timer() {
    const [hoursTens, setHoursTens] = useState(0);
    const [hoursOnes, setHoursOnes] = useState(0);
    const [minutesTens, setMinutesTens] = useState(0);
    const [minutesOnes, setMinutesOnes] = useState(0);
  
    useEffect(() => {
      const targetTime = new Date();
      targetTime.setHours(targetTime.getHours() + 2);
      targetTime.setMinutes(targetTime.getMinutes() + 30);
  
      const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = targetTime - currentTime;
  
        if (timeDifference <= 0) {
          clearInterval(interval);
          return;
        }
  
        const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
        const hrsTensDigit = Math.floor(remainingHours / 10);
        const hrsOnesDigit = remainingHours % 10;
        const minsTensDigit = Math.floor(remainingMinutes / 10);
        const minsOnesDigit = remainingMinutes % 10;
  
        setHoursTens(hrsTensDigit);
        setHoursOnes(hrsOnesDigit);
        setMinutesTens(minsTensDigit);
        setMinutesOnes(minsOnesDigit);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="timer flex gap-2">
        <div className="h-12 w-7 border border-red-600 flex justify-center items-center bg-black rounded-md">
          <p>{hoursTens}</p>
        </div>
        <div className="h-12 w-7 border border-red-600 flex justify-center items-center bg-black rounded-md">
          <p>{hoursOnes}</p>
        </div>
        <div className="h-12 w-7 text-red-600 text-6xl flex justify-center items-center">
          <p>:</p>
        </div>
        <div className="h-12 w-7 border border-red-600 flex justify-center items-center bg-black rounded-md">
          <p>{minutesTens}</p>
        </div>
        <div className="h-12 w-7 border border-red-600 flex justify-center items-center bg-black rounded-md">
          <p>{minutesOnes}</p>
        </div>
      </div>
    );
  }
  