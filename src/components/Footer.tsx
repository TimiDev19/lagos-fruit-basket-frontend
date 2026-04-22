import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import { smoothScrollToSection } from "./SmoothScrollToSection";
import logo from "../assets/logo.png";
import { Call02Icon, InstagramIcon, WhatsappIcon } from "hugeicons-react";

const Footer = () => {
  return (
    // <div className=" bg-[#0A1F12] min-h-[80px] py-[10px] w-full flex max-sm:flex-col max-sm:items-start items-center justify-between px-[7%]">
    //   <div className=" mb-[20px]">
    //     <h1 className=" font-semibold text-xl flex items-center justify-center ">
    //       <img src={logo} className=" mr-[10px]" />
    //       <Link
    //         to={"/"}
    //         className=" font-semibold text-xl lg:text-[20px] text-white ml-3 block"
    //       >
    //         Lagos Fruit Basket
    //       </Link>
    //     </h1>
    //   </div>

    //   <div className=" flex max-sm:flex-col items-start lg:items-center justify-center">
    //     <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
    //       <Call02Icon
    //         className=" text-[#EFF901] mr-[5px]"
    //         size={14}
    //         strokeWidth={2}
    //       />{" "}
    //       +234 813 584 6502
    //     </h1>

    //     <h1 className=" text-white text-[14px] mx-[20px] h-full max-sm:hidden">or</h1>

    //     <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
    //       <WhatsappIcon
    //         className=" text-[#EFF901] mr-[5px]"
    //         size={14}
    //         strokeWidth={2}
    //       />{" "}
    //       wa.me/2348135846502
    //     </h1>

    //     <h1 className=" text-white text-[14px] mx-[20px] h-full max-sm:hidden">or</h1>

    //     <h1 className=" text-[12px] h-full text-[#EFF901] flex items-center justify-center max-sm:underline max-sm:mb-4">
    //       <InstagramIcon
    //         className=" text-[#EFF901] mr-[5px]"
    //         size={14}
    //         strokeWidth={2}
    //       />{" "}
    //       @lagosfruitbasket
    //     </h1>
    //   </div>
    // </div>
    <div className=" bg-[#F5F5F5] h-[50vh] w-[100vw] px-[5%] py-[5%] flex items-center justify-start">
      <div className=" w-[30%] flex flex-col items-start justify-center mr-[10%]">
        <div className=" mb-[20px]">
          <h1 className=" font-semibold text-xl flex items-center justify-center ">
            <Link to={"/"}>
              <img src={logo} className=" mr-[10px] h-[48px]" />
            </Link>
          </h1>
        </div>

        <p className=" text-[#525866] text-[16px] mb-[20px]">
          We carefully handpick the finest fruits in our fruit baskets to ensure
          they are perfect on delivery
        </p>

        <div className=" w-full flex items-center justify-start">
          <div className=" w-[48px] h-[48px] bg-[#E0E5E2] rounded-full mr-[10px] flex items-center justify-center">
            <InstagramIcon
              className=" text-[#245236]"
              size={22}
              strokeWidth={2}
            />
          </div>
          <div className=" w-[48px] h-[48px] bg-[#E0E5E2] rounded-full mr-[10px] flex items-center justify-center">
            <WhatsappIcon
              className=" text-[#245236]"
              size={22}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      <div className=" w-[20%] flex flex-col items-start justify-start text-[16px] h-full">
        <h1 className=" text-[#245236] font-semibold mb-[20px]">Shop</h1>
        <ol>
          <li className=" text-[#868C98] font-[300] mb-3">Valentine Baskets</li>
          <li className=" text-[#868C98] font-[300] mb-3">Christmas Baskets</li>
          <li className=" text-[#868C98] font-[300] mb-3">Birthday Baskets</li>
          <li className=" text-[#868C98] font-[300] mb-3">Corporate Baskets</li>
        </ol>
      </div>

      <div className=" w-[20%] flex flex-col items-start justify-start text-[16px] h-full">
        <h1 className=" text-[#245236] font-semibold mb-[20px]">Links</h1>
        <ol>
          <li className=" text-[#868C98] font-[300] mb-3">About Us</li>
          <li className=" text-[#868C98] font-[300] mb-3">Contact</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
