import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";
import dda from "../utils/dda";
import baseGraf from "../utils/baseGraf";

export default function CerminCembung() {
	const { width: windowWidth, height: windowHeight } = useContext(PageSizeContext);

	const canvasWidth = windowWidth / 5 * 4;
	const canvasHeight = windowHeight / 7 * 4;

	const rumusJarakBayangan = (titikFokus, jarakBenda) => {
		return -((-titikFokus) * jarakBenda) / (jarakBenda - (-titikFokus));
	}

	const rumusUkuranBayangan = (jarakBayanganBaru, ukuranBenda, jarakBenda) => {
		return (jarakBayanganBaru * ukuranBenda) / jarakBenda
	}

	const {
		setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
		value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
	} = useConfig({ titikfokus: 100, rumusJarakBayangan, rumusUkuranBayangan });

	const initialDraw = (canvas, ctx) => {
		baseGraf(titikFokus, canvas,ctx)

		var radius = 800;
		ctx.beginPath();
		ctx.arc(760+titikFokus*5, 0, radius+titikFokus*5, 0, 2 * Math.PI, false);
		ctx.stroke();

		// Benda
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(-jarakBenda, 0);
		ctx.lineTo(-jarakBenda, ukuranBenda);
		ctx.lineTo(-jarakBenda - 3, ukuranBenda - 5);
		ctx.moveTo(-jarakBenda, ukuranBenda);
		ctx.lineTo(-jarakBenda + 3, ukuranBenda - 5);
		ctx.stroke();

		// Bayangan
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(jarakBayangan, 0);
		ctx.lineTo(jarakBayangan, ukuranBayangan);
		ctx.lineTo(jarakBayangan - 3, ukuranBayangan - 5);
		ctx.moveTo(jarakBayangan, ukuranBayangan);
		ctx.lineTo(jarakBayangan + 3, ukuranBayangan - 5);
		ctx.stroke();


		// gambar garis bayangan dan cahaya
		ctx.strokeStyle = "purple";
		ctx.fillStyle = "purple";

		dda(jarakBayangan, ukuranBayangan, 0, ukuranBayangan, ctx, true)
		dda(jarakBayangan, ukuranBayangan, 0 , 0, ctx, true)
		dda(jarakBayangan, ukuranBayangan, 0, ukuranBenda, ctx, true)

		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";

		dda(0, ukuranBenda, -jarakBenda, ukuranBenda, ctx)
		dda(0, 0, -jarakBenda, ukuranBenda, ctx)
		dda(0, ukuranBayangan, -jarakBenda, ukuranBenda, ctx)
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