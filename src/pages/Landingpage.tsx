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
import InfiniteCarousel from "@/components/InfiniteCarousel";

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
    <div className="h-[100vh] w-[100vw] scroll-smooth overflow-y-scroll pt-[138px]">
      {/* <div
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
      </div> */}

      <div className=" w-[100vw] h-[531px] relative bg-[#245236]">
        <div className=" absolute w-full h-full flex items-center justify-end">
          <div className=" h-full w-[850px] max-sm:hidden fruit-hero-bg"></div>
          <div className=" h-full w-[850px] lg:hidden mobile-fruit-hero-bg"></div>
        </div>

        <div className=" absolute w-[50%] max-sm:w-full h-full z-[10] flex items-center justify-start max-sm:justify-center pl-[10%]">
          <div>
            <h1 className=" text-white text-[60px] lg:font-thin mb-[10px]">
              Freshness Delivered <br /> in a{" "}
              <span className=" text-[#EFF901]">Click!</span>
            </h1>
            <p className=" text-[16px] text-white lg:font-thin mb-[10px]">
              Send more than a gift, send a feeling. From vibrant fruit baskets
              to fresh juices and creamy parfaits, we hand-pick the best of
              Nigeria’s harvest and deliver it to your door.
            </p>
            <div className=" w-full flex max-sm:flex-col max-sm:items-start items-center justify-start">
              <Link
                to={"/shop"}
                className=" max-sm:mb-[20px] px-4 py-1 hover:bg-transparent text-[#245236] duration-500 hover:border hover:border-[#fff] bg-[#EFF901] h-[40px] flex items-center justify-center font-light rounded-full hover:text-white mr-[30px]"
              >
                Shop Baskets
              </Link>

              <Link
                target="_blank"
                to={"https://wa.me/+2348135846502"}
                className=" px-4 py-1 bg-transparent hover:bg-[#EFF901] hover:text-[#245236] duration-500 border border-[#fff] hover:border-0 h-[40px] flex items-center justify-center font-light rounded-full text-[#fff] mr-[20px]"
              >
                Chat On Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" w-full h-[110px] bg-[#245236] flex items-center justify-between px-[5%]">
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
      </div> */}

      {/* SHOP */}
      <Shop />

      <section id="about" className=" w-full block pt-[150px] mb-[10vh]">
        <div className=" w-full lg:h-[70vh] flex max-sm:flex-col items-start justify-center max-sm:items-start px-[5%] space-x-[5%]">
          <div className=" max-sm:mb-[10vh] max-sm:w-full max-sm:h-[50vh] w-[40%] h-[70vh] flex items-start justify-center">
            <div className=" w-full h-full about-lfb-bg rounded-3xl"></div>
          </div>

          <div className=" w-[50%] max-sm:w-full min-h-[50vh] flex flex-col items-start justify-start">
            <h1 className=" text-center text-[#245236] text-[32px] mb-[20px]">
              About Us
            </h1>
            <p className=" text-[16px] text-[#868C98] font-[300] mb-[20px] leading-[2.3]">
              Imagine the freshest, seasonal fruits bursting with flavor, all
              grown right here in Nigeria! At Lagos Fruit Basket, we believe
              that nature’s candy should be celebrated. We curate these local
              delights and transform them into stunning, premium fruit
              arrangements that are as beautiful as they are delicious. <br />
              Whether you are looking to: <br />
              Brighten someone’s day with a healthy, vibrant pick-me-up in
              Lagos. <br />
              Feature a show stopping centerpiece for your next event or party.{" "}
              <br />
              Send a thoughtful, nourishing gift for a special occasion anywhere
              in Nigeria. <br />
              We have something designed for everyone. From our signature
              baskets to our newly launched refreshing juices, crisp salads, and
              creamy parfaits, we offer a variety of sizes and themes <br />
              Suitable for gifting, corporate events, personal celebrations, and
              everything in between our baskets carry not just fruit, but
              feeling.
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

      <div className=" block">
        <div className=" w-full px-[5%] min-h-[40vh] flex flex-col items-center justify-center mb-[10vh]">
          <div className=" w-[100%] h-full flex flex-col items-center justify-center max-sm:justify-start max-sm:mb-[30px]">
            <h1 className=" text-[32px] text-[#245236] mb-[10px]">
              Trusted by Industry Leaders
            </h1>

            <p className=" text-[16px] text-[#868C98] font-light text-center mb-[10px]">
              From corporate giants to boutique brands, we’ve had the pleasure
              of delivering <br /> freshness to some of the finest names in
              Nigeria
            </p>
            <InfiniteCarousel />
            <h1 className=" text-[24px] text-[#245236]">
              Over <b>2,000</b> Baskets Delivered
            </h1>
          </div>
        </div>
      </div>

      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126832.27312311927!2d3.287038259481555!3d6.583527651199229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8337173b21953857%3A0xed0526be8b11896d!2sLagos%20Fruit%20Basket%20(Fruit%20Hamper%20Company%20in%20Lagos%2C%20Nigeria)!5e0!3m2!1sen!2sng!4v1777814194530!5m2!1sen!2sng"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}

      <div id="contact" className=" block pt-[138px]">
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
              className=" flex items-center justify-center hover:text-[#eef901] hover:border-[#eef901] hover:bg-transparent hover:border duration-500 text-center bg-[#EFF901] h-[49px] px-[30px] rounded-full text-[14px] text-[#245236] mb-[20px]"
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
