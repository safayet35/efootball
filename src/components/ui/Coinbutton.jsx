import { FaUser } from "react-icons/fa6";
import coinIcon from "../../../public/assets/efootball-coins-removebg-preview.png";
const Coinbutton = ({ coin, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-[15px] py-1 px-2 rounded-3xl bg-buttonBg flex gap-2"
        >
            <div className="flex gap-2 text-silver items-center ">
                <FaUser />

                <p>{coin === 100 ? "1x" : "10x"} |</p>
            </div>
            <div className="flex gap-[3px] items-center">
                <img className="w-4 h-4" src={coinIcon} alt="" />
                <h3 className="font-font_sans text-main_blue">{coin}</h3>
            </div>
        </button>
    );
};
export default Coinbutton;
