import React from 'react';

const Countdown = () => {
  return (
    <div className="flex">
      <div className="px-4">
        <div className="text-4xl font-bold">20</div>
        <div className="text-lg">Days</div>
      </div>
      <div className="px-4">
        <div className="text-4xl font-bold">12</div>
        <div className="text-lg">Hours</div>
      </div>
      <div className="px-4">
        <div className="text-4xl font-bold">30</div>
        <div className="text-lg">Minutes</div>
      </div>
      <div className="px-4">
        <div className="text-4xl font-bold">45</div>
        <div className="text-lg">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
