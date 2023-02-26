import React, { useContext } from "react";

import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";

export default function CerminCembung() {
  const { width, height } = useContext(PageSizeContext);

  const initialDraw = (canvas, ctx) => {
    var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = 100;
		var thickness = 20;
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		ctx.lineWidth = thickness;
		ctx.strokeStyle = '#000';
		ctx.stroke();

		// Menggambar garis sumbu optik
		ctx.beginPath();
		ctx.moveTo(centerX - thickness / 2, centerY);
		ctx.lineTo(centerX + thickness / 2, centerY);
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#000';
		ctx.stroke();

		// Menggambar titik fokus
		var focalLength = 50;
		var focalPointX = centerX + focalLength;
		ctx.beginPath();
		ctx.arc(focalPointX, centerY, 5, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#000';
		ctx.fill();

		// Menggambar bayangan
		var objectDistance = 150;
		var objectHeight = 50;
		var imageDistance = 1 / ((1 / focalLength) - (1 / objectDistance));
		var imageHeight = (objectHeight / objectDistance) * imageDistance;
		var imagePointX = centerX - imageDistance;
		ctx.beginPath();
		ctx.arc(imagePointX, centerY, 5, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#f00';
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(centerX - objectDistance, centerY - objectHeight / 2);
		ctx.lineTo(imagePointX, centerY - imageHeight / 2);
		ctx.lineTo(imagePointX, centerY + imageHeight / 2);
		ctx.lineTo(centerX - objectDistance, centerY + objectHeight / 2);
		ctx.closePath();
		ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
		ctx.fill();
  }

  return (
    <div>
      <Canvas initialDraw={initialDraw} width={width} height={height} />
    </div>
  );
}