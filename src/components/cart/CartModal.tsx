"use client";

import emailjs from "@emailjs/browser";
import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { emptyCart, toggleCart } from "@/store/audophileSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";

emailjs.init("vniYYZ7cQTr3doimy");

const DELIVERY_FEES: Record<string, number> = {
  "": 0,
  "Lekki Phase 1": 5000,
  Ikate: 5000,
  "Lagos island": 4000,
  Ikoyi: 4000,
  Oniru: 4000,
  Ikota: 7000,
  Chevron: 7000,
  Ajah: 8000,
  Sangotedo: 8000,
  Awoyaya: 8000,
  Surulere: 4000,
  Yaba: 4000,
  Iponri: 4000,
  Ogudu: 4000,
  Gbagada: 4000,
  Maryland: 4000,
  Ojulegba: 4000,
  Egbeda: 8000,
  Alagbado: 8000,
  Ikorodu: 8000,
  Abijo: 8000,
  "Mile 2": 8000,
  Igando: 8000,
  Ojo: 8000,
  Festac: 6000,
  Ogba: 6000,
  Agege: 6000,
  Berger: 6000,
  Abulegba: 6000,
  "Ago Palace and its axis": 6000,
  Iju: 6000,
  "Iyana Ipaja": 6000,
};

const HEAVY_ITEM_MULTIPLIERS: Record<string, number> = {
  "Boyin Basket": 2,
  "Iyanu Basket": 2,
  "Sodiq Basket": 2,
  "The Mubarak Basket": 2,
  "The Halima MK basket": 2,
  "The Olaide Basket": 2,
  "Big Mo Basket": 2,
  "The Imran Basket": 2,
  "The Odunayo Basket": 2,
  "Rukayat Basket": 2,
  "The Kaosarat Basket": 2,
  "The Labake Basket": 2,
  "The Azima Basket": 2,
  "The Barakat Basket": 2,
  "Big Boy Jay Basket": 2,
  "Mutty Basket": 2,
  "The Ayyan Basket": 2,
  "Wandu Basket": 2,
};

type CartItemType = {
  id: string | number;
  name: string;
  quantity: number;
  price: number;
  img: string;
};

const getDeliveryMultiplier = (cart: CartItemType[]): number => {
  const totalQuantity = cart.reduce(
    (acc: number, item: CartItemType) => acc + item.quantity,
    0
  );
  const quantityMultiplier = totalQuantity > 1 ? 2.0 : 1;

  let heavyMultiplier = 1;
  for (const item of cart) {
    const itemMultiplier = HEAVY_ITEM_MULTIPLIERS[item.name];
    if (itemMultiplier && itemMultiplier > heavyMultiplier) {
      heavyMultiplier = itemMultiplier;
    }
  }

  return Math.max(heavyMultiplier, quantityMultiplier);
};

