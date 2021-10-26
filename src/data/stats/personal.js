import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-06-05T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'number',
    label: 'Best SAT Score',
    value: 1500,
  },
  {
    key: 'location',
    label: 'Current School',
    value: 'The Stony Brook High School',
  },
  {
    key: 'number ',
    label: '# of Shows Watched',
    value: 58,
  },
  {
    key: 'number',
    label: '# of Communities currently involved in',
    value: '8',
  },
];

export default data;
