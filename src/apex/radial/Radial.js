import React from 'react';
import CountUp from 'react-countup';
import './radial.css';

const Radial = ({ progress }) => {
  const formatProgress = (prog) => {
    if (prog > 100) return 100;
    else return prog;
  };
  let formatedProg = formatProgress(progress);
  let style = {
    strokeDashoffset: `calc(220 - (220 * ${formatedProg}) / 100)`,
    stroke: '#5bc0de',
    transition: '0.5s ease-in',
  };
  return (
    <div className="percent">
      <svg>
        <circle cx="35" cy="35" r="35"></circle>
        <circle style={style} cx="35" cy="35" r="35"></circle>
      </svg>
      <div className="number">
        <h2>
          <CountUp start={0} end={formatedProg} duration={1} />
          <span>%</span>
        </h2>
      </div>
    </div>
  );
};

export default Radial;
