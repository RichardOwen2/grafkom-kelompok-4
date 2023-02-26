import React, { useRef, useEffect } from 'react';

export default function Canvas({ initialDraw, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    initialDraw(canvas, context);
  }, [initialDraw]);

  return <canvas ref={canvasRef} width={width/2} height={height/2} />;
}
