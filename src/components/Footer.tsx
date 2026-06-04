import { Link } from "react-router-dom";
import logo from "../assets/white-logo.png";
import { InstagramIcon, WhatsappIcon } from "hugeicons-react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="bg-[#245236] w-full px-[5%] py-12 flex flex-wrap gap-10 items-start justify-between">
        {/* Brand column */}
        <div className="flex flex-col items-start justify-start w-full sm:w-[42%] lg:w-[26%]">
          <Link to={"/"} className="mb-5">
            <img
              src={logo}
              className="h-[48px]"
              alt="Lagos Fruit Basket logo"
            />
          </Link>

          <p className="text-[#FFFFFF99] text-[15px] leading-relaxed mb-6">
            We carefully handpick the finest fruits in our fruit baskets to
            ensure they are perfect on delivery.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to={"https://www.instagram.com/lagosfruitbasket/"}
              target="_blank"
              className="hover:bg-transparent text-[#245236] hover:text-white duration-300 w-[44px] h-[44px] bg-[#89A51B] rounded-full flex items-center justify-center"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} strokeWidth={2} />
            </Link>
            <Link
              to={"https://wa.me/+2348024015795"}
              target="_blank"
              className="hover:bg-transparent text-[#245236] hover:text-white duration-300 w-[44px] h-[44px] bg-[#89A51B] rounded-full flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsappIcon size={20} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Three link columns — wrap into 3-across on mobile, inline on larger */}
        <div className="w-full sm:w-auto flex flex-row flex-wrap gap-8 sm:gap-10 lg:gap-14">
          {/* Gallery */}
          <div className="flex flex-col min-w-[130px]">
            <h2 className="text-white font-semibold text-[15px] mb-4 tracking-wide">
              Gallery
            </h2>
            <ol className="flex flex-col gap-2">
              {[
                { label: "Valentine Baskets", to: "/valentine" },
                { label: "Christmas Baskets", to: "/christmas" },
                { label: "Ramadan Baskets", to: "/ramadan" },
                { label: "Birthday Baskets", to: "/birthday" },
                { label: "Corporate Baskets", to: "/corporate" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Links */}
          <div className="flex flex-col min-w-[100px]">
            <h2 className="text-white font-semibold text-[15px] mb-4 tracking-wide">
              Links
            </h2>
            <ol className="flex flex-col gap-2">
              <li>
                <Link
                  to={"/#about"}
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/#address"}
                  onClick={() =>
                    document
                      .getElementById("address")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                >
                  Contact
                </Link>
              </li>
            </ol>
          </div>

          {/* Policies */}
          <div className="flex flex-col min-w-[160px]">
            <h2 className="text-white font-semibold text-[15px] mb-4 tracking-wide">
              Policies
            </h2>
            <ol className="flex flex-col gap-2">
              <li>
                <Link
                  to={"/returnsandrefundspolicy"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                >
                  Returns & Refunds Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/shippinganddelivery"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                >
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacypolicy"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[#FFFFFF99] text-[14px] font-light hover:text-white hover:underline duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
