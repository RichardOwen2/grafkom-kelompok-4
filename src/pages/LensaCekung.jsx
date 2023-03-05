import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";

export default function LensaCekung() {
	const { width: windowWidth, height: windowHeight } = useContext(PageSizeContext);

	const canvasWidth = windowWidth / 5 * 4;
	const canvasHeight = windowHeight / 5 * 4;

	const rumusJarakBayangan = (titikFokus, jarakBenda) => {
        console.log(-(titikFokus * jarakBenda) / (jarakBenda + titikFokus))
		return -(titikFokus * jarakBenda) / (jarakBenda + titikFokus);
	}

	const rumusUkuranBayangan = (jarakBayanganBaru, ukuranBenda, jarakBenda) => {
		return (jarakBayanganBaru * ukuranBenda) / jarakBenda
	}

	const {
		setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
		value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
	} = useConfig({ titikfokus: 100, rumusJarakBayangan, rumusUkuranBayangan });

	const initialDraw = (canvas, ctx) => {
		const cwidth = canvas.width
		const cheight = canvas.height
		ctx.translate(cwidth - cwidth / 2, cheight - cheight / 2);
		ctx.scale(1, -1);
		// grid();
		ctx.strokeStyle = "black";

		var rect = 5;

		var lens_height = 100;
		var lens_x = 0;
		var y = 0;

		//========================
		//   CIRCLE 1
		//========================
		//VARIABLES
		var x1 = -100;
		var r1 = 100;

		//========================
		//   CIRCLE 2
		//========================
		//VARIABLES
		var x2 = -x1;
		var r2 = 100;

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


		var radius = 4000;
		ctx.beginPath();
		ctx.arc(x1 / 2 + 4000, 0, radius, 0, 2 * Math.PI, false);
		ctx.arc(x2 / 2 - 4000, 0, radius, 0, 2 * Math.PI, false);
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
		var start = cwidth / 3;
		var end = 0;

		ctx.beginPath();
		ctx.moveTo(-cwidth / 3, 0);
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
		ctx.moveTo(-jarakBayangan, 0);
		ctx.lineTo(-jarakBayangan, ukuranBayangan);
		ctx.lineTo(-jarakBayangan - 3, ukuranBayangan + 5);
		ctx.moveTo(-jarakBayangan, ukuranBayangan);
		ctx.lineTo(-jarakBayangan + 3, ukuranBayangan + 5);
		ctx.stroke();


		// gambar garis bayangan dan cahaya
		// ctx.strokeStyle = "purple";
		// ctx.fillStyle = "purple";

		// ctx.beginPath();
		// ctx.moveTo(0, ukuranBayangan);
		// ctx.lineTo(-jarakBayangan, ukuranBayangan);
		// ctx.moveTo(0, 0);
		// ctx.lineTo(-jarakBayangan, ukuranBayangan);
		// ctx.moveTo(0, ukuranBenda);
		// ctx.lineTo(-jarakBayangan, ukuranBayangan);
		// ctx.stroke();

		// ctx.strokeStyle = "red";
		// ctx.fillStyle = "red";

		// ctx.beginPath();
		// ctx.moveTo(0, ukuranBenda);
		// ctx.lineTo(-jarakBenda, ukuranBenda);
		// ctx.moveTo(0, 0);
		// ctx.lineTo(-jarakBenda, ukuranBenda);
		// ctx.moveTo(0, ukuranBayangan);
		// ctx.lineTo(-jarakBenda, ukuranBenda);
		// ctx.stroke();
	}

	return (
		<div className="p-20">
			<div>
				<label htmlFor="ukuranBenda">Ukuran Benda</label>
				<input
					id="ukuranBenda"
					name="ukuranBenda"
					type="number"
					onChange={onUkuranBendaChange}
					value={ukuranBenda}
				/>
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
			</div>

			<Canvas initialDraw={initialDraw} width={canvasWidth} height={canvasHeight} />
		</div>
	);
}