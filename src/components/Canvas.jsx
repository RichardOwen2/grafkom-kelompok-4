import React, { useRef, useEffect } from 'react';

export default function Canvas({ initialDraw, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height)
    initialDraw(canvas, context);
    console.log('p')
  }, [initialDraw, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}
