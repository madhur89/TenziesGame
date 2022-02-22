import React from 'react'

export default function Time(props) {
  return (
    <div className="timer">  
      <span className="digits">
        {("0" + Math.floor((props.Time / 1000) % 60)).slice(-2)}.
      </span>
    </div>
  );
}

