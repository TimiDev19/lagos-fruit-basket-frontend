"use client";
import mobileBg from "../assets/mobile-bg.png";
import { useEffect, useState } from "react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/audophileSlice";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(
          "https://lagos-food-basket-backend.onrender.com/user"
        );
        const data = await res.json();
        console.log("Fetched data:", data); // 🔹 important
        setProducts(Array.isArray(data) ? data : []); // ✅ ensure it's an array
        setIsLoading(false)
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]); // fallback to empty array
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
    <>
      <div id="" className=" w-full min-h-[100vh] px-[2.5%] pt-[150px] mb-[50px]">
        <div className=" w-full flex items-center justify-center mb-[5vh]">
          <h1 className=" text-[28px] text-[#0A0D14]">SHOP</h1>
          {/* <Link
                    to={""}
                    className=" text-[14px] text-[#245236] font-semibold"
                >
                    View all
                </Link> */}
        </div>

        {isLoading ? (
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
            <div
              className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse"
            >
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`#`}
                  className=" cursor-pointer"
                >
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

                {/* <div
                  onClick={() => handleAddToCart(product)}
                  className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center"
                >
                  <ShoppingBag01Icon
                    className=" text-[#EFF901]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div> */}
              </div>
            </div>

            <div
              className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse"
            >
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`#`}
                  className=" cursor-pointer"
                >
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
                    ₦product.price.toLocaleString()
                  </h1>
                </div>

                {/* <div
                  onClick={() => handleAddToCart(product)}
                  className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center"
                >
                  <ShoppingBag01Icon
                    className=" text-[#EFF901]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div> */}
              </div>
            </div>

            <div
              className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse"
            >
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`#`}
                  className=" cursor-pointer"
                >
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
                    ₦product.price.toLocaleString()
                  </h1>
                </div>

                {/* <div
                  onClick={() => handleAddToCart(product)}
                  className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center"
                >
                  <ShoppingBag01Icon
                    className=" text-[#EFF901]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div> */}
              </div>
            </div>

            <div
              className=" max-w-[40vw] lg:max-w-[20vw] bg-[#245236]/50 animate-pulse"
            >
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`#`}
                  className=" cursor-pointer"
                >
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
                    ₦product.price.toLocaleString()
                  </h1>
                </div>

                {/* <div
                  onClick={() => handleAddToCart(product)}
                  className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center"
                >
                  <ShoppingBag01Icon
                    className=" text-[#EFF901]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div> */}
              </div>
            </div>
        </div>
      ) : (
        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                <Link
                  to={`/product/${product._id}`}
                  className=" cursor-pointer"
                >
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer"
                    // onClick={() => {
                    //     const params = new URLSearchParams({
                    //         _id: product._id,
                    //         name: product.name,
                    //         description: product.description,
                    //         price: product.price.toString(),
                    //         avatar: product.avatar,
                    //     });

                    //     router.push(`/shop/${product._id}?${params}`)
                    // }}
                  />
                </Link>
              </div>

              <div className=" w-full flex items-center justify-between">
                <div>
                  <Link
                    to={`/product/${product._id}`}
                    className=" text-[14px] lg:text-[16px] font-[500] text-black hover:underline duration-700 ease-in-out cursor-pointer"
                    // onClick={() => {
                    //     const params = new URLSearchParams({
                    //         _id: product._id,
                    //         name: product.name,
                    //         description: product.description,
                    //         price: product.price.toString(),
                    //         avatar: product.avatar,
                    //     });

                    //     router.push(`/shop/${product._id}?${params}`)
                    // }}
                  >
                    {product.name}
                  </Link>
                  <h1 className=" text-black font-[600] text-[18px] lg:text-[28px]">
                    ₦{product.price.toLocaleString()}
                  </h1>
                </div>

                <div
                  onClick={() => handleAddToCart(product)}
                  className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center"
                >
                  <ShoppingBag01Icon
                    className=" text-[#EFF901]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* <h2 className="mt-2 font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="font-bold">₦{product.price}</p> */}
            </div>
          ))}
        </div>
      )}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
