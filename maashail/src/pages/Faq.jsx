import React from "react";

const Faq = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#0B2342] mb-2">
              What is Rahat Rooh oil?
            </h2>
            <p className="text-gray-700">
              Rahat Rooh is a line of Ayurvedic oils designed for pain relief,
              relaxation, and hair care. Our products are made from natural
              herbs and ingredients, following traditional Ayurvedic practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#0B2342] mb-2">
              Are your products safe for all skin types?
            </h2>
            <p className="text-gray-700">
              Yes, our products are made from natural ingredients and are
              generally safe for all skin types. However, we recommend doing a
              patch test before full application to ensure you don't have any
              allergic reactions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#0B2342] mb-2">
              How long does shipping take?
            </h2>
            <p className="text-gray-700">
              Shipping usually takes 3-5 business days for domestic orders.
              International shipping times may vary. Please see our Shipping
              page for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
