import { Link } from "react-router-dom";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import products from "../helpers/products";
import { FadeReveal } from "@/components/animations/FadeReveal";
import "../index.css";
import Typewriter from "typewriter-effect";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";
import PersonalizeModal from "@/modals/PersonalizeModal";

const Landingpage = () => {
  const [personaliseOpen, setPersonalizeOpen] = useState(false);
  const bestSellingProducts = products.items.filter((item) => {
    return item.featured === "yes";
  });

  const featuredProducts = products.items.filter((item) => {
    return item.bestSeller === "yes";
  });

  useEffect(() => {
    ScrollReveal().reveal(".reveal-bottom", {
      duration: 1500,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-left", {
      duration: 1500,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] scroll-smooth overflow-y-scroll">
      <div
        id="hero"
        className=" lg:h-[100vh] pt-[155px] w-full flex max-sm:flex-col items-center justify-between px-[5%] max-sm:mb-[10vh]"
      >
        <div className=" w-[45%] max-sm:w-full h-full flex items-start flex-col justify-center max-sm:mb-[30px]">
          <div className=" flex items-center justify-center bg-[#EFF901] h-[32px] px-4 rounded-full text-[14px] text-[#245236] mb-[20px]">
            Same Day Delivery Available
          </div>

          <h1 className=" text-[#245236] text-[60px] mb-[10px]">
            Freshness Delivered in a Click!
          </h1>

          <p className=" text-[#868C98] text-[16px] mb-[20px]">
            Send more than a gift, send a feeling. From vibrant fruit baskets to
            fresh juices and creamy parfaits, we hand-pick the best of Nigeria’s
            harvest and deliver it to your door.
          </p>

          <div className=" w-full flex max-sm:flex-col max-sm:items-start items-center justify-start">
            <Link
              to={"/shop"}
              className=" max-sm:mb-[20px] px-4 py-1 hover:bg-transparent hover:text-[#245236] duration-500 hover:border hover:border-[#245236] bg-[#245236] h-[40px] flex items-center justify-center font-light rounded-full text-white mr-[30px]"
            >
              Shop Baskets
            </Link>

            <Link
              target="_blank"
              to={"https://wa.me/+2348135846502"}
              className=" px-4 py-1 bg-transparent hover:bg-[#245236] hover:text-white duration-500 border border-[#245236] h-[40px] flex items-center justify-center font-light rounded-full text-[#245236] mr-[20px]"
            >
              Customize Your Basket
            </Link>
          </div>
        </div>

        <div className=" max-sm:w-[100%] w-[35%] h-full flex items-center justify-center">
          <div className=" w-full h-[55vh] rounded-3xl hero-bg shadow-xl"></div>
        </div>
      </div>

      <div className=" w-full h-[110px] bg-[#245236] flex items-center justify-between px-[5%]">
        <div className=" pr-[20px] border-r border-white w-[24%] flex items-center justify-center max-sm:pr-[10px] max-sm:mr-[10px] h-[50%]">
          <div className=" text-white">
            <h1 className=" font-semibold text-white text-[16px] max-sm:text-[12px]">
              Same Day Delivery
            </h1>
            <p className=" font-thin text-[14px] max-sm:hidden">
              Free shipping on all your order
            </p>
          </div>
        </div>

        <div className=" pr-[20px] border-r border-white w-[24%] flex items-center justify-center max-sm:pr-[10px] max-sm:mr-[10px] h-[50%]">
          <div className=" text-white">
            <h1 className=" font-semibold text-white text-[16px] max-sm:text-[12px]">
              Freshly Sourced Daily
            </h1>
            <p className=" font-thin text-[14px] max-sm:hidden">
              Direct from the local farm to packing
            </p>
          </div>
        </div>

        <div className=" pr-[20px] border-r border-white w-[24%] flex items-center justify-center max-sm:pr-[10px] max-sm:mr-[10px] h-[50%]">
          <div className=" text-white">
            <h1 className=" font-semibold text-white text-[16px] max-sm:text-[12px]">
              Beautiful Packaging
            </h1>
            <p className=" font-thin text-[14px] max-sm:hidden">
              Eco-friendly hand woven baskets
            </p>
          </div>
        </div>

        <div className=" pr-[20px] w-[24%] flex items-center justify-center max-sm:pr-[10px] max-sm:mr-[10px] h-[50%]">
          <div className=" text-white">
            <h1 className=" font-semibold text-white text-[16px] max-sm:text-[12px]">
              Affordable & Premium
            </h1>
            <p className=" font-thin text-[14px] max-sm:hidden">
              Wide options to select from
            </p>
          </div>
        </div>
      </div>

      <section id="about" className=" w-full block pt-[150px]">
        <h1 className=" text-center text-[#245236] text-[32px] mb-[20px]">
          About Us
        </h1>

        <div className=" w-full lg:h-[70vh] flex max-sm:flex-col items-center justify-center max-sm:items-start px-[5%] space-x-[5%]">
          <div className=" max-sm:mb-[10vh] max-sm:w-full max-sm:h-[50vh] w-[40%] h-[70vh] flex items-start justify-center">
            <div className=" w-full h-full about-lfb-bg rounded-3xl"></div>
          </div>

          <div className=" w-[50%] max-sm:w-full min-h-[50vh] flex flex-col items-start justify-start">
            <p className=" text-[16px] text-[#868C98] font-[300] mb-[20px]">
              Imagine the freshest, seasonal fruits bursting with flavor, all
              grown right here in Nigeria! <br /> <br /> At Lagos Fruit Basket,
              we believe that nature’s candy should be celebrated. We curate
              these local delights and transform them into stunning, premium
              fruit arrangements that are as beautiful as they are delicious.{" "}
              <br /> <br /> We aren't just assembling fruit; we are elevating
              the gifting experience in Lagos. Every single piece is
              hand-selected for its peak ripeness and quality, then artfully
              arranged by our team to create a gift that is both creative and
              inviting.
            </p>

            {/* <Link
              to={""}
              className=" h-[40px] bg-[#245236] flex items-center justify-center px-[30px] text-white rounded-full font-[300]"
            >
              Read More
            </Link> */}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <Shop />

      <div className=" block mb-[10vh]">
        <div className=" w-full px-[5%] max-sm:min-h-[100vh] lg:h-[40vh] flex max-sm:flex-col items-center justify-between mb-[20vh]">
          <div className=" max-sm:w-[100%] w-[43%] h-full flex flex-col items-start justify-between max-sm:justify-start max-sm:mb-[30px]">
            <h1 className=" text-[32px] text-[#245236]">
              Trusted by Industry Leaders
            </h1>

            <p className=" text-[16px] text-[#868C98] font-light">
              From corporate giants to boutique brands, we’ve had the pleasure
              of delivering freshness to some of the finest names in Nigeria.
              Our commitment to quality and premium presentation is why top
              organizations trust us with their gifting.
            </p>

            <h1 className=" text-[24px] text-[#245236]">
              Over <b>2,000</b> Baskets Delivered
            </h1>
          </div>

          <div className=" max-sm:w-[100%] w-[40%] h-full flex flex-col items-center justify-between max-sm:justify-start">
            <div className=" flex items-center max-sm:flex-col justify-center mb-[20px]">
              <div className=" w-[240px] max-sm:w-[80vw] h-[145px] bg-[#232323] lg:mr-[20px] max-sm:mb-[20px]"></div>
              <div className=" w-[240px] max-sm:w-[80vw] h-[145px] bg-[#232323]"></div>
            </div>
            <div className=" flex items-center max-sm:flex-col justify-center mb-[20px]">
              <div className=" w-[240px] max-sm:w-[80vw] h-[145px] bg-[#232323] lg:mr-[20px] max-sm:mb-[20px]"></div>
              <div className=" w-[240px] max-sm:w-[80vw] h-[145px] bg-[#232323]"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className=" block">
        <div className=" h-[50vh] w-[100vw] flex items-center justify-center mb-[20vh] mt-[20vh]">
          <div className=" w-[80%] h-full bg-[#245236] rounded-3xl flex flex-col items-center justify-center p-[20px]">
            <h1 className=" text-[32px] text-white mb-[20px] text-center">
              Personalize Your Pick!
            </h1>
            <p className=" w-[50%] max-sm:w-full text-center text-white font-[300] mb-[20px]">
              Want to create something truly unique? Let’s design the perfect
              basket together. Whether you need a specific fruit mix or a
              special theme, our gift curator is ready to help you bring your
              vision to life.
            </p>
            {/* <Link
              target="_blank"
              to={"https://wa.me/+2348135846502"}
              className=" flex items-center justify-center text-center bg-[#EFF901] h-[49px] px-[30px] rounded-full text-[14px] text-[#245236] mb-[20px]"
            >
               Chat with our Gift Curator on WhatsApp
            </Link> */}

            <button
              onClick={() => setPersonalizeOpen(true)}
              className=" flex items-center justify-center text-center bg-[#EFF901] h-[49px] px-[30px] rounded-full text-[14px] text-[#245236] mb-[20px]"
            >
              Personalize your basket !
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {personaliseOpen && (
        <PersonalizeModal setPersonalizeOpen={setPersonalizeOpen} />
      )}
    </div>
  );
};

export default Landingpage;
