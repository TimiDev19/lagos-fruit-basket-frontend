"use client";
import { usePaystackPayment } from "react-paystack";
import emailjs from "@emailjs/browser";
import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { emptyCart, toggleCart } from "@/store/audophileSlice";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

emailjs.init("VgtFaHOnkCYbiwjQM");
const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
const BACKEND_URL = "https://lagos-fruit-basket-paystack.onrender.com";

const DELIVERY_FEES: Record<string, number> = {
  "": 0,
  "test": 1,
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
  "The Hadiza Usman basket": 2,
};

const BASKET_LIMIT = 10;
const SAME_DAY_DELIVERY_CUTOFF_HOUR = 14;

type CartItemType = {
  id: string | number;
  name: string;
  quantity: number;
  price: number;
  img: string;
};

const getWatDateParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const getPart = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: Number(getPart("year")),
    month: Number(getPart("month")),
    day: Number(getPart("day")),
    hour: Number(getPart("hour")),
    dateString: `${getPart("year")}-${getPart("month")}-${getPart("day")}`,
  };
};

const getWatDateAfterDays = (days: number): string => {
  const { year, month, day } = getWatDateParts();
  const targetDate = new Date(Date.UTC(year, month - 1, day + days));

  return targetDate.toISOString().split("T")[0];
};

