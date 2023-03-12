import React, { useContext, useEffect } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";
import dda from "../utils/dda";
import baseGraf from "../utils/baseGraf";

export default function CerminCekung() {
	useEffect(() => {
		console.log(document.querySelector("#rangeUkuranBenda").value)
	})
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
		ctx.moveTo(0, canvasHeight);
		ctx.lineTo(0, -canvasHeight);
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
		<>
			<div className="p-20">
				<Canvas initialDraw={initialDraw} width={canvasWidth} height={canvasHeight} />
			</div>


			<div
				className="invisible fixed bottom-0 top-0 right-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-lg outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
				tabindex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
				data-te-offcanvas-init>
				<div className="flex items-center justify-between p-4">
					<h5
						className="mb-0 font-semibold leading-normal"
						id="offcanvasRightLabel">
						SETTING
					</h5>
					<button
						type="button"
						className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
						data-te-offcanvas-dismiss>
						<span
							className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="h-6 w-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
						</span>
					</button>
				</div>
				<div className="offcanvas-body flex-grow overflow-y-auto p-4">
					<div className="">
						<div className="py-4">
							<label
								for="formFileSm"
								className="mb-2 block text-neutral-700"
								htmlFor="ukuranBenda "
							>Ukuran Benda</label>

							<input
								id="ukuranBenda"
								name="ukuranBenda"
								type="number"
								onChange={onUkuranBendaChange}
								value={ukuranBenda}
							/>
							<input
								type="range"
								className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
								min="-100"
								max="100"
								id="rangeUkuranBenda" />
						</div>
						<hr className="" />

						<div className="py-4">
							<label
								for="formFileSm"
								className="mb-2 block text-neutral-700"
								htmlFor="jarakBenda "
							>Jarak Benda</label>
							<input
								id="jarakBenda"
								name="jarakBenda"
								type="number"
								onChange={onJarakBendaChange}
								value={jarakBenda}
							/>
							<input
								type="range"
								className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
								min="0"
								max="5"
								id="rangeJarakbenda" />
						</div>

						<hr className="" />
						
						<div className="py-4"> 
							<label
								for="formFileSm"
								className="mb-2 block text-neutral-700"
								htmlFor="jarakBenda "
							>Titik Fokus Benda</label>
							<input
								id="titikFokusBenda"
								name="titikFokusBenda"
								type="number"
								onChange={onTitikFokusChange}
								value={titikFokus}
							/>
							<input
								type="range"
								className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
								min="-100"
								max="100"
								id="rangetitikFokusBenda" />
						</div>
					</div>
				</div>
			</div>

		</>
	);
}