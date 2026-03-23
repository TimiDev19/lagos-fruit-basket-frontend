// "use client";
// import products from '@/helpers/products';
// import { addToCart } from '@/store/audophileSlice';
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';



// type Product = {
//     _id: string
//     name: string
//     price: number
//     description: string
//     avatar: string
//     cloudinary_id: string
// }

// const ProductPage: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const [products, setProducts] = useState<Product[]>([])
//     const dispatch = useDispatch()
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await fetch("https://lagos-food-basket-backend.onrender.com/user");
//                 const data = await res.json();
//                 console.log("Fetched data:", data); // 🔹 important
//                 setProducts(Array.isArray(data) ? data : []); // ✅ ensure it's an array
//             } catch (error) {
//                 console.error("Fetch error:", error);
//                 setProducts([]); // fallback to empty array
//             }
//         };

//         fetchProducts();
//     }, []);
//     useEffect(() => {
//         if (id) {
//             // Convert id from string to number
//             const productId = id;

//             // Access the items array and use find to get the specific product
//             const foundProduct = products.find((p) => p._id === productId);
//             setProducts(foundProduct);
//         }
//     }, [id]);



//     if (!product) {
//         return <p>Product not found</p>;
//     }

//     const handleAddToCart = () => {
//         const CartItem = {
//             id: products._id,
//             img: product.image,
//             name: product.name,
//             price: product.price,
//             quantity: 1, // Start with a quantity of 1
//         };

//         // Dispatch the action to add the product to the cart
//         dispatch(addToCart(CartItem));
//     };

//     return (
//         <div className=' lg:h-[100vh] w-full pt-[120px] lg:pt-[180px] pb-8'>
//             <div className=' w-[95%] m-auto flex flex-col lg:flex-row items-start justify-between mb-10'>
//                 <img src={product.image} alt="" className=' w-full lg:w-[45%] border border-slate-300 mb-6' />
//                 <div className=' w-full lg:w-[45%] text-left'>
//                     <h1 className=' font-semibold text-3xl mb-4'>{product.name}</h1>
//                     <p className=' text-xl mb-4'>{product.description}</p>
//                     <h1 className=' text-green-700 font-semibold text-5xl mb-6'>
//                         £ {product.price.toFixed(2)}
//                     </h1>
//                     <button
//                         onClick={handleAddToCart}
//                         className=' mt-5 px-11 text-center bg-green-600 text-white text-s py-4 uppercase duration-500 hover:bg-green-500'
//                     >
//                         + Add to cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductPage


