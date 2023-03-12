import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";

export default function CerminCekung() {
	const { width: windowWidth, height: windowHeight } = useContext(PageSizeContext);

	const canvasWidth = windowWidth / 5 * 4;
	const canvasHeight = windowHeight / 5 * 4;

	const rumusJarakBayangan = (titikFokus, jarakBenda) => {
		return -((-titikFokus) * jarakBenda) / (jarakBenda - (-titikFokus));
	}

	const rumusUkuranBayangan = (jarakBayanganBaru, ukuranBenda, jarakBenda) => {
		return (jarakBayanganBaru * ukuranBenda) / jarakBenda
	}

	const {
		setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
		value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
	} = useConfig({ titikfokus: -100, rumusJarakBayangan, rumusUkuranBayangan });

	const dda = (x1, y1, x2, y2, ctx, isShadow = false) => {
		const dx = x2 - x1;
		const dy = y2 - y1;

		let steps = Math.max(Math.abs(dx), Math.abs(dy));

		const xIncrement = dx / steps;
		const yIncrement = dy / steps;

		let x = x1;
    	let y = y1;

		ctx.beginPath();
		let i;
		if (isShadow) {
			i = -1000;
		} else {
			i = 0;
		}
		while (i < steps) {
			ctx.moveTo(x, y);
			ctx.lineTo(x += xIncrement, y += yIncrement);
			console.log(x, y)

			i++
		}
	
		ctx.stroke();
	}
	

	const initialDraw = (canvas, ctx) => {
		const cwidth = canvas.width
		const cheight = canvas.height
		ctx.setTransform(1, 0, 0, 1, cwidth / 2, cheight / 2);
		ctx.scale(1, -1);
		// grid();
		ctx.strokeStyle = "black";

		var rect = 5;

		var y = 0;

		//========================
		//   CIRCLE 1
		//========================
		//VARIABLES
		var x1 = -100;

		//========================
		//   CIRCLE 2
		//========================
		//VARIABLES
		var x2 = -x1;

		// buat titik fokus
		ctx.strokeStyle = "blue";
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.rect(x1 - rect / 2, y - rect / 2, rect, rect);
		ctx.fill();

		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.rect(x2 - rect / 2, y - rect / 2, rect, rect);
		ctx.fill();

		//baut titik 2 fokus
		ctx.strokeStyle = "blue";
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.rect(x1 + x1 - rect / 2, y - rect / 2, rect, rect);
		ctx.fill();

		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.rect(x2 + x2 - (rect / 2) * 2, y - rect / 2, rect, rect);
		ctx.fill();


		var radius = 2000;
		ctx.beginPath();
		ctx.arc(x1 / 2 - 2000, 0, radius, 0, 2 * Math.PI, false);
		ctx.arc(x2 / 2 + 2000, 0, radius, 0, 2 * Math.PI, false);
		ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(x1, y, r1, -ang1/2, ang1/2);
		// ctx.arc(x2, y, r2, Math.PI-ang2/2, Math.PI + ang2/2);
		// ctx.strokeStyle="rgba(0,150,255, 1)";
		// ctx.fillStyle="rgba(0,150,255, 0.3)";
		// ctx.fill();
		// ctx.stroke();

		// gambar garis x
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		var start = cwidth;
		var end = 0;

		ctx.beginPath();
		ctx.moveTo(-cwidth, 0);
		ctx.lineTo(start, end);
		ctx.stroke();

		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		//==========================
		//      Benda
		//==========================
		ctx.beginPath();
		ctx.moveTo(-jarakBenda, 0);
		ctx.lineTo(-jarakBenda, ukuranBenda);
		ctx.lineTo(-jarakBenda - 3, ukuranBenda - 5);
		ctx.moveTo(-jarakBenda, ukuranBenda);
		ctx.lineTo(-jarakBenda + 3, ukuranBenda - 5);
		ctx.stroke();


		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		//==========================
		//      Bayangan
		//==========================

		ctx.beginPath();
		ctx.moveTo(jarakBayangan, 0);
		ctx.lineTo(jarakBayangan, ukuranBayangan);
		ctx.lineTo(jarakBayangan - 3, ukuranBayangan + 5);
		ctx.moveTo(jarakBayangan, ukuranBayangan);
		ctx.lineTo(jarakBayangan + 3, ukuranBayangan + 5);
		ctx.stroke();


		// gambar garis bayangan dan cahaya
		ctx.strokeStyle = "purple";
		ctx.fillStyle = "purple";

		dda(0, ukuranBayangan, jarakBayangan, ukuranBayangan, ctx, true)
		dda(0, 0, jarakBayangan, ukuranBayangan, ctx, true)
		dda(0, ukuranBenda, jarakBayangan, ukuranBayangan, ctx, true)

		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";

		ctx.beginPath();
		ctx.moveTo(0, ukuranBenda);
		ctx.lineTo(-jarakBenda, ukuranBenda);
		ctx.moveTo(0, 0);
		ctx.lineTo(-jarakBenda, ukuranBenda);
		ctx.moveTo(0, ukuranBayangan);
		ctx.lineTo(-jarakBenda, ukuranBenda);
		ctx.stroke();
	}

	return (
		<div className="p-20">
			<div className="grid grid-cols-1 gap-4 bg-red-500 w-3/6 align-right">
				<div>
					<label htmlFor="ukuranBenda">Ukuran Benda</label>
					<input
						id="ukuranBenda"
						name="ukuranBenda"
						type="number"
						onChange={onUkuranBendaChange}
						value={ukuranBenda}
					/>
					<input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
				</div>
				<div>
					<label htmlFor="ukuranBenda">Jarak Benda</label>
					<input
						id="ukuranBenda"
						name="ukuranBenda"
						type="number"
						onChange={onJarakBendaChange}
						value={jarakBenda}
					/>
					<input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
				</div>
				<div>
					<label htmlFor="ukuranBenda">Titik Fokus Benda</label>
					<input
						id="ukuranBenda"
						name="ukuranBenda"
						type="number"
						onChange={onTitikFokusChange}
						value={titikFokus}
					/>
					<input id="medium-range" type="range" value="20" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
				</div>
			</div>

			

			<Canvas initialDraw={initialDraw} width={canvasWidth} height={canvasHeight} />
		</div>
	);
}