import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import { smoothScrollToSection } from "./SmoothScrollToSection";
import logo from "../assets/white-logo.png";
import { Call02Icon, InstagramIcon, WhatsappIcon } from "hugeicons-react";

const Footer = () => {
  return (
    <div className=" bg-[#0A1F12] min-h-[80px] py-[10px] w-full flex max-sm:flex-col max-sm:items-start items-center justify-between px-[7%]">
      <div className=" mb-[20px]">
        <h1 className=" font-semibold text-xl flex items-center justify-center ">
          <img src={logo} className=" mr-[10px]" />
          <Link
            to={"/"}
            className=" font-semibold text-xl lg:text-[20px] text-white ml-3 block"
          >
            Lagos Fruit Basket
          </Link>
        </h1>
      </div>

      <div className=" flex max-sm:flex-col items-start lg:items-center justify-center">
        <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
          <Call02Icon
            className=" text-[#EFF901] mr-[5px]"
            size={14}
            strokeWidth={2}
          />{" "}
          +234 813 584 6502
        </h1>

        <h1 className=" text-white text-[14px] mx-[20px] h-full max-sm:hidden">or</h1>

        <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
          <WhatsappIcon
            className=" text-[#EFF901] mr-[5px]"
            size={14}
            strokeWidth={2}
          />{" "}
          wa.me/2348135846502
        </h1>

        <h1 className=" text-white text-[14px] mx-[20px] h-full max-sm:hidden">or</h1>

        <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
          <InstagramIcon
            className=" text-[#EFF901] mr-[5px]"
            size={14}
            strokeWidth={2}
          />{" "}
          @lagosfruitbasket
        </h1>
      </div>
    </div>
  );
};

export default Footer;
