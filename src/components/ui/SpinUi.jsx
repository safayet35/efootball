const SpinUi = ({ setCoinButtonClicked, coinValue }) => {
	const coinTouchSound = new Audio("../../../public/audio/cointouchsound.mp3");

	const handleButton = () => {
		setCoinButtonClicked(false);
		coinTouchSound.play();
	};

	return (
		<div
			className="bg-[#00000084] py-16 px-48 flex items-center justify-center
	  z-50 absolute h-screen w-full"
		>
			<div
				className="gap-2 bg-white px-5 py-4 rounded-2xl flex flex-col items-center
		justify-center"
			>
				<h1 className="text-[18px] font-font_bold text-center">
					Payment Confirmation
				</h1>
				<p className="my-2 font-bold text-[13px] text-center">
					Sign a player using eFootball™ Coins. This Special
					<br />
					Player List is available until 12/05/2024 07:59.
				</p>
				<p className="text-[13px] text-center text-main_blue font-font_sans">
					Details on Payment Methods, Delivery Date, and
					<br />
					Cancellations
				</p>
				<p className="mb-2 text-[13px] text-main_blue font-font_sans">
					Product Details
				</p>

				<div className="w-full flex flex-col gap-2">
					<button
						className="hover:bg-[#9fb1bf] inline-block rounded-md w-full flex items-center justify-center
					py-2 bg-[#c7dcef]
				gap-1"
					>
						<img
							className="w-5"
							src="../../../public/assets/efootball-coins-removebg-preview.png"
							alt=""
						/>
						<p className="text-main_blue font-[600]">{coinValue}</p>
					</button>
					<button
						onClick={handleButton}
						className="hover:bg-[#9fb1bf] inline-block rounded-md w-full flex items-center justify-center
					py-2 bg-[#c7dcef]
				gap-1"
					>
						<p className="text-main_blue font-[600]">Cancel</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SpinUi;
