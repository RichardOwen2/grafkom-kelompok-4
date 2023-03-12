import React, { useRef, useEffect } from 'react';

export default function Canvas({ initialDraw, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
      initialDraw(canvas, context);
    }
    init();
  }, [initialDraw, width, height]);

  return (
    <div className='mx-[8%] my-[5%]'>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
}
