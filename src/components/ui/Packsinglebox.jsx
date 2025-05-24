import Coinbutton from "../ui/Coinbutton.jsx";

const Packsinglebox = ({ data, setCoinButtonClicked, setCoinValue }) => {
	const { name, type, duration, background, players } = data;

	const touchSound = new Audio("../../../public/audio/cointouchsound.mp3");

	const handleCoinButton = () => {
		setCoinValue(100);
		setCoinButtonClicked(true);
		touchSound.play();
	};

	const handleSecondCoinButton = () => {
		setCoinValue(900);
		setCoinButtonClicked(true);
		touchSound.play();
	};

	return (
		<div className="rounded-3xl overflow-hidden h-[265px] w-96">
			<div
				style={{ backgroundImage: `url(${background})` }}
				className={`bg-url[(${background})] flex justify-center items-end h-[50%] bg-cover relative		`}
			>
				<p className="absolute right-2 text-white top-2 text-[11px]">
					Limited draw : 150/150
				</p>
				<img className="w-[60%]" src={players} alt="" />
			</div>
			<div className="h-[50%] w-full bg-dark">
				<div className="p-4">
					<p className="text-white text-[11px]">{type}</p>
					<h2 className="text-white font-font_bold">{name}</h2>
					<p className="text-[10px] text-silver">{duration}</p>
					<div className="flex justify-end py-3 gap-3">
						<Coinbutton onClick={handleCoinButton} coin={100} />
						<Coinbutton coin={900} onClick={handleSecondCoinButton} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Packsinglebox;
