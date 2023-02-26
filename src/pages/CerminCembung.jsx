import React, { useContext } from "react";

import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";

export default function CerminCembung() {
  const { width, height } = useContext(PageSizeContext);

  const initialDraw = (canvas, ctx) => {
	if (canvas.getContext){
		const cwidth = canvas.width
		const cheight = canvas.height
		ctx.translate(cwidth - cwidth/2, cheight - cheight/2);
		ctx.scale(1, -1);
		// grid();
		ctx.strokeStyle="black";
		
		var rect = 5;
		
		var lens_height = 100;
		var lens_x = 0;
		var y = 0;
		
		
		//========================
		//   CIRCLE 1
		//========================
		//VARIABLES
		var x1 = 0;
		var r1 = 100;
		var ang1 = 90 * (Math.PI/180);
		var x_ang1 = (Math.cos(ang1/2) * r1) + x1;
		var y_ang1 = (Math.sin(ang1/2) * r1) + y;
		
		
		//ADJUSTMENTS
		if(Math.round(y_ang1 * 10)/10 > lens_height)
		{
		  while(Math.round(y_ang1 * 10)/10 > lens_height)
		  {
			r1 = r1 - 1;
			y_ang1 = (Math.sin(ang1/2) * r1);
		  }
		}
		if(Math.round(y_ang1 * 10)/10 < lens_height)
		{
		  while(Math.round(y_ang1 * 10)/10 < lens_height)
		  {
			r1 = r1 + 1;
			y_ang1 = (Math.sin(ang1/2) * r1);
		  }
		}
		y_ang1 = y_ang1 + y;
		x_ang1 = (Math.cos(ang1/2) * r1) + x1;
		
		if(Math.round(x_ang1 * 10)/10 > lens_x)
		{
		  while(Math.round(x_ang1 * 10)/10 > lens_x)
		  {
			x1 = x1 - 1;
			x_ang1 = (Math.cos(ang1/2) * r1) + x1;
		  }
		}
		if(Math.round(x_ang1 * 10)/10 < lens_x)
		{
		  while(Math.round(x_ang1 * 10)/10 < lens_x)
		  {
			x1 = x1 + 1;
			x_ang1 = (Math.cos(ang1/2) * r1) + x1;
		  }
		}
		
		//========================
		//   CIRCLE 1
		//========================
		//VARIABLES
		var x2 = 0;
		var r2 = 100;
		var ang2 = 90 * (Math.PI/180);
		var x_ang2 = -((Math.cos(ang2/2) * r2) + x2);
		var y_ang2 = (Math.sin(ang2/2) * r2) + y;
		
		
		//ADJUSTMENTS
		if(Math.round(y_ang2 * 10)/10 > lens_height)
		{
		  while(Math.round(y_ang2 * 10)/10 > lens_height)
		  {
			r2 = r2 - 1;
			y_ang2 = (Math.sin(ang2/2) * r2);
		  }
		}
		if(Math.round(y_ang2 * 10)/10 < lens_height)
		{
		  while(Math.round(y_ang2 * 10)/10 < lens_height)
		  {
			r2 = r2 + 1;
			y_ang2 = (Math.sin(ang2/2) * r2);
		  }
		}
		y_ang2 = y_ang2 + y;
		x_ang2 = -((Math.cos(ang2/2) * r2)) + x2;
		
		if(Math.round(x_ang2 * 10)/10 > lens_x)
		{
		  while(Math.round(x_ang2 * 10)/10 > lens_x)
		  {
			x2 = x2 - 1;
			x_ang2 = -((Math.cos(ang2/2) * r2)) + x2;
		  }
		}
		if(Math.round(x_ang2 * 10)/10 < lens_x)
		{
		  while(Math.round(x_ang2 * 10)/10 < lens_x)
		  {
			x2 = x2 + 1;
			x_ang2 = -((Math.cos(ang2/2) * r2)) + x2;
		  }
		}
		
		ctx.strokeStyle="blue";
		ctx.fillStyle="blue";
		ctx.beginPath();
		ctx.arc(x1, y, r1, Math.PI * 2, 0);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(x1 - rect/2, y - rect/2, rect, rect);
		ctx.fill();
		
		
		ctx.strokeStyle="red";
		ctx.fillStyle="red";
		ctx.beginPath();
		ctx.arc(x2, y, r2, Math.PI * 2, 0);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(x2 - rect/2, y - rect/2, rect, rect);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x1, y, r1, -ang1/2, ang1/2);
		ctx.arc(x2, y, r2, Math.PI-ang2/2, Math.PI + ang2/2);
		ctx.strokeStyle="rgba(0,150,255, 1)";
		ctx.fillStyle="rgba(0,150,255, 0.3)";
		ctx.fill();
		ctx.stroke();
		
		
		
		
		
		
		
		
		ctx.strokeStyle="black";
		ctx.fillStyle="black";
		//==========================
		//      ARROW
		//==========================
		var arrow_height = 50;
		var arrow_dist = 200;
		
		ctx.beginPath();
		ctx.moveTo(-arrow_dist, 0);
		ctx.lineTo(-arrow_dist, arrow_height);
		ctx.lineTo(-arrow_dist - 3, arrow_height - 5);
		ctx.moveTo(-arrow_dist, arrow_height);
		ctx.lineTo(-arrow_dist + 3, arrow_height - 5);
		ctx.stroke();
	}
    
  }

  return (
    <div>
      <Canvas initialDraw={initialDraw} width={width} height={height} />
    </div>
  );
}