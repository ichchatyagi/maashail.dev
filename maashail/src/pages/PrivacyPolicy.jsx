import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-gray-700">
          <p>
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your personal information.
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, shipping address, and payment information when you place
            an order on our site.
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            How We Use Your Information
          </h2>
          <p>
            The information we collect is used to process your orders,
            communicate with you about your purchase, and improve our
            services. We do not sell or share your personal information with
            third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
