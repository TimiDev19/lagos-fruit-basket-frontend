import { Link } from "react-router-dom";

export default function CompanyLocationSection() {
  return (
    <div className="min-h-screen bg-white text-[#245236] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#245236]/10 bg-[#245236]/5 px-4 py-2 text-sm text-[#245236] backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Store Location
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Visit Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EFF901] to-[#245236]">
                Physical Store
              </span>
            </h1>

            <p className="text-[#245236] text-lg leading-relaxed max-w-xl">
              Easily locate our office and connect with our team. Whether you're
              visiting for a meeting, collaboration, or support, our doors are
              always open.
            </p>
          </div>

          {/* Contact Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-5 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#245236]/10 border border-[#245236]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#245236]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Store Address</h3>
                <p className="text-slate-400 mt-1">
                38 Olonode St, Alagomeji-Yaba, Lagos 110001, Lagos
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#245236] p-4">
                <p className="text-sm text-white">Working Hours</p>
                <p className="mt-1 font-medium text-[#EFF901]">Mon - Sun · 7AM - 7PM</p>
              </div>

              <div className="rounded-2xl bg-[#245236] p-4">
                <p className="text-sm text-white">Contact</p>
                <p className="mt-1 font-medium text-[#EFF901]">+234 707 505 1036</p>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#EFF901] to-[#EFF901] hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/20">
                Get Directions
              </button>

              <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-medium">
                Contact Us
              </button>
            </div> */}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full" />

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#245236] backdrop-blur-xl shadow-2xl shadow-black/40">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/20 backdrop-blur-md">
              <div>
                <h2 className="font-semibold text-lg text-[#EFF901]">Our Office Location</h2>
                <p className="text-sm text-white">
                  Interactive Google Map Integration
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126832.27312311927!2d3.287038259481555!3d6.583527651199229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8337173b21953857%3A0xed0526be8b11896d!2sLagos%20Fruit%20Basket%20(Fruit%20Hamper%20Company%20in%20Lagos%2C%20Nigeria)!5e0!3m2!1sen!2sng!4v1777814194530!5m2!1sen!2sng"
                // width="600"
                // height="450"
                className=" w-full h-full"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#245236] border border-white/10 backdrop-blur-xl p-4 flex items-center justify-between gap-4">
              <div>
                {/* <p className="text-sm text-white">Current Office</p> */}
                <h4 className="font-semibold text-white">Physical Store</h4>
              </div>

              <Link target="_blank" to={"https://www.google.com/maps/place/Lagos+Fruit+Basket+(Fruit+Hamper+Company+in+Lagos,+Nigeria)/@6.4959694,3.3790881,17z/data=!4m7!3m6!1s0x8337173b21953857:0xed0526be8b11896d!8m2!3d6.4959694!4d3.3790881!10e2!16s%2Fg%2F11w1lqd50y?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"} className="px-5 py-2 rounded-xl bg-white text-slate-900 font-medium hover:scale-105 transition-transform duration-300">
                Open in Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
