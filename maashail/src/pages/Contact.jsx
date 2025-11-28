import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen flex flex-col items-center mt-20  py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-2">Contact Us</h1>
        <p className="text-[#0B2342]/80 text-lg">
          We'd love to hear from you. Get in touch with us anytime!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[1000px] mb-16">
        {/* Address */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-[#0B2342] mb-2">Address</h2>
          <p className="text-[#0B2342]/70">
            F2/16, Basement-1, Ansari Road, Daryaganj, Delhi -110002
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-[#0B2342] mb-2">Phone</h2>
          <p className="text-[#0B2342]/70">+91 9580342304</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-[#0B2342] mb-2">Email</h2>
          <p className="text-[#0B2342]/70">shoprahatrooh@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] md:w-[700px]">
        <h2 className="text-2xl font-bold text-[#0B2342] mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-[#0B2342] font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-[#0B2342]/40 rounded-md p-3 text-[#0B2342] focus:outline-none focus:border-[#0B2342] bg-[#FFF8E1]/30"
            />
          </div>
          <div>
            <label className="block text-[#0B2342] font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-[#0B2342]/40 rounded-md p-3 text-[#0B2342] focus:outline-none focus:border-[#0B2342] bg-[#FFF8E1]/30"
            />
          </div>
          <div>
            <label className="block text-[#0B2342] font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-[#0B2342]/40 rounded-md p-3 text-[#0B2342] focus:outline-none focus:border-[#0B2342] bg-[#FFF8E1]/30"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#0B2342] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#102E5D] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
