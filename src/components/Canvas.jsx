import React, { useRef, useEffect } from 'react';

export default function Canvas({ initialDraw, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    initialDraw(canvas, context);
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
}
