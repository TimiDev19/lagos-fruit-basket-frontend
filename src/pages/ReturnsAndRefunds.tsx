import Footer from "@/components/Footer";
import React from "react";

const ReturnsAndRefunds = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#f8faf8] pt-[145px] pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#245236]/10 text-[#245236] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              POLICY
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#245236]">
              Returns & Refunds Policy
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering fresh, high-quality fruit baskets.
              Please review our returns and refunds policy below.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Final Sales Section */}
            <div className="p-8 md:p-10 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#245236]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🍎</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#245236] mb-4">
                    Fresh Produce Policy
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Because our fruit baskets contain fresh, perishable items,
                    all sales are final. We cannot accept returns, exchanges, or
                    issue refunds for orders due to a change of mind after
                    purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Damaged Items Section */}
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#245236] mb-3">
                    Damaged or Incorrect Orders
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    If your order arrives damaged, defective, or incorrect, we
                    will gladly resolve the issue as quickly as possible.
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-[#245236]/5 rounded-2xl p-6 md:p-8">
                <h3 className="font-semibold text-[#245236] text-lg mb-5">
                  To request assistance:
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">1.</span>
                    <p className="text-gray-700">
                      Contact us within <strong>24 hours of delivery</strong>.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">2.</span>
                    <p className="text-gray-700">
                      Email us at{" "}
                      <a
                        href="mailto:lagosfruitbasket@gmail.com"
                        className="text-[#245236] font-semibold underline"
                      >
                        lagosfruitbasket@gmail.com
                      </a>
                      .
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-bold text-[#245236]">3.</span>
                    <p className="text-gray-700">
                      Include clear photos showing the damaged, defective, or
                      incorrect items received.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-800 mb-2">
                  Important Note
                </h3>

                <p className="text-amber-700 leading-relaxed">
                  Slight wear, dents, or cosmetic imperfections to the outer
                  gift box or basket that occur during transit do not qualify
                  for a refund or replacement, provided that the fruits and
                  contents inside remain fresh, intact, and in good condition.
                </p>
              </div>

              {/* Resolution */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-green-800 mb-3">
                  Resolution Process
                </h3>

                <p className="text-green-700 leading-relaxed">
                  Once your claim has been reviewed and approved, we will
                  arrange for a replacement basket to be delivered. If the
                  affected item is unavailable or out of stock, a full refund
                  will be issued to your original payment method.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-10 bg-[#245236] text-white rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Need Assistance?</h2>

            <p className="text-white/80 mb-6">
              Our team is happy to help with any concerns regarding your order.
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

export default ReturnsAndRefunds;
