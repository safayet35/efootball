import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar.jsx";
import Backbutton from "../ui/Backbutton.jsx";
import Packsinglebox from "../ui/Packsinglebox.jsx";
import boxData from "../../api/boxData.json";
import SpinUi from "../ui/SpinUi.jsx";
import backgroundImage from "../../public/assets/background.jpeg"
const Packpage = () => {
	const [isLandscape, setIsLandscape] = useState(
		window.innerWidth > window.innerHeight
	);
	const [isCoinButtonClicked, setCoinButtonClicked] = useState(false);

	const [coinValue, setCoinValue] = useState(0);

	const enterFullscreen = async () => {
		try {
			const docElement = document.documentElement; // Select the HTML root element
			if (docElement.requestFullscreen) {
				await docElement.requestFullscreen();
			} else if (docElement.webkitRequestFullscreen) {
				// For Safari
				await docElement.webkitRequestFullscreen();
			} else if (docElement.msRequestFullscreen) {
				// For IE
				await docElement.msRequestFullscreen();
			}
		} catch (error) {
			return false;
		}
	};

	// Function to exit fullscreen

	const exitFullscreen = async () => {
		try {
			if (
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.msFullscreenElement
			) {
				if (document.exitFullscreen) {
					await document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
					// For Safari
					await document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) {
					// For IE
					await document.msExitFullscreen();
				}
			}
		} catch (error) {
			return false;
		}
	};

	const handleResize = () => {
		const landscape = window.innerWidth > window.innerHeight;
		setIsLandscape(landscape);

		if (landscape) {
			enterFullscreen(); // Enter fullscreen when in landscape
		} else {
			exitFullscreen(); // Exit fullscreen when back to portrait
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		enterFullscreen();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="h-screen w-full">
			{isLandscape ? (
				<div
					onDoubleClick={() => enterFullscreen()}
					className="relative bg-no-repeat bg-cover w-full h-screen flex flex-col justify-between"
  style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					{isCoinButtonClicked ? (
						<SpinUi
							setCoinButtonClicked={setCoinButtonClicked}
							coinValue={coinValue}
						/>
					) : null}

					<Navbar />
					<div
						className=" w-full grid grid-flow-col-dense
					items-center hide-scrollbar overflow-x-auto gap-7 px-20"
					>
						{boxData.map(data => {
							return (
								<div key={data.id}>
									<Packsinglebox
										setCoinButtonClicked={setCoinButtonClicked}
										data={data}
										setCoinValue={setCoinValue}
									/>
								</div>
							);
						})}
					</div>
					<div className=" pb-6 px-10 flex items-center justify-between">
						<Backbutton />

						<div className="flex items-center gap-10">
							<button className="rounded-md font-[500] px-1 border-[1px] border-[#5a5a5a84] text-main_blue">
								Nominating Contract
							</button>
							<p className="font-font_sans text-white text-[10px]">
								*The displayed Overall Ratings reflect the highest
								<br />
								possible Ratings of the players.
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="h-screen flex items-center justify-center bg-red-100">
					<h2 className="text-2xl font-bold text-center">
						Please rotate your device to landscape mode.
					</h2>
				</div>
			)}
		</div>
	);
};

export default Packpage;
