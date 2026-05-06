import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import { smoothScrollToSection } from "./SmoothScrollToSection";
import logo from "../assets/white-logo.png";
import { Call02Icon, InstagramIcon, WhatsappIcon } from "hugeicons-react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#245236] h-[50vh] w-[100vw] px-[5%] py-[5%] flex items-center justify-start max-sm:justify-between">
        <div className=" w-[30%] flex flex-col items-start justify-center mr-[10%]">
          <div className=" mb-[20px]">
            <h1 className=" font-semibold text-xl flex items-center justify-center ">
              <Link to={"/"}>
                <img src={logo} className=" mr-[10px] h-[48px]" />
              </Link>
            </h1>
          </div>

          <p className=" text-[#FFFFFF99] text-[16px] mb-[20px]">
            We carefully handpick the finest fruits in our fruit baskets to
            ensure they are perfect on delivery
          </p>

          <div className=" w-full flex items-center justify-start">
            <Link
              to={"https://www.instagram.com/lagosfruitbasket/"}
              target="_blank"
              className=" hover:bg-transparent duration-500 w-[48px] h-[48px] bg-[#89A51B] rounded-full mr-[10px] flex items-center justify-center"
            >
              <InstagramIcon
                className=" text-[#245236]"
                size={22}
                strokeWidth={2}
              />
            </Link>
            <Link
              to={"https://wa.me/+2348135846502"}
              target="_blank"
              className=" hover:bg-transparent duration-500 w-[48px] h-[48px] bg-[#89A51B] rounded-full mr-[10px] flex items-center justify-center"
            >
              <WhatsappIcon
                className=" text-[#245236]"
                size={22}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>

        <div className=" w-[20%] flex flex-col items-start justify-start text-[16px] h-full">
          <h1 className=" text-[#fff] font-semibold mb-[20px]">Shop</h1>
          <ol>
            <li>
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" block hover:underline duration-500 text-[#FFFFFF99] font-[300] mb-3"
              >
                Valentine Baskets
              </Link>
            </li>
            <li>
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" block hover:underline duration-500 text-[#FFFFFF99] font-[300] mb-3"
              >
                Christmas Baskets
              </Link>
            </li>
            <li>
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" block hover:underline duration-500 text-[#FFFFFF99] font-[300] mb-3"
              >
                Birthday Baskets
              </Link>
            </li>
            <li>
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" block hover:underline duration-500 text-[#FFFFFF99] font-[300] mb-3"
              >
                Corporate Baskets
              </Link>
            </li>
          </ol>
        </div>

        <div className=" w-[20%] flex flex-col items-start justify-start text-[16px] h-full">
          <h1 className=" text-[#fff] font-semibold mb-[20px]">Links</h1>
          <ol>
            <li className=" text-[#FFFFFF99] font-[300] hover:underline duration-500 mb-3">
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About Us
              </Link>
            </li>
            <li className=" text-[#FFFFFF99] font-[300] hover:underline duration-500 mb-3">
              <Link
                to={""}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