const CartModal = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.appState.cart);

  const [isOrdering, setIsOrdering] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [fulfillmentType, setFulfillmentType] = useState("");

  const subtotal = cart.reduce(
    (acc: number, item: CartItemType) => acc + item.price * item.quantity,
    0
  );

  const deliveryMultiplier = getDeliveryMultiplier(cart);
  const baseDeliveryFee =
    fulfillmentType === "delivery" ? DELIVERY_FEES[selectedLocation] ?? 0 : 0;
  const deliveryFee = baseDeliveryFee * deliveryMultiplier;
  const totalCost = subtotal + deliveryFee;

  const sendOrder = async () => {
    if (cart.length === 0) {
      toast("Your cart is empty. Please add items before placing an order.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
      return;
    }

    if (!fulfillmentType) {
      toast("Please select delivery or pickup.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
      return;
    }

    if (!customerEmail || !customerPhone) {
      toast("Please fill in all required fields.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
      return;
    }

    if (
      fulfillmentType === "delivery" &&
      (!selectedLocation || !customerAddress)
    ) {
      toast("Please select a location and enter your delivery address.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
      return;
    }

    setIsOrdering(true);

    try {
      const filteredCart = cart.map((item: CartItemType) => ({
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
        .join("\n");

      const templateParams = {
        to_email: "lagosfruitbasket@gmail.com",
        customer_email: customerEmail,
        customer_phone: customerPhone,
        fulfillment_type:
          fulfillmentType === "pickup"
            ? "Pickup"
            : `Delivery (${selectedLocation})`,
        customer_address:
          fulfillmentType === "pickup"
            ? "N/A — Customer will pick up"
            : `${customerAddress} (${selectedLocation})`,
        order_summary: orderSummary,
        delivery_fee: `₦${deliveryFee.toFixed(2)}${
          deliveryMultiplier > 1 ? ` (${deliveryMultiplier}× surcharge)` : ""
        }`,
        total_amount: totalCost.toFixed(2),
      };

      const res = await emailjs.send(
        "service_sr8c5ig",
        "template_bxf1xd6",
        templateParams,
        "f1KDM7sAzYsmrrqXP"
      );

      if (res.status === 200) {
        toast("Order placed successfully!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#4CAF50",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "16px",
          },
        });

        dispatch(emptyCart());
        setCustomerEmail("");
        setCustomerPhone("");
        setCustomerAddress("");
        setSelectedLocation("");
        setFulfillmentType("");
      }
    } catch (error) {
      console.error("Failed to send order:", error);
      toast("Failed to place order. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="bg-white px-8 py-8 rounded-xl flex flex-col gap-4 max-h-[90dvh] w-full overflow-y-auto">
      {/* Header */}
      <div className=" w-full flex items-end justify-end h-[20px]">
        <button
          onClick={() => dispatch(toggleCart(false))}
          aria-label="Close cart"
          className="text-[#245236] hover:opacity-60 duration-150 text-[1.4rem] leading-none font-light"
        >
          ✕
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
        <div className="flex items-center gap-3">
          <p
            onClick={() => dispatch(emptyCart())}
            className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
          >
            Remove all
          </p>
        </div>
      </div>

      {/* Cart items */}
      <div className="border-b border-[#245236] pb-4">
        {cart.length === 0 ? (
          <p className="mt-4 font-semibold italic">No Items In Cart 🤧</p>
        ) : (
          cart.map((crt: CartItemType, index: number) => (
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

      {/* Heavy item / multi-item notice */}
      {/* {fulfillmentType === "delivery" && deliveryMultiplier > 1 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-800 text-[0.8rem] px-4 py-2 rounded">
          ⚠️{" "}
          {deliveryMultiplier == 2
            ? "Your cart contains a large item that requires a bigger vehicle."
            : "Multiple items in your cart require a larger delivery vehicle."}{" "}
          Delivery fee is increased.
        </div>
      )} */}

      {fulfillmentType === "delivery" && deliveryMultiplier > 1 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-800 text-[0.8rem] px-4 py-2 rounded">
          ⚠️{" "}
          {cart.some(
            (item: CartItemType) => HEAVY_ITEM_MULTIPLIERS[item.name]
          ) &&
          cart.reduce(
            (acc: number, item: CartItemType) => acc + item.quantity,
            0
          ) === 1
            ? "Your cart contains a large item that requires a bigger vehicle."
            : "Multiple items in your cart require a larger delivery vehicle."}{" "}
          Delivery fee is increased.
        </div>
      )}

      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <p className="opacity-50 text-[1rem]">SUBTOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">
          ₦ {subtotal.toFixed(2)}
        </p>
      </div>

      {/* Delivery fee */}
      {fulfillmentType === "delivery" && selectedLocation && (
        <div className="flex justify-between items-center -mt-2">
          <p className="opacity-50 text-[0.95rem]">DELIVERY</p>
          <p className="font-semibold text-[1rem] tracking-wider text-[#245236]">
            ₦ {deliveryFee.toFixed(2)}
          </p>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center border-t border-[#245236] pt-3">
        <p className="font-semibold text-[1rem]">TOTAL</p>
        <p className="font-bold text-[1.2rem] tracking-wider">
          ₦ {totalCost.toFixed(2)}
        </p>
      </div>

      {/* Form fields */}
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

        {/* Delivery / Pickup toggle */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setFulfillmentType("delivery");
              setCustomerAddress("");
              setSelectedLocation("");
            }}
            className={`py-3 text-[0.85rem] font-semibold tracking-wider uppercase border rounded duration-150
              ${
                fulfillmentType === "delivery"
                  ? "bg-[#245236] text-white border-[#245236]"
                  : "bg-white text-[#245236] border-[#245236] hover:bg-[#245236]/10"
              }`}
          >
            🚚 Delivery
          </button>
          <button
            type="button"
            onClick={() => {
              setFulfillmentType("pickup");
              setCustomerAddress("");
              setSelectedLocation("");
            }}
            className={`py-3 text-[0.85rem] font-semibold tracking-wider uppercase border rounded duration-150
              ${
                fulfillmentType === "pickup"
                  ? "bg-[#245236] text-white border-[#245236]"
                  : "bg-white text-[#245236] border-[#245236] hover:bg-[#245236]/10"
              }`}
          >
            🏪 Pickup
          </button>
        </div>

        {/* Delivery-only fields */}
        {fulfillmentType === "delivery" && (
          <>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border border-gray-300 p-3 rounded outline-none bg-white text-gray-700"
            >
              <option value="">Select delivery location</option>
              {Object.entries(DELIVERY_FEES)
                .filter(([key]) => key !== "")
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([location, fee]) => {
                  const adjustedFee = fee * deliveryMultiplier;
                  return (
                    <option key={location} value={location}>
                      {location} — ₦{adjustedFee.toLocaleString()}
                    </option>
                  );
                })}
            </select>

            <textarea
              placeholder="Enter your delivery address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="border border-gray-300 p-3 rounded outline-none min-h-[100px]"
            />
          </>
        )}

        {/* Pickup note */}
        {fulfillmentType === "pickup" && (
          <p className="text-[0.85rem] text-[#245236] bg-[#245236]/10 px-4 py-3 rounded">
            You'll pick up your order at our store. We'll contact you on the
            number provided once it's ready.
          </p>
        )}
      </div>

      {/* Checkout button */}
      {isOrdering ? (
        <button className="bg-[#245236]/50 w-full text-white text-[0.85rem] py-4 px-9 font-semibold tracking-wider uppercase">
          <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
        </button>
      ) : (
        <button
          onClick={sendOrder}
          className="bg-[#245236] hover:bg-[#245236]/70 w-full text-white text-[0.85rem] duration-150 py-4 px-9 font-semibold tracking-wider uppercase"
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartModal;
