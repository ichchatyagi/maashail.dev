import React from "react";

const Shipping = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen py-12 px-4 sm:px-6 mt-20 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-8 text-center">
          Shipping Policy
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-gray-700">
          <p>
            We are committed to delivering your order accurately, in good
            condition, and always on time.
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            Shipping Times
          </h2>
          <p>
            Most orders are processed and shipped within 1-2 business days.
            Once your order has been shipped, you will receive a confirmation
            email with tracking information.
          </p>
          <p>
            - Standard Shipping: 3-5 business days
            <br />
            - Expedited Shipping: 1-2 business days
          </p>
          <h2 className="text-2xl font-semibold text-[#0B2342] pt-4">
            Shipping Costs
          </h2>
          <p>
            Shipping costs are calculated at checkout based on your order's
            weight and destination. We offer free standard shipping on all
            orders over ₹500.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
