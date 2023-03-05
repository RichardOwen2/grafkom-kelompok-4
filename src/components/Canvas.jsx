import React, { useRef, useEffect } from 'react';

export default function Canvas({ initialDraw, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, width, height)
      initialDraw(canvas, context);
      console.log(initialDraw)
    }
    init();
  }, [initialDraw, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}
