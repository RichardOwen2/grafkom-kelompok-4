import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";
import dda from "../utils/dda";
import baseGraf from "../utils/baseGraf";

export default function CerminCekung() {
	const { width: windowWidth, height: windowHeight } = useContext(PageSizeContext);

	const canvasWidth = windowWidth / 5 * 4;
	const canvasHeight = windowHeight / 7 * 4;

	const rumusJarakBayangan = (titikFokus, jarakBenda) => {
		return -((titikFokus) * jarakBenda) / (jarakBenda - (titikFokus));
	}

	const rumusUkuranBayangan = (jarakBayanganBaru, ukuranBenda, jarakBenda) => {
		return (jarakBayanganBaru * ukuranBenda) / jarakBenda
	}

	const {
		setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
		value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
	} = useConfig({ titikfokus: 100, rumusJarakBayangan, rumusUkuranBayangan });

	const initialDraw = (canvas, ctx) => {

		baseGraf(titikFokus, canvas, ctx)

		var radius = 1000;
		ctx.beginPath();
		ctx.arc(-1030-titikFokus*5, 0, radius+titikFokus*5, 0, 2 * Math.PI, false);
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

		dda(0, ukuranBenda, -jarakBenda, ukuranBenda, ctx)
		dda(0, 0, -jarakBenda, ukuranBenda, ctx)
		dda(0, ukuranBayangan, -jarakBenda, ukuranBenda, ctx)	
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