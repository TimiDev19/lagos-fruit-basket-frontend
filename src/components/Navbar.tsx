import { useMemo, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks/hooks";
import {
  toggleCart,
  toggleMobileMenu,
  toggleAuthModal,
} from "@/store/audophileSlice";
import Cart from "./cart/Cart";
import cartimg from "@/assets/cart.svg";
import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import products from "@/helpers/products";
import {
  Alert02Icon,
  Call02Icon,
  InstagramIcon,
  Search01Icon,
  ShoppingBag01Icon,
  Upload01Icon,
} from "hugeicons-react";
import { smoothScrollToSection } from "./SmoothScrollToSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
    dispatch(toggleAuthModal(false));
    console.log(cartIsShowing);
  };
  const totalItems = useAppSelector((state) => state.appState.cart.length);

  const [searchInput, setSearchInput] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.items
      .filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchInput, products.items]);

  return (
    <>
      <div className=" z-50 fixed w-full">
        <div className=" h-[48px] w-[100vw] bg-[#245236] flex items-center justify-between px-[5%]">
          <h1 className=" text-[12px] text-[#EFF901] flex items-center justify-start max-sm:hidden">
            <Call02Icon
              className=" text-[#EFF901] mr-2"
              size={16}
              strokeWidth={2}
            />{" "}
            +234 813 584 6502
          </h1>

          <h1 className=" capitalize text-white text-[16px]">Same day delivery available</h1>

          <Link to={"https://www.instagram.com/lagosfruitbasket/"} target="_blank" className=" hover:underline duration-500 text-[14px] text-[#EFF901] flex items-center justify-center">
            <InstagramIcon
              className=" text-[#EFF901] mr-2"
              size={18}
              strokeWidth={2}
            />
            @lagosfruitbasket
          </Link>
        </div>



        <div className=" w-full fixed border-b border-b-black/20">
          <div className="flex w-full h-[90px] items-center justify-between pxpx py-3 bg-white">
            <div>
              <h1 className=" font-semibold text-xl flex items-center justify-center ">
                <Link to={"/"}>
                  <img src={logo} className=" mr-[10px]" />
                </Link>
              </h1>
            </div>

            <div className=" lg:flex hidden items-center justify-center space-x-8 h-[48px] bg-[#245236]/10 rounded-full pl-8 p-1">
              <Link
                to={"/"}
                className="relative group text-[16px] text-[#245236]"
                onClick={() =>
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link
                to={"/#aboutus"}
                className="relative group text-[16px] text-[#245236]"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About Us
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link
                to={"/#contact"}
                className="relative group text-[16px] text-[#245236]"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link
                to={"/#shop"}
                className="relative group text-[16px] text-[#245236]"
                onClick={() =>
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link
                target="_blank"
                to={"https://wa.me/+2348135846502"}
                className="relative group text-[16px] text-[#fff] duration-500 hover:bg-transparent h-full flex items-center justify-center bg-[#245236] hover:text-[#245236] hover:font-semibold rounded-full px-6"
              >
                Chat With Us Now
              </Link>

              {/* SEARCH BAR */}
            </div>

            <div className=" flex items-center justify-center">
              {/*  */}

              <div
                onClick={toogleCartHandler}
                className="relative inline-flex items-center space-x-2 cursor-pointer"
              >
                <ShoppingBag01Icon
                  className=" text-[#868C98]"
                  size={30}
                  strokeWidth={0.5}
                />
                <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-[#245236] text-white text-xs px-1 py-[2px] font-semibold rounded-full">
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Navbar;
