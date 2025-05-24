import { FaChevronLeft } from "react-icons/fa6";

const Backbutton = () => {
	return (
		<button
			className="text-white py-[3px] pl-5 pr-14 rounded-md
		bg-gradient-to-r from-button_dark_blue to-button_light_blue flex items-center"
		>
			<FaChevronLeft /> Back
		</button>
	);
};

export default Backbutton;
