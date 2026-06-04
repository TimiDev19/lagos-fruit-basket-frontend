import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  return (
    <div className=" min-h-[100vh] flex items-center justify-center pt-[138px]">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#245236] mb-4">
          Order Confirmed!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          ​Thank you for shopping with us. <br /> ​Your payment went through perfectly.
          We’ve sent a summary of your order to your email, and we are already
          getting started on your delivery. ​Sit back and relax, your order will
          arrive right on schedule according to your delivery date timeline.
        </p>

        {/* Order Info Card */}
        <div className="bg-[#245236]/5 border border-[#245236]/10 rounded-2xl p-6 text-left mb-8">
          <h2 className="font-semibold text-[#245236] mb-4">
            What happens next?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">1.</span>
              <p>
                A confirmation email has been sent to the email address provided
                during checkout.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">2.</span>
              <p>
                Our team will review and prepare your order for delivery or
                pickup.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-[#245236]">3.</span>
              <p>
                You will be contacted shortly with updates regarding your order.
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-amber-800">
            Need help with your order?{" "}
            <a
              href="https://wa.me/2348024015795"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Contact us on WhatsApp
            </a>
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

export default OrderConfirmed;