"use client";
import React, { useEffect, useState } from "react";
import { addToCart } from "@/store/audophileSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft01Icon, ArrowUpLeft01Icon, LinkBackwardIcon, ShoppingBag01Icon } from "hugeicons-react";
import Footer from "@/components/Footer";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  avatar: string;
  cloudinary_id: string;
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [redproducts, setRedProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  const dispatch = useDispatch();

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://lagos-food-basket-backend.onrender.com/user"
        );
        const data = await res.json();

        const productArray = Array.isArray(data) ? data : [];
        setProducts(productArray);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://lagos-food-basket-backend.onrender.com/user");
        const data = await res.json();

        const productArray = Array.isArray(data) ? data : [];

        // Shuffle products
        const shuffled = [...productArray].sort(() => 0.5 - Math.random());

        // Take only 12
        const randomProducts = shuffled.slice(0, 4);

        setRedProducts(randomProducts);

      } catch (error) {
        console.error("Fetch error:", error);
        setRedProducts([]);
      }
    };

    fetchProducts();
  }, []);

  // Find the specific product using the ID
  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find((p) => p._id === id) || null;
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) {
    return <p className="text-center pt-20">Product not found</p>;
  }

  const handleAddToCart = () => {
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
      <div className=' lg:h-[90vh] w-[100vw] pt-[150px] px-[5%] flex max-sm:flex-col items-center justify-between'>
        <div className=" max-sm:w-full w-[50%] h-full flex flex-col items-center justify-start max-sm:mb-[20px]">
          <div className=" w-full lg:w-[548px]">
            <Link to={"/"} className=" block flex items-center justify-center mb-[20px] h-[36px] w-[36px] bg-[#245236] rounded-full lg:hidden"><ArrowLeft01Icon className=' text-white' size={25} strokeWidth={1.5} /></Link>
            <Link to={"/"} className=" block flex items-center justify-center mb-[20px] h-[48px] w-[133px] bg-[#245236] rounded-full text-white max-sm:hidden"><LinkBackwardIcon className=' text-white mr-[5px]' size={25} strokeWidth={1.5} /> Back</Link>
          </div>
          <div className="w-full lg:w-[548px] lg:h-[393px] overflow-hidden mb-[10px]">
            <img
              src={product.avatar || ""}
              alt={product.name || ""}
              className="w-full h-full object-cover duration-500 cursor-pointer rounded-xl"
            />
          </div>
          <div className=" grid grid-cols-4 max-sm:w-full w-[548px] h-[122px]">
            <div className="h-[122px] mr-1">
              <img
                src={product.avatar || ""}
                alt={product.name || ""}
                className="w-full h-full object-cover duration-500 cursor-pointer rounded-xl"
              />
            </div>

            <div className="h-[122px] mx-1">
              <img
                src={product.avatar || ""}
                alt={product.name || ""}
                className="w-full h-full object-cover duration-500 cursor-pointer rounded-xl"
              />
            </div>

            <div className="h-[122px] mx-1">
              <img
                src={product.avatar || ""}
                alt={product.name || ""}
                className="w-full h-full object-cover duration-500 cursor-pointer rounded-xl"
              />
            </div>

            <div className="h-[122px] ml-1">
              <img
                src={product.avatar || ""}
                alt={product.name || ""}
                className="w-full h-full object-cover duration-500 cursor-pointer rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className=" max-sm:w-full w-[50%] h-full flex flex-col items-start justify-start max-sm:mb-[40px]">
          <h1 className=" w-full max-sm:text-[24px] text-[32px] mb-[10px] font-[500]">{product.name}</h1>
          <p className=" text-[14px] max-sm:text-[16px] font-[200] tracking-wide text-[#868C98] w-[90%] mb-[10px]">{product.description}</p>
          <h1 className=" text-[24px] text-[#245236] lg:font-semibold">₦{product.price}</h1>

          <button
            onClick={handleAddToCart}
            className=' max-sm:w-full h-[49px] flex items-center justify-center mt-5 px-11 text-center bg-[#245236] rounded-full text-white text-s py-4 uppercase duration-500 hover:bg-transparent hover:border hover:border-[#245236] hover:text-[#245236] cursor-pointer'
          >
            + Add to cart
          </button>
        </div>
      </div>
      <div className=" w-full min-h-[30vh] px-[2.5%]">
        <div className=" w-full flex items-center justify-between mb-[1vh]">
          <h1 className=" text-[28px] text-[#0A0D14]">SHOP</h1>
          <Link
            to={"/shop"}
            className=" text-[14px] text-[#245236] font-semibold"
          >
            View more
          </Link>
        </div>

        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          {redproducts.map((product) => (
            <div key={product._id} className=" max-w-[40vw] lg:max-w-[20vw]">

              <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] overflow-hidden mb-[10px]">
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-t"
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
                  >{product.name}</Link>
                  <h1 className=" text-black font-[600] text-[18px] lg:text-[28px]">₦{product.price}</h1>
                </div>

                <div onClick={() => handleAddToCart} className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#245236] rounded-full flex items-center justify-center">
                  <ShoppingBag01Icon className=' text-[#EFF901]' size={22} strokeWidth={1.5} />
                </div>
              </div>

              {/* <h2 className="mt-2 font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="font-bold">₦{product.price}</p> */}

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

{/*  */ }