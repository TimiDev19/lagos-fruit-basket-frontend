// 'use client';
// import emailjs from '@emailjs/browser';
// emailjs.init('vniYYZ7cQTr3doimy');
// import CartItem from './CartItem';
// import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
// import {
//   emptyCart,
// } from '@/store/audophileSlice';
// import { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { loadStripe } from '@stripe/stripe-js'

// const CartModal = () => {
//   const dispatch = useAppDispatch();
//   const [isOrdering, setIsOrdering] = useState(false)
//   const cart = useAppSelector((state) => state.appState.cart);
//   const [userEmail, setUserEmail] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [order, setOrder] = useState<string | null>(null);
//   const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
//   const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   const apiURL = "https://usv-backend.onrender.com/api"

//   const sendCartContent = async () => {
//     if (cart.length === 0) {
//       toast('Your cart is empty. Please add items before placing an order.', {
//         duration: 4000, // Duration in milliseconds
//         position: 'top-center', // Position of the toast
//         style: {
//           background: 'red', // Green background
//           color: '#fff', // White text
//           padding: '16px', // Padding
//           borderRadius: '8px', // Rounded corners
//           fontSize: '16px', // Font size
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//         },
//       });
//       setIsOrdering(false)
//       return;
//     }

//     const serviceID = "service_xpo4uhb";
//     const templateID = "template_fxk86xg";
//     const userID = "vniYYZ7cQTr3doimy";

//     const filteredCart = cart.map(item => ({
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//     }));

//     const emailParams = {
//       cart_content: filteredCart,
//       from_email: userEmail,
//     };
//     setIsOrdering(true)
//     console.log("Email Params:", emailParams);

