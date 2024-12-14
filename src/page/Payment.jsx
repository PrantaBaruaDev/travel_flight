import React, { useState } from 'react';
import master from 'src/assets/mc.jpg';
import visa from "../assets/visa.jpg";
import bkash from "src/assets/bkash.jpg";
import rock from "src/assets/rocket.jpg";
import nagad from "src/assets/nogod.jpg";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('Master Card');

  // Determine if the selected payment is a card or mobile payment
  const isCardPayment = selectedPayment === 'Master Card' || selectedPayment === 'Visa Card';

  return (
    <div className="flex text-teal-700 font-semibold space-x-6 bg-purple-50 p-6 rounded-lg h-[80vh]">
      {/* Payment Method Selection */}
      <div className="w-1/4">
        <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
        <div className="space-y-4">
          {[
            { label: 'Master Card', icon: master },
            { label: 'Visa Card', icon: visa },
            { label: 'Bkash', icon: bkash },
            { label: 'Nogod', icon: nagad },
            { label: 'Rocket', icon: rock },
          ].map((method) => (
            <label key={method.label} className={`flex items-center space-x-3 cursor-pointer px-2 py-4 rounded-lg
              ${selectedPayment == method.label && 'bg-teal-300'}
            `}>
              <input
                type="radio"
                name="paymentMethod"
                value={method.label}
                checked={selectedPayment === method.label}
                onChange={() => setSelectedPayment(method.label)}
                className="hidden form-radio h-5 w-5 text-green-700 focus:ring-green-700 border-gray-300"
              />
              <span className="text-black">{method.label}</span>
              <img src={method.icon} alt={method.label} className="w-8 h-8" />
            </label>
          ))}
        </div>
      </div>

      {/* Payment Form Section */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md h-fit">
        {isCardPayment ? (
          // Card Payment Form
          <div>
            <h3 className="font-semibold mb-4">We accept</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-black">Card Number *</label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="w-full border p-2 rounded text-black"
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label className="block mb-1 text-black">Expiry Date *</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Month"
                      className="w-20 border p-2 rounded text-black"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      className="w-20 border p-2 rounded text-black"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-black">CVV/CVC *</label>
                  <input
                    type="text"
                    placeholder="xxx"
                    className="w-full border p-2 rounded text-black"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-black">Card holder name *</label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full border p-2 rounded text-black"
                />
              </div>
              <button className="mt-6 bg-teal-700 text-white py-2 px-6 rounded-lg">
                Pay Now
              </button>
            </div>
          </div>
        ) : (
          // Mobile Payment Form
          <div>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-black">Mobile Number *</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border p-2 rounded text-black"
                />
              </div>
              <div>
                <label className="block mb-1 text-black">Transaction ID *</label>
                <input
                  type="text"
                  placeholder="Transaction ID"
                  className="w-full border p-2 rounded text-black"
                />
              </div>
              <button className="mt-6 bg-teal-700 text-white py-2 px-6 rounded-lg">
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
