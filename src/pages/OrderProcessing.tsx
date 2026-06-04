import React from "react";
import { Link } from "react-router-dom";

const OrderProcessing = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center pt-[138px] px-4 bg-[#f7faf6]">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        {/* Processing Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-6 relative">
          <div className="w-14 h-14 rounded-full border-4 border-amber-300 border-t-[#245236] animate-spin"></div>
          <div className="absolute w-4 h-4 rounded-full bg-[#245236]"></div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#245236] mb-4">
          Order Processing
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Thank you for your order. <br />
          We have received your payment and your order is now being reviewed by
          our team. Once everything is confirmed, we will begin preparing your
          basket and contact you with any important updates.
        </p>

        {/* Order Info Card */}
        <div className="bg-[#245236]/5 border border-[#245236]/10 rounded-2xl p-6 text-left mb-8">
          <h2 className="font-semibold text-[#245236] mb-4">
            What is happening now?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">1.</span>
              <p>
                Your order details have been sent to our team for confirmation.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">2.</span>
              <p>
                We are checking your selected delivery date, delivery location,
                and order items.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">3.</span>
              <p>
                You will receive an update once your order moves from processing
                to preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Status Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-amber-800">
            Please keep your phone nearby. We may contact you through call,
            email, or WhatsApp if we need to confirm any order details.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#245236] hover:bg-[#1d442d] text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Continue Shopping
          </Link>

          <a
            href="https://wa.me/2348024015795"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#245236] text-[#245236] hover:bg-[#245236]/5 font-semibold px-8 py-4 rounded-xl transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessing;