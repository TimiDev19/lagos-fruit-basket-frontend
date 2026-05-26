const baskets = [
    {
      id: 1,
      name: "Romantic Red Basket",
      price: "$65",
      image: "/images/azima.png",
    },
    {
      id: 2,
      name: "Chocolate Love Basket",
      price: "$80",
      image: "/images/azima.png",
    },
    {
      id: 3,
      name: "Luxury Rose Basket",
      price: "$120",
      image: "/images/azima.png",
    },
    {
      id: 4,
      name: "Couple Surprise Basket",
      price: "$95",
      image: "/images/azima.png",
    },
    {
      id: 5,
      name: "Teddy & Candy Basket",
      price: "$70",
      image: "/images/azima.png",
    },
    {
      id: 6,
      name: "Premium Valentine Basket",
      price: "$150",
      image: "/images/azima.png",
    },
  ];
  
  import Footer from "@/components/Footer";
  import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const RamadanBaskets = () => {
    return (
      <>
        <div className="min-h-[100dvh] bg-white pt-[150px]">
          <div className=" w-full lg:w-[548px] px-[5%]">
            <Link
              to={"/"}
              className=" flex items-center justify-center mb-[20px] h-[36px] w-[36px] bg-[#245236] rounded-full lg:hidden"
            >
              <ArrowLeft01Icon
                className=" text-white"
                size={25}
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to={"/"}
              className=" flex items-center justify-center mb-[20px] h-[48px] w-[133px] bg-[#245236] rounded-full text-white max-sm:hidden"
            >
              <LinkBackwardIcon
                className=" text-white mr-[5px]"
                size={25}
                strokeWidth={1.5}
              />{" "}
              Back
            </Link>
          </div>
          {/* Hero Section */}
          <section className="px-6 py-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#245236]">
              Ramadan Basket Gallery
            </h1>
  
            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
              Explore our beautiful collection of handcrafted ramadan baskets
              perfect for gifting your loved ones.
            </p>
          </section>
  
          {/* Gallery */}
          <section className="px-5 pb-16">
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {baskets.map((basket) => (
                <div
                  key={basket.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={basket.image}
                      alt={basket.name}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
  
                  {/* Content */}
                  {/* <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">
                      {basket.name}
                    </h2>
  
                    <span className="text-red-500 font-semibold">
                      {basket.price}
                    </span>
                  </div>
  
                  <button className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition">
                    View Basket
                  </button>
                </div> */}
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  };
  
  export default RamadanBaskets;
  