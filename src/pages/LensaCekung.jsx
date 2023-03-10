import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";
import Input from "../components/Input";
import SideBarInput from "../components/SideBarInput";
import dda from "../utils/dda";
import baseGraf from "../utils/baseGraf";

export default function LensaCekung() {
	const { width: windowWidth, height: windowHeight } = useContext(PageSizeContext);

	const canvasWidth = windowWidth / 5 * 4;
	const canvasHeight = windowHeight / 7 * 4;

	const rumusJarakBayangan = (titikFokus, jarakBenda) => {
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
		baseGraf(titikFokus, canvas, ctx)

		var radius = 1000;
		ctx.beginPath();
		ctx.arc(-1030-titikFokus*5, 0, radius+titikFokus*5, 0, 2 * Math.PI, false);
		ctx.arc(1030+titikFokus*5, 0, radius+titikFokus*5, 0, 2 * Math.PI, false);
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
		ctx.lineTo(jarakBayangan, -ukuranBayangan);
		ctx.lineTo(jarakBayangan - 3, -ukuranBayangan - 5);
		ctx.moveTo(jarakBayangan, -ukuranBayangan);
		ctx.lineTo(jarakBayangan + 3, -ukuranBayangan - 5);
		ctx.stroke();


		// gambar garis bayangan dan cahaya
		ctx.strokeStyle = "purple";
		ctx.fillStyle = "purple";

		dda(jarakBayangan, -ukuranBayangan, 0, ukuranBayangan, ctx, true)
		dda(jarakBayangan, -ukuranBayangan, 0, 0, ctx, true)
		dda(jarakBayangan, -ukuranBayangan, 0, ukuranBenda, ctx, true)

		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";

		dda(0, ukuranBenda, -jarakBenda, ukuranBenda, ctx)
		dda(0, 0, -jarakBenda, ukuranBenda, ctx)
		dda(0, ukuranBayangan, -jarakBenda, ukuranBenda, ctx)
	}

	return (
		<>
			<Canvas initialDraw={initialDraw} width={canvasWidth} height={canvasHeight} />

			<SideBarInput
				children={
					<div className="offcanvas-body flex-grow overflow-y-auto p-4">
						<Input id="ukuranBenda" label="Ukuran Benda" value={ukuranBenda} onChangeValue={onUkuranBendaChange} />
						<hr className="" />
						<Input id="jarakBenda" label="Jarak Benda" value={jarakBenda} onChangeValue={onJarakBendaChange} min={0} max={750} />
						<hr className="" />
						<Input id="titikFokus" label="Titik Fokus Benda" value={titikFokus} onChangeValue={onTitikFokusChange} min={30} max={300} />
					</div>
				}
			/>
		</>
	);
}