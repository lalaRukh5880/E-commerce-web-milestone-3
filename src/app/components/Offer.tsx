"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "1. What are the delivery options and areas you serve?",
      description: "We deliver to only Karachi areas; check at checkout for availability.",
    },
    {
      title: "Can I customize my order?",
      description: "Yes, you can select flavors, toppings, and sizes on the product page.",
    },
    {
      title: "What is your refund policy?",
      description: "We offer refunds only for damaged  orders reported within 24 hours.",
    },
    {
      title: "Do you have any ongoing discounts?",
      description: "Yes, check our Special Offers section for current deals and promotions.",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  const leftFAQs = offers.slice(0, Math.ceil(offers.length / 2));
  const rightFAQs = offers.slice(Math.ceil(offers.length / 2));

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-black">FAQs</h2>

        {/* FAQ Columns */}
        <div className="flex justify-center gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-1/2">
            {leftFAQs.map((offer, index) => (
              <button
                key={index}
                onClick={() => handleOfferClick(offer.description)}
                className="bg-white py-4 px-6 shadow-md rounded-lg text-left hover:bg-yellow-300 transition duration-300"
              >
                <h3 className="text-xl font-bold text-red-800">{offer.title}</h3>
                <p className="text-gray-700 mt-2">{offer.description}</p>
              </button>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-1/2">
            {rightFAQs.map((offer, index) => (
              <button
                key={index}
                onClick={() => handleOfferClick(offer.description)}
                className="bg-white py-4 px-6 shadow-md rounded-lg text-left hover:bg-yellow-300 transition duration-300"
              >
                <h3 className="text-xl font-bold text-red-800">{offer.title}</h3>
                <p className="text-gray-700 mt-2">{offer.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
