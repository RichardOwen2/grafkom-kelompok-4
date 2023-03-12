import React, { useContext } from "react";

import useConfig from "../hooks/useConfig";
import PageSizeContext from "../contexts/PageSizeContext";
import Canvas from "../components/Canvas";

export default function CerminCembung() {
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

	const initialDraw = (canvas, ctx) => {
		const cwidth = canvas.width
		const cheight = canvas.height
		ctx.setTransform(1, 0, 0, 1, cwidth / 2, cheight / 2);
		ctx.scale(1, -1);
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
		ctx.strokeStyle = "purple";
		ctx.fillStyle = "purple";

		ctx.beginPath();
		ctx.moveTo(0, ukuranBayangan);
		ctx.lineTo(-jarakBayangan, ukuranBayangan);
		ctx.moveTo(0, 0);
		ctx.lineTo(-jarakBayangan, ukuranBayangan);
		ctx.moveTo(0, ukuranBenda);
		ctx.lineTo(-jarakBayangan, ukuranBayangan);
		ctx.stroke();

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
								id="ukuranBenda"
								name="ukuranBenda"
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
								id="ukuranBenda"
								name="ukuranBenda"
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