import React from "react";

const Returns = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-8 text-center">
          Return & Refund Policy
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-gray-700">
          <p>
            We want you to be completely satisfied with your purchase. If you
            are not happy with your order, you can return it within 30 days of
            the purchase date.
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            Conditions for Return
          </h2>
          <p>
            - The item must be in its original, unused condition.
            <br />
            - It must be in the original packaging.
            <br />- A receipt or proof of purchase is required.
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            How to Initiate a Return
          </h2>
          <p>
            To initiate a return, please contact our customer service team at
            support@maashail.com with your order number and reason for return.
            We will provide you with instructions on how to proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returns;