const isPastSameDayDeliveryCutoff = (): boolean =>
  getWatDateParts().hour >= SAME_DAY_DELIVERY_CUTOFF_HOUR;

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
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.appState.cart);

  const [isOrdering, setIsOrdering] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerWhatsapp, setCustomerWhatsapp] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [fulfillmentType, setFulfillmentType] = useState("");
  const [preferredDeliveryDate, setPreferredDeliveryDate] = useState("");
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState("");
  const [isAfterSameDayCutoff, setIsAfterSameDayCutoff] = useState(
    isPastSameDayDeliveryCutoff
  );

  // Gift feature state
  const [isGift, setIsGift] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientWhatsapp, setRecipientWhatsapp] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  useEffect(() => {
    const updateCutoffStatus = () =>
      setIsAfterSameDayCutoff(isPastSameDayDeliveryCutoff());

    updateCutoffStatus();
    const intervalId = window.setInterval(updateCutoffStatus, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const subtotal = cart.reduce(
    (acc: number, item: CartItemType) => acc + item.price * item.quantity,
    0
  );

  const totalBasketQuantity = cart.reduce(
    (acc: number, item: CartItemType) => acc + item.quantity,
    0
  );
  const isAtLimit = totalBasketQuantity >= BASKET_LIMIT;

  const deliveryMultiplier = getDeliveryMultiplier(cart);
  const baseDeliveryFee =
    fulfillmentType === "delivery" ? DELIVERY_FEES[selectedLocation] ?? 0 : 0;
  const deliveryFee = baseDeliveryFee * deliveryMultiplier;
  const totalCost = subtotal + deliveryFee;

  const minimumDeliveryDate = isAfterSameDayCutoff
    ? getWatDateAfterDays(1)
    : getWatDateParts().dateString;

  const config = {
    reference: new Date().getTime().toString(),
    email: customerEmail,
    amount: Math.round(totalCost * 100),
    publicKey: PAYSTACK_KEY,
  };

  const initializePayment = usePaystackPayment(config);

  const buildTemplateParams = () => {
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

    return {
      to_email: "lagosfruitbasket@gmail.com",
      customer_email: customerEmail,
      customer_phone: customerPhone,
      customer_whatsapp: customerWhatsapp || "Not provided",
      fulfillment_type:
        fulfillmentType === "pickup"
          ? "Pickup"
          : `Delivery (${selectedLocation})`,
      customer_address:
        fulfillmentType === "pickup"
          ? "N/A — Customer will pick up"
          : `${customerAddress} (${selectedLocation})`,
      preferred_delivery_date:
        fulfillmentType === "delivery" && preferredDeliveryDate
          ? preferredDeliveryDate
          : "N/A",
      preferred_delivery_time:
        fulfillmentType === "delivery" && preferredDeliveryTime
          ? preferredDeliveryTime === "morning"
            ? "Morning (Before 12pm)"
            : "Afternoon (12pm – 5pm)"
          : "N/A",
      order_summary: orderSummary,
      delivery_fee: `₦${deliveryFee.toFixed(2)}${
        deliveryMultiplier > 1 ? ` (${deliveryMultiplier}× surcharge)` : ""
      }`,
      total_amount: totalCost.toFixed(2),
      // Gift fields
      is_gift: isGift ? "Yes 🎁" : "No",
      recipient_name: isGift && recipientName ? recipientName : "N/A",
      recipient_phone: isGift && recipientPhone ? recipientPhone : "N/A",
      recipient_whatsapp: isGift && recipientWhatsapp ? recipientWhatsapp : "N/A",
      recipient_email: isGift && recipientEmail ? recipientEmail : "N/A",
    };
  };

  const sendOrderEmail = async () =>
    emailjs.send(
      "service_0fmq306",
      "template_v5ek0ik",
      buildTemplateParams(),
      "VgtFaHOnkCYbiwjQM"
    );

  const sendConfirmationEmail = async () =>
    emailjs.send(
      "service_0fmq306",
      "template_gc7tw8j",
      buildTemplateParams(),
      "VgtFaHOnkCYbiwjQM"
    );

  const resetForm = () => {
    setCustomerEmail("");
    setCustomerPhone("");
    setCustomerWhatsapp("");
    setCustomerAddress("");
    setSelectedLocation("");
    setFulfillmentType("");
    setPreferredDeliveryDate("");
    setPreferredDeliveryTime("");
    setIsGift(false);
    setRecipientName("");
    setRecipientPhone("");
    setRecipientWhatsapp("");
    setRecipientEmail("");
  };

  // const onSuccess = async (reference: any) => {
  //   try {
  //     setIsOrdering(true);
  //     dispatch(toggleCart(false));
  //     navigate("/orderProcessing");
  //     const res = await fetch(`${BACKEND_URL}/api/payment/verify`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ reference: reference.reference }),
  //     });

  //     const data = await res.json();

  //     if (!data.success) {
  //       toast("Payment verification failed", {
  //         duration: 4000,
  //         position: "top-center",
  //         style: { background: "red", color: "#fff" },
  //       });
  //       return;
  //     }

  //     await sendOrderEmail();

  //     toast("Payment successful!", {
  //       duration: 4000,
  //       position: "top-center",
  //       style: { background: "#4CAF50", color: "#fff" },
  //     });

  //     dispatch(emptyCart());
  //     await sendConfirmationEmail();
  //     navigate("/orderConfirmed");

  //     resetForm();
  //   } catch (error) {
  //     console.error(error);
  //     toast("Something went wrong during payment verification", {
  //       style: { background: "red", color: "#fff" },
  //     });
  //   } finally {
  //     setIsOrdering(false);
  //   }
  // };

  const onSuccess = async (reference: any) => {
    try {
      setIsOrdering(true);
      dispatch(toggleCart(false));
      // ✅ Removed navigate() from here

      const res = await fetch(`${BACKEND_URL}/api/payment/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: reference.reference }),
      });

      const data = await res.json();

      if (!data.success) {
        toast("Payment verification failed", {
          duration: 4000,
          position: "top-center",
          style: { background: "red", color: "#fff" },
        });
        return;
      }

      await sendOrderEmail();        // ✅ Runs safely now
      await sendConfirmationEmail(); // ✅ Runs safely now

      toast("Payment successful!", {
        duration: 4000,
        position: "top-center",
        style: { background: "#4CAF50", color: "#fff" },
      });

      dispatch(emptyCart());
      resetForm();
      navigate("/orderConfirmed");   // ✅ Navigate last, after all work is done
    } catch (error) {
      console.error(error);
      toast("Something went wrong during payment verification", {
        style: { background: "red", color: "#fff" },
      });
    } finally {
      setIsOrdering(false);
    }
  };

  const onClose = () => {
    toast("Payment cancelled", { duration: 3000, position: "top-center" });
  };

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

    if (totalBasketQuantity > BASKET_LIMIT) {
      toast(
        `You can only order up to ${BASKET_LIMIT} baskets per checkout. Please reduce your quantity.`,
        {
          duration: 5000,
          position: "top-center",
          style: {
            background: "red",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "16px",
          },
        }
      );
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

    if (isGift && (!recipientName || !recipientPhone)) {
      toast("Please enter the recipient's name and phone number for the gift.", {
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

    if (fulfillmentType === "delivery" && !preferredDeliveryDate) {
      toast("Please select your preferred delivery date.", {
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
      preferredDeliveryDate < minimumDeliveryDate
    ) {
      toast(
        "Same-day delivery is no longer available after 2pm WAT. Please choose tomorrow or a later date.",
        {
          duration: 5000,
          position: "top-center",
          style: {
            background: "red",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "16px",
          },
        }
      );
      return;
    }

    if (
      fulfillmentType === "delivery" &&
      preferredDeliveryDate > getWatDateParts().dateString &&
      !preferredDeliveryTime
    ) {
      toast("Please select your preferred delivery time.", {
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

    initializePayment({ onSuccess, onClose });
  };

  const timeToggleBase =
    "flex-1 py-3 text-[0.85rem] font-semibold tracking-wider uppercase border rounded duration-150";
  const timeToggleActive = "bg-[#245236] text-white border-[#245236]";
  const timeToggleInactive =
    "bg-white text-[#245236] border-[#245236] hover:bg-[#245236]/10";

  return (
    <div className="bg-white px-8 py-8 rounded-xl flex flex-col gap-4 max-h-[90dvh] w-full overflow-y-auto">
      <div className="w-full flex items-end justify-end h-[20px]">
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

      {isAtLimit && (
        <div className="bg-red-50 border border-red-300 text-red-700 text-[0.8rem] px-4 py-2 rounded">
          ⛔ You've reached the maximum of {BASKET_LIMIT} baskets per checkout.
          You cannot add more items to this order.
        </div>
      )}

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

      <div className="flex justify-between items-center">
        <p className="opacity-50 text-[1rem]">SUBTOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">
          ₦ {subtotal.toFixed(2)}
        </p>
      </div>

      {fulfillmentType === "delivery" && selectedLocation && (
        <div className="flex justify-between items-center -mt-2">
          <p className="opacity-50 text-[0.95rem]">DELIVERY</p>
          <p className="font-semibold text-[1rem] tracking-wider text-[#245236]">
            ₦ {deliveryFee.toFixed(2)}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center border-t border-[#245236] pt-3">
        <p className="font-semibold text-[1rem]">TOTAL</p>
        <p className="font-bold text-[1.2rem] tracking-wider">
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

        <div className="relative">
          <input
            type="tel"
            placeholder="WhatsApp number (optional)"
            value={customerWhatsapp}
            onChange={(e) => setCustomerWhatsapp(e.target.value)}
            className="border border-gray-300 p-3 rounded outline-none w-full"
          />
        </div>

        {/* Gift Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsGift((prev) => !prev);
            if (isGift) {
              setRecipientName("");
              setRecipientPhone("");
              setRecipientWhatsapp("");
              setRecipientEmail("");
            }
          }}
          className={`flex items-center justify-between w-full py-3 px-4 border rounded duration-150 text-[0.85rem] font-semibold tracking-wider
            ${
              isGift
                ? "bg-[#245236] text-white border-[#245236]"
                : "bg-white text-[#245236] border-[#245236] hover:bg-[#245236]/10"
            }`}
        >
          <span>🎁 Sending as a Gift?</span>
          <span className={`text-[0.75rem] font-normal ${isGift ? "opacity-80" : "opacity-60"}`}>
            {isGift ? "Yes — tap to remove" : "Tap to add recipient details"}
          </span>
        </button>

        {/* Gift Recipient Fields */}
        {isGift && (
          <div className="flex flex-col gap-3 bg-[#245236]/5 border border-[#245236]/30 rounded-lg px-4 py-4">
            <p className="text-[0.78rem] text-[#245236] font-semibold uppercase tracking-wider">
              🎁 Gift Recipient Details
            </p>
            <input
              type="text"
              placeholder="Recipient's name *"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="border border-gray-300 p-3 rounded outline-none w-full bg-white"
            />
            <input
              type="tel"
              placeholder="Recipient's phone number *"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              className="border border-gray-300 p-3 rounded outline-none w-full bg-white"
            />
            <div className="relative">
              <input
                type="tel"
                placeholder="Recipient's WhatsApp number (optional)"
                value={recipientWhatsapp}
                onChange={(e) => setRecipientWhatsapp(e.target.value)}
                className="border border-gray-300 p-3 rounded outline-none w-full bg-white"
              />
              {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[0.75rem] pointer-events-none">
                optional
              </span> */}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Recipient's email address (optional)"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="border border-gray-300 p-3 rounded outline-none w-full bg-white"
              />
              {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[0.75rem] pointer-events-none">
                optional
              </span> */}
            </div>
            <p className="text-[0.75rem] text-gray-500">
              We'll use these details to coordinate delivery with the recipient.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setFulfillmentType("delivery");
              setCustomerAddress("");
              setSelectedLocation("");
              setPreferredDeliveryDate("");
              setPreferredDeliveryTime("");
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
              setPreferredDeliveryDate("");
              setPreferredDeliveryTime("");
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

        {fulfillmentType === "delivery" && (
          <div
            className={`text-[0.8rem] px-4 py-2 rounded font-bold border ${
              isAfterSameDayCutoff
                ? "bg-black/10 border-black/40 text-black"
                : "bg-[#245236]/10 border-[#245236] text-[#245236]"
            }`}
          >
            {isAfterSameDayCutoff
              ? "Same-day delivery is closed for today because it is past 2pm (WAT). Please choose tomorrow or a later date."
              : "Same-day delivery is still available until 2pm (WAT) today."}
          </div>
        )}

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
              placeholder="Enter your DETAILED delivery address and landmarks"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="border border-gray-300 p-3 rounded outline-none min-h-[100px]"
            />

            <div className="flex flex-col gap-1">
              <label className="text-[0.8rem] text-gray-500 font-medium tracking-wide uppercase">
                Preferred Delivery Date
              </label>
              <input
                type="date"
                value={preferredDeliveryDate}
                min={minimumDeliveryDate}
                onChange={(e) => {
                  setPreferredDeliveryDate(e.target.value);
                  if (e.target.value <= getWatDateParts().dateString) {
                    setPreferredDeliveryTime("");
                  }
                }}
                className="border border-gray-300 p-3 rounded outline-none bg-white text-gray-700"
              />
            </div>

            {preferredDeliveryDate && preferredDeliveryDate > getWatDateParts().dateString && (
              <div className="flex flex-col gap-1">
                <label className="text-[0.8rem] text-gray-500 font-medium tracking-wide uppercase">
                  Preferred Delivery Time
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredDeliveryTime("morning")}
                    className={`${timeToggleBase} ${
                      preferredDeliveryTime === "morning"
                        ? timeToggleActive
                        : timeToggleInactive
                    }`}
                  >
                    🌤 Morning
                    <span className="block text-[0.7rem] font-normal normal-case tracking-normal mt-0.5 opacity-80">
                      Before 12pm
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredDeliveryTime("afternoon")}
                    className={`${timeToggleBase} ${
                      preferredDeliveryTime === "afternoon"
                        ? timeToggleActive
                        : timeToggleInactive
                    }`}
                  >
                    ☀️ Afternoon
                    <span className="block text-[0.7rem] font-normal normal-case tracking-normal mt-0.5 opacity-80">
                      12pm – 4pm
                    </span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {fulfillmentType === "pickup" && (
          <p className="text-[0.85rem] text-[#245236] bg-[#245236]/10 px-4 py-3 rounded">
            Store Pickup Available <br />
            Prefer to pick up your order? Visit us at 38 Olonode Street, Yaba,
            Lagos. <br /> <br />
            To arrange your pickup time and finalize payment, please chat with
            our sales representative. <br />
            👉 Chat with us on WhatsApp
          </p>
        )}
      </div>

      {fulfillmentType === "pickup" ? (
        <>
          {isOrdering ? (
            <button className="bg-[#245236]/50 w-full text-white text-[0.85rem] py-4 px-9 font-semibold tracking-wider uppercase">
              <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
            </button>
          ) : (
            <Link
              to={"https://wa.me/+2348024015795"}
              target="_blank"
              className="bg-[#245236] hover:bg-[#245236]/70 w-full text-white text-[0.85rem] duration-150 py-4 px-9 font-semibold tracking-wider uppercase"
            >
              Chat With Us on Whatsapp
            </Link>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default CartModal;