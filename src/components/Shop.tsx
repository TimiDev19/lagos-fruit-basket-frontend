"use client";
import mobileBg from "../assets/mobile-bg.png";
import { useEffect, useState } from "react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/audophileSlice";
import { Link } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  avatar: string;
  cloudinary_id: string;
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://lagos-food-basket-backend.onrender.com/user"
        );
        const data = await res.json();

        const productArray = Array.isArray(data) ? data : [];

        // Sort by price (cheapest → most expensive)
        const sortedByPrice = [...productArray].sort(
          (a, b) => a.price - b.price
        );

        // Take only the 8 cheapest
        const cheapestProducts = sortedByPrice.slice(0, 8);

        setProducts(cheapestProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
        setIsFailed(true);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const CartItem = {
      id: product._id,
      img: product.avatar,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    dispatch(addToCart(CartItem));
  };

  return (
    <div
      id="shop"
      className=" w-full min-h-[40vh] px-[2.5%] pt-[150px] mb-[20px]"
    >
      <div className=" w-full flex items-center justify-between mb-[5vh]">
        <h1 className=" text-[16px] text-[#245236] font-bold uppercase">
          explore our collection
        </h1>
      </div>
      {isLoading ? (
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`#`} className=" cursor-pointer">
                <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
              </Link>
            </div>

            <div className=" w-full flex items-center justify-between">
              <div>
                <Link
                  to={`#`}
                  className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                >
                  product.name
                </Link>
                <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                  ₦product.price
                </h1>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`#`} className=" cursor-pointer">
                <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
              </Link>
            </div>

            <div className=" w-full flex items-center justify-between">
              <div>
                <Link
                  to={`#`}
                  className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                >
                  product.name
                </Link>
                <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                  ₦product.price
                </h1>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`#`} className=" cursor-pointer">
                <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
              </Link>
            </div>

            <div className=" w-full flex items-center justify-between">
              <div>
                <Link
                  to={`#`}
                  className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                >
                  product.name
                </Link>
                <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                  ₦product.price
                </h1>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`#`} className=" cursor-pointer">
                <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
              </Link>
            </div>

            <div className=" w-full flex items-center justify-between">
              <div>
                <Link
                  to={`#`}
                  className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                >
                  product.name
                </Link>
                <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                  ₦product.price
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]"
            >
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`/product/${product._id}`}
                  className=" cursor-pointer"
                >
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-t-xl"
                  />
                </Link>
              </div>

              <div className=" w-full flex items-center justify-between">
                <div className=" w-full">
                  <Link
                    to={`/product/${product._id}`}
                    className=" text-[16px] lg:text-[22px] font-[400] text-black hover:underline duration-700 ease-in-out cursor-pointer mb-2 block"
                  >
                    {product.name}
                  </Link>

                  <p className=" line-clamp-2 text-[#245236B2] text-[12px] mb-2">
                    {product.description}
                  </p>

                  <h1 className=" text-black font-[400] text-[20px] lg:text-[28px] mb-2">
                    ₦{product.price.toLocaleString()}
                  </h1>

                  <div
                    onClick={() => handleAddToCart(product)}
                    className=" cursor-pointer h-[24px] lg:h-[42px] hover:bg-transparent text-[#fff] w-full hover:text-[#245236] duration-500 bg-[#245236] rounded-xl flex text-[14px] font-[300] items-center justify-center"
                  >
                    + Add To Cart
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex items-center justify-center mt-[20px]">
        <Link
          to={"/shop"}
          className=" text-[14px] text-white hover:text-[#245236] bg-[#245236] rounded-[10px] flex items-center justify-center hover:bg-transparent px-[30px] py-1 ease-in-out duration-500 h-[42px]"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Shop;
