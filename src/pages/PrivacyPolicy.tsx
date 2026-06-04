import Footer from "@/components/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f8faf8] pt-[140px] pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#245236]/10 text-[#245236] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              LEGAL
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#245236]">
              Privacy Policy
            </h1>

            <p className="mt-4 text-gray-600">Effective Date: June 2, 2026</p>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to Lagos Fruit Basket. We are committed to protecting your
              personal information and respecting your privacy. This Privacy
              Policy explains how we collect, use, store, and protect your data
              when you visit our website or place an order with us.
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you agree to the collection
              and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 mb-6">
              To process your orders and deliver your fruit baskets efficiently,
              we may collect the following information:
            </p>

            <div className="space-y-5">
              <div className="bg-[#245236]/5 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">
                  Personal Information
                </h3>
                <p className="text-gray-700">
                  Name, email address, phone number, delivery address, and
                  billing information provided during checkout.
                </p>
              </div>

              <div className="bg-[#245236]/5 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">
                  Usage Information
                </h3>
                <p className="text-gray-700">
                  Information automatically collected such as IP address,
                  browser type, pages visited, and time spent on our website.
                </p>
              </div>

              <div className="bg-[#245236]/5 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">Cookies</h3>
                <p className="text-gray-700">
                  Small files stored on your device that help us remember your
                  preferences and improve your shopping experience.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              2. How We Use Your Data
            </h2>

            <p className="text-gray-700 mb-5">
              Your information is used only for legitimate business purposes,
              including:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Processing, fulfilling, and delivering your orders.</li>
              <li>• Providing customer support and sending order updates.</li>
              <li>
                • Sending newsletters, promotions, and special offers (you may
                unsubscribe at any time).
              </li>
              <li>
                • Monitoring website performance and preventing fraudulent
                activity.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              3. Data Retention & Security
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-800 mb-2">
                  Data Retention
                </h3>
                <p className="text-green-700">
                  We retain your personal information only for as long as
                  necessary to fulfill your orders and meet legal, accounting,
                  or regulatory requirements.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-amber-800 mb-2">Security</h3>
                <p className="text-amber-700">
                  We implement commercially reasonable safeguards to protect
                  your information. However, no method of transmission over the
                  internet or electronic storage can be guaranteed to be
                  completely secure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              4. Third-Party Sharing & Payments
            </h2>

            <p className="text-gray-700 mb-6">
              We do not sell, rent, or trade your personal information. We only
              share data with trusted third parties necessary for operating our
              business.
            </p>

            <div className="space-y-5">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">
                  Delivery Partners
                </h3>
                <p className="text-gray-700">
                  Dispatch riders, drivers, and logistics providers receive only
                  the information necessary to complete your delivery.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">
                  Payment Providers
                </h3>
                <p className="text-gray-700">
                  Payments are processed through secure third-party providers
                  such as Paystack. We do not store or collect your payment card
                  information. Payment data is handled directly by providers
                  that comply with PCI-DSS security standards.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#245236] mb-2">
                  Legal Requirements
                </h3>
                <p className="text-gray-700">
                  We may disclose information when required by law or in
                  response to valid legal requests from Nigerian authorities.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              5. Your Data Rights
            </h2>

            <p className="text-gray-700 mb-5">
              Regardless of your location, you may:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                • Request access to the personal information we hold about you.
              </li>
              <li>• Request corrections to inaccurate information.</li>
              <li>• Request deletion of your personal data.</li>
              <li>• Opt out of marketing communications at any time.</li>
            </ul>

            <div className="mt-6 bg-[#245236]/5 rounded-xl p-5">
              <p className="text-gray-700">
                To exercise any of these rights, please contact us at:
              </p>

              <a
                href="mailto:lagosfruitbasket@gmail.com"
                className="text-[#245236] font-semibold underline"
              >
                lagosfruitbasket@gmail.com
              </a>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              6. Children's Privacy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our services are intended for individuals aged 18 years and above.
              We do not knowingly collect personal information from children. If
              we become aware that a child has submitted personal information,
              we will take steps to delete that information promptly.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold text-[#245236] mb-6">
              7. Changes to This Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page along with a revised Effective Date. We
              encourage you to review this page regularly to stay informed.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#245236] text-white rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>

            <p className="text-white/80 mb-6">
              If you have any questions or concerns about this Privacy Policy,
              we're happy to help.
            </p>

            <a
              href="mailto:lagosfruitbasket@gmail.com"
              className="inline-flex items-center justify-center bg-white text-[#245236] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              lagosfruitbasket@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
