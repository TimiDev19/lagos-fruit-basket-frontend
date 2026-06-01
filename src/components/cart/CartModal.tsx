// 'use client';

// import emailjs from '@emailjs/browser';
// import CartItem from './CartItem';
// import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
// import { emptyCart } from '@/store/audophileSlice';
// import { useState } from 'react';
// import { toast } from 'react-hot-toast';

// emailjs.init('vniYYZ7cQTr3doimy');

// const CartModal = () => {
//   const dispatch = useAppDispatch();

//   const cart = useAppSelector((state) => state.appState.cart);

//   const [isOrdering, setIsOrdering] = useState(false);

//   const [customerEmail, setCustomerEmail] = useState('');
//   const [customerPhone, setCustomerPhone] = useState('');
//   const [customerAddress, setCustomerAddress] = useState('');

//   const totalCostArr = cart.flatMap(
//     (crt) => crt.quantity * crt.price
//   );

//   const totalCost = totalCostArr.reduce((acc, current) => {
//     return acc + current;
//   }, 0);

//   const sendOrder = async () => {
//     if (cart.length === 0) {
//       toast('Your cart is empty. Please add items before placing an order.', {
//         duration: 4000,
//         position: 'top-center',
//         style: {
//           background: 'red',
//           color: '#fff',
//           padding: '16px',
//           borderRadius: '8px',
//           fontSize: '16px',
//         },
//       });

//       return;
//     }

//     if (!customerEmail || !customerPhone || !customerAddress) {
//       toast('Please fill in all fields.', {
//         duration: 4000,
//         position: 'top-center',
//         style: {
//           background: 'red',
//           color: '#fff',
//           padding: '16px',
//           borderRadius: '8px',
//           fontSize: '16px',
//         },
//       });

//       return;
//     }

//     setIsOrdering(true);

//     try {
//       const filteredCart = cart.map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       }));

//       const orderSummary = filteredCart
//         .map(
//           (item) =>
//             `${item.name} x${item.quantity} - ₦${(
//               item.price * item.quantity
//             ).toFixed(2)}`
//         )
//         .join('\n');

//       const templateParams = {
//         to_email: 'lagosfruitbasket@gmail.com',
//         customer_email: customerEmail,
//         customer_phone: customerPhone,
//         customer_address: customerAddress,
//         order_summary: orderSummary,
//         total_amount: totalCost.toFixed(2),
//       };

//       const res = await emailjs.send(
//         'service_sr8c5ig',
//         'template_bxf1xd6',
//         templateParams,
//         'f1KDM7sAzYsmrrqXP'
//       );

//       if (res.status === 200) {
//         toast('Order placed successfully!', {
//           duration: 4000,
//           position: 'top-center',
//           style: {
//             background: '#4CAF50',
//             color: '#fff',
//             padding: '16px',
//             borderRadius: '8px',
//             fontSize: '16px',
//           },
//         });

//         dispatch(emptyCart());

//         setCustomerEmail('');
//         setCustomerPhone('');
//         setCustomerAddress('');
//       }
//     } catch (error) {
//       console.error('Failed to send order:', error);

//       toast('Failed to place order. Please try again.', {
//         duration: 4000,
//         position: 'top-center',
//         style: {
//           background: 'red',
//           color: '#fff',
//           padding: '16px',
//           borderRadius: '8px',
//           fontSize: '16px',
//         },
//       });
//     } finally {
//       setIsOrdering(false);
//     }
//   };

//   return (
//     <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[1rem]">
//       <div className="flex justify-between">
//         <p className="font-semibold text-[1.1rem] tracking-widest">
//           {`CART (${cart.length})`}
//         </p>

//         <p
//           onClick={() => dispatch(emptyCart())}
//           className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
//         >
//           Remove all
//         </p>
//       </div>

//       <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-[#245236]">
//         {cart.length === 0 ? (
//           <p className="mt-[1rem] font-semibold italic">
//             No Items In Cart 🤧
//           </p>
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

//         <p className="font-semibold text-[1.1rem] tracking-wider">
//           ₦ {totalCost.toFixed(2)}
//         </p>
//       </div>

//       <div className="flex flex-col gap-3">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={customerEmail}
//           onChange={(e) => setCustomerEmail(e.target.value)}
//           className="border border-gray-300 p-3 rounded outline-none"
//         />

//         <input
//           type="tel"
//           placeholder="Enter your phone number"
//           value={customerPhone}
//           onChange={(e) => setCustomerPhone(e.target.value)}
//           className="border border-gray-300 p-3 rounded outline-none"
//         />

//         <textarea
//           placeholder="Enter your delivery address"
//           value={customerAddress}
//           onChange={(e) => setCustomerAddress(e.target.value)}
//           className="border border-gray-300 p-3 rounded outline-none min-h-[100px]"
//         />
//       </div>

//       {isOrdering ? (
//         <button className="bg-[#245236]/50 w-full text-white text-[0.85rem] py-[1rem] px-[2.3rem] font-semibold tracking-wider uppercase">
//           <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
//         </button>
//       ) : (
//         <button
//           onClick={sendOrder}
//           className="bg-[#245236] hover:bg-[#245236]/70 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider uppercase"
//         >
//           Checkout
//         </button>
//       )}
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

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
    <div className="bg-white px-8 py-8 rounded-xl flex flex-col gap-4 max-h-[90dvh] overflow-hidden w-full">
      <div className="flex justify-between shrink-0">
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

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain border-b border-[#245236] pb-4">
        {cart.length === 0 ? (
          <p className="mt-4 font-semibold italic">
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

      <div className="flex justify-between items-center shrink-0">
        <p className="opacity-50 text-[1rem]">TOTAL</p>

        <p className="font-semibold text-[1.1rem] tracking-wider">
          ₦ {totalCost.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-3 shrink-0">
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
        <button className="bg-[#245236]/50 w-full text-white text-[0.85rem] py-4 px-9 font-semibold tracking-wider uppercase shrink-0">
          <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
        </button>
      ) : (
        <button
          onClick={sendOrder}
          className="bg-[#245236] hover:bg-[#245236]/70 w-full text-white text-[0.85rem] duration-150 py-4 px-9 font-semibold tracking-wider uppercase shrink-0"
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartModal;