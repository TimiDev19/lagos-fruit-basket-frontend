import Footer from "@/components/Footer";
import React from "react";

const ShippingAndDelivery = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f8faf8] pt-[140px] pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#245236]/10 text-[#245236] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              POLICY
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#245236]">
              Shipping & Delivery Policy
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We strive to deliver every fruit basket fresh, on time, and in
              excellent condition. Please review our delivery guidelines below.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Coverage Area */}
            <div className="p-8 md:p-10 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#245236]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚚</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#245236] mb-4">
                    Delivery Coverage
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    We currently deliver within Lagos only. Shipping costs are
                    calculated at checkout based on your selected delivery
                    location and the size or weight of your basket.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Schedule */}
            <div className="p-8 md:p-10 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕒</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#245236] mb-4">
                    Delivery Schedule
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Orders are processed and shipped seven days a week.
                  </p>

                  <div className="mt-4 inline-block bg-[#245236]/5 border border-[#245236]/10 rounded-xl px-5 py-3">
                    <p className="font-semibold text-[#245236]">
                      Monday – Sunday
                    </p>
                    <p className="text-gray-600">9:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Accuracy */}
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#245236] mb-3">
                    Address Accuracy
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Please carefully review your delivery address and recipient
                    contact information before completing your order.
                  </p>
                </div>
              </div>

              <div className="bg-[#245236]/5 rounded-2xl p-6 md:p-8">
                <h3 className="font-semibold text-[#245236] text-lg mb-5">
                  Important Information
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">1.</span>
                    <p className="text-gray-700">
                      Delivery addresses cannot be changed once the dispatch
                      rider or delivery driver has left our facility.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">2.</span>
                    <p className="text-gray-700">
                      Please ensure the recipient's phone number is accurate and
                      reachable on the day of delivery.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">3.</span>
                    <p className="text-gray-700">
                      We recommend confirming that someone will be available to
                      receive the basket at the delivery location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Non-refundable Delivery Fees */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-800 mb-2">
                  Delivery Fees Are Non-Refundable
                </h3>

                <p className="text-amber-700 leading-relaxed">
                  Delivery fees are non-refundable for completed deliveries,
                  refused packages, or failed delivery attempts. Once delivery
                  services have been provided, the associated delivery charge
                  cannot be refunded.
                </p>
              </div>

              {/* Re-delivery Charges */}
              <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-semibold text-red-800 mb-3">
                  Re-Delivery Charges
                </h3>

                <p className="text-red-700 leading-relaxed mb-4">
                  If a basket is returned to us because:
                </p>

                <ul className="list-disc list-inside text-red-700 space-y-2 mb-4">
                  <li>The delivery address provided was incorrect.</li>
                  <li>The address was incomplete or insufficient.</li>
                  <li>The recipient could not be reached.</li>
                  <li>No one was available to receive the basket.</li>
                </ul>

                <p className="text-red-700 leading-relaxed">
                  An additional delivery fee will be required before the order
                  can be dispatched again.
                </p>
              </div>

              {/* Fresh Produce Notice */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-green-800 mb-3">
                  Fresh Produce Notice
                </h3>

                <p className="text-green-700 leading-relaxed">
                  Because our baskets contain fresh and perishable fruits, we
                  strongly recommend ensuring someone is available to receive
                  the order on the scheduled delivery day. This helps preserve
                  the freshness and quality of your basket.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-10 bg-[#245236] text-white rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Questions About Delivery?
            </h2>

            <p className="text-white/80 mb-6">
              Contact our team if you need assistance before placing your order.
            </p>

            <a
              href="mailto:lagosfruitbasket@gmail.com"
              className="inline-flex items-center justify-center bg-white text-[#245236] font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingAndDelivery;
