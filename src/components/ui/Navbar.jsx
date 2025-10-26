import { TbCoinFilled } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import coinIcon from "../../../public/assets/efootball-coins-removebg-preview.png";
import epointIcon from "../../../public/assets/epointlogo.png";
import gpIcon from "../../../public/assets/gplogo.png"

const Navbar = () => {
    return (
        <nav className="z-10 px-20 w-full flex justify-between py-1 bg-black text-white">
            <div className="flex gap-24">
                <div className="flex items-center justify-center gap-1">
                    <img className="w-4 mt-[2px]" src={coinIcon} alt="" />
                    <p className="text-[13px] font-font_sans">12,577</p>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <img className="w-5 mt-[2px]" src={gpIcon} alt="" />
                    <p className="text-[13px] font-font_sans">5,536,470</p>
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <p className="font-font_sans text-main_blue">Product details</p>

                <img className="w-8" src={epointIcon} alt="" />

                <div className="text-[28px] text-main_blue">
                    <IoMdHome />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