//     try {
//       const res = await emailjs.send(serviceID, templateID, emailParams, userID);
//       if (res.status === 200) {
//         console.log("Email sent successfully!");
//         setOrder("Order placed successfully !")
//         toast('Order placed successfully !', {
//           duration: 4000, // Duration in milliseconds
//           position: 'top-center', // Position of the toast
//           style: {
//             background: '#4CAF50', // Green background
//             color: '#fff', // White text
//             padding: '16px', // Padding
//             borderRadius: '8px', // Rounded corners
//             fontSize: '16px', // Font size
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//           },
//         });
//         setIsOrdering(false)
//       }
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       toast('Failed to send email. Please try again.', {
//         duration: 4000, // Duration in milliseconds
//         position: 'top-center', // Position of the toast
//         style: {
//           background: 'red', // Green background
//           color: '#fff', // White text
//           padding: '16px', // Padding
//           borderRadius: '8px', // Rounded corners
//           fontSize: '16px', // Font size
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//         },
//       });
//       setIsOrdering(false)
//     }
//   };

//   const makePayment = async () => {
//     if (cart.length === 0) {
//       toast('Your cart is empty. Please add items before placing an order.', {
//         duration: 4000, // Duration in milliseconds
//         position: 'top-center', // Position of the toast
//         style: {
//           background: 'red', // Green background
//           color: '#fff', // White text
//           padding: '16px', // Padding
//           borderRadius: '8px', // Rounded corners
//           fontSize: '16px', // Font size
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//         },
//       });
//       setIsOrdering(false)
//       return;
//     } else {
//       setIsOrdering(true)

//       //publishable key
//       const stripe = await loadStripe("pk_live_51RwjELJL7JBQUwn8aOTVqacbSh3ZaBTehAXs1SK5M8kekXH2DmQb75YtLI6knOyzbpGYf1T1axK9gVdjQOGRgpRa00qbF94mMJ");
//       const body = {
//         products: cart
//       };

//       const headers = {
//         "Content-Type": "application/json"
//       };

//       try {
//         const response = await fetch(`${apiURL}/create-checkout-session`, {
//           method: "POST",
//           headers: headers,
//           body: JSON.stringify(body)
//         });

//         const textResponse = await response.text(); // Get the response as text
//         console.log("Raw Response:", textResponse); // Log the raw response

//         // Check if the response is OK (status code 200-299)
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}, response: ${textResponse}`);
//         }

//         const session = JSON.parse(textResponse); // Parse the JSON response

//         const result = await stripe?.redirectToCheckout({
//           sessionId: session.id
//         });


//         // Handle the result of the redirect
//         if (result?.error) {
//           console.error(result.error.message);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//       setIsOrdering(false)
//     }
//   };

//   const handleCheckout = () => {
//     if (!userEmail) {
//       toast('Please enter your email address', {
//         duration: 4000, // Duration in milliseconds
//         position: 'top-center', // Position of the toast
//         style: {
//           background: 'red', // Green background
//           color: '#fff', // White text
//           padding: '16px', // Padding
//           borderRadius: '8px', // Rounded corners
//           fontSize: '16px', // Font size
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//         },
//       });
//     } else {
//       makePayment();
//       setError(null);
//     }
//   };

//   return (
//     <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
//       <div className="flex justify-between">
//         <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
//         <p
//           onClick={() => dispatch(emptyCart())}
//           className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
//         >
//           Remove all
//         </p>
//       </div>
//       <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-[#245236]">
//         {cart.length === 0 ? (
//           <p className="mt-[1rem] font-semibold italic">No Items In Cart 🤧</p>
//         ) : (
//           cart.map((crt, index) => (
//             <CartItem
//               key={index}
//               id={crt.id}
//               img={crt.img}
//               name={crt.name}
//               price={crt.price.toFixed(2)}
//               quantity={crt.quantity}
//             />
//           ))
//         )}
//       </div>
//       <div className="flex justify-between items-center pt-[1rem]">
//         <p className="opacity-50 text-[1rem]">TOTAL</p>
//         <p className="font-semibold text-[1.1rem] tracking-wider">{`₦ ${totalCost.toFixed(2)}`}</p>
//       </div>

//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={userEmail}
//         onChange={(e) => setUserEmail(e.target.value)}
//         required
//         className="border border-gray-300 p-2 rounded mb-2 hidden"
//       />
//       <button onClick={handleCheckout} className=' hidden'></button>
//       <button onClick={sendCartContent} className=' hidden'></button>
//       {error && (
//         <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
//       )}
//       {order && (
//         <p style={{ color: 'green', marginBottom: '10px' }}>{order}</p>
//       )}
//       {
//         isOrdering ? (
//           <button
//             className={`hover:bg-[#245236]/50 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
//           >
//             <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
//           </button>
//         )
//           :
//           (
//             <button
//               onClick={makePayment}
//               className={`bg-[#245236] md:hover:bg-[#245236]/50 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
//             >
//               Checkout
//             </button>
//           )
//       }
//     </div>
//   );
// };

// export default CartModal;

'use client';

import emailjs from '@emailjs/browser';
import CartItem from './CartItem';
import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
import { emptyCart } from '@/store/audophileSlice';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

emailjs.init('vniYYZ7cQTr3doimy');

const CartModal = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.appState.cart);

  const [isOrdering, setIsOrdering] = useState(false);

  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const totalCostArr = cart.flatMap(
    (crt) => crt.quantity * crt.price
  );

  const totalCost = totalCostArr.reduce((acc, current) => {
    return acc + current;
  }, 0);

  const sendOrder = async () => {
    if (cart.length === 0) {
      toast('Your cart is empty. Please add items before placing an order.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'red',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '16px',
        },
      });

      return;
    }

    if (!customerEmail || !customerPhone || !customerAddress) {
      toast('Please fill in all fields.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'red',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '16px',
        },
      });

      return;
    }

    setIsOrdering(true);

    try {
      const filteredCart = cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const orderSummary = filteredCart
        .map(
          (item) =>
            `${item.name} x${item.quantity} - ₦${(
              item.price * item.quantity
            ).toFixed(2)}`
        )
        .join('\n');

      const templateParams = {
        to_email: 'lagosfruitbasket@gmail.com',
        customer_email: customerEmail,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        order_summary: orderSummary,
        total_amount: totalCost.toFixed(2),
      };

      const res = await emailjs.send(
        'service_sr8c5ig',
        'template_bxf1xd6',
        templateParams,
        'f1KDM7sAzYsmrrqXP'
      );

      if (res.status === 200) {
        toast('Order placed successfully!', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#4CAF50',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '16px',
          },
        });

        dispatch(emptyCart());

        setCustomerEmail('');
        setCustomerPhone('');
        setCustomerAddress('');
      }
    } catch (error) {
      console.error('Failed to send order:', error);

      toast('Failed to place order. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'red',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '16px',
        },
      });
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[1rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">
          {`CART (${cart.length})`}
        </p>

        <p
          onClick={() => dispatch(emptyCart())}
          className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
        >
          Remove all
        </p>
      </div>

      <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-[#245236]">
        {cart.length === 0 ? (
          <p className="mt-[1rem] font-semibold italic">
            No Items In Cart 🤧
          </p>
        ) : (
          cart.map((crt, index) => (
            <CartItem
              key={index}
              id={crt.id}
              img={crt.img}
              name={crt.name}
              price={crt.price.toFixed(2)}
              quantity={crt.quantity}
            />
          ))
        )}
      </div>

      <div className="flex justify-between items-center pt-[1rem]">
        <p className="opacity-50 text-[1rem]">TOTAL</p>

        <p className="font-semibold text-[1.1rem] tracking-wider">
          ₦ {totalCost.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          className="border border-gray-300 p-3 rounded outline-none"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="border border-gray-300 p-3 rounded outline-none"
        />

        <textarea
          placeholder="Enter your delivery address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          className="border border-gray-300 p-3 rounded outline-none min-h-[100px]"
        />
      </div>

      {isOrdering ? (
        <button className="bg-[#245236]/50 w-full text-white text-[0.85rem] py-[1rem] px-[2.3rem] font-semibold tracking-wider uppercase">
          <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
        </button>
      ) : (
        <button
          onClick={sendOrder}
          className="bg-[#245236] hover:bg-[#245236]/70 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider uppercase"
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartModal;