import React, { useState, useEffect } from 'react';

const AnimatedBorder = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        const newR = prevColor.r < 255 ? prevColor.r + 1 : 0;
        const newG = prevColor.g < 255 ? prevColor.g + 1 : 0;
        const newB = prevColor.b < 255 ? prevColor.b + 1 : 0;

        return { r: newR, g: newG, b: newB };
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const style = {
    border: '5px solid rgb(' + color.r + ',' + color.g + ',' + color.b + ')',
    transition: 'border-color 0.5s ease',
  };

  return <div style={style}>Your Content Here</div>;
};

export default AnimatedBorder;