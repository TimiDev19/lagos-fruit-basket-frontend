import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import products from '../helpers/products';
import { FadeReveal } from '@/components/animations/FadeReveal';
import '../index.css';
import Typewriter from 'typewriter-effect';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import Shop from '@/components/Shop';

const Landingpage = () => {
  const bestSellingProducts = products.items.filter((item) => {
    return item.featured === 'yes';
  });

  const featuredProducts = products.items.filter((item) => {
    return item.bestSeller === 'yes';
  });

  useEffect(() => {
    ScrollReveal().reveal('.reveal-bottom', {
      duration: 1500,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.reveal-left', {
      duration: 1500,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] scroll-smooth overflow-y-scroll">
      {/* HERO */}
      <div id="" className="lg:hidden w-full h-[100vh] mobile-bg pt-[150px] flex items-center justify-center px-[2.5%]">
        <div className=" w-full text-white text-center">
          <h1 className=" text-[24px] font-[500] mb-[10px]">Exquisite Fruit Hamper Basket</h1>
          <p className=" text-[16px] font-[500] mb-[25px]">We carefully handpick the finest fruits in our fruit baskets to ensure they are perfect on delivery</p>

          <Link to={"/#shop"} className=" h-[44px] w-[143px] bg-[#245236] block flex items-center justify-center rounded mx-auto font-[500]">Shop Now</Link>
        </div>
      </div>

      <div id="home" className=" max-sm:hidden w-full h-[100vh] pt-[150px] flex items-center justify-center px-[2.5%]">
        <div className=" w-[85vw] h-[60vh] rounded-2xl hero-bg bg-black flex items-center justify-center">
          <div className=" w-full text-white text-center">
            <h1 className=" text-[60px] font-[500] mb-[10px]">Exquisite Fruit Hamper Basket</h1>
            <p className=" text-[24px] font-[500] mb-[25px]">We carefully handpick the finest fruits in our fruit baskets <br /> to ensure they are perfect on delivery</p>

            <Link to={"/shop"} className=" h-[44px] w-[145px] text-[16px] bg-[#245236] block flex items-center justify-center rounded mx-auto font-[500]">Shop Now <ArrowRight01Icon className=' text-white' size={25} strokeWidth={1.5} /></Link>
          </div>
        </div>
      </div>

      {/* SHOP */}
      <Shop />
    </div>
  );
};

export default Landingpage;
