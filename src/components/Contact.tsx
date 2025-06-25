"use client";
import React, { useState } from "react";
import {
  IconBuilding,
  IconMapPin,
  IconMail,
  IconPhone,
  IconInfoCircle,
} from "@tabler/icons-react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
          type="submit"
        >
          Submit{" "}
        </button>
      </form>
      {/* Section thông tin công ty */}
      <div
        className="mt-8 p-6 rounded-2xl border border-white/30 shadow-xl bg-white/80 backdrop-blur-md bg-clip-padding relative overflow-hidden animate-fade-in"
        style={{
          animation: "fadeIn 1s ease",
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 font-bold text-base mb-4 text-sky-700">
            <IconInfoCircle size={22} className="text-sky-500 animate-bounce" />
            Thông tin liên hệ công ty
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IconBuilding size={20} className="text-purple-500" />
            <span className="font-semibold">AIFicient</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IconMapPin size={20} className="text-pink-500" />
            Địa chỉ: 123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IconMail size={20} className="text-sky-500" />
            Email:
            <a
              href="mailto:contact@aificent.com"
              className="underline hover:text-sky-600 transition-colors"
            >
              contact@aificent.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IconPhone size={20} className="text-green-500" />
            Điện thoại:
            <a
              href="tel:+84123456789"
              className="underline hover:text-green-600 transition-colors"
            >
              0123 456 789
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/about"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-purple-400 text-white text-xs font-semibold shadow hover:scale-105 transition-transform"
            >
              <IconInfoCircle size={16} /> Về chúng tôi
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs font-semibold shadow hover:scale-105 transition-transform"
            >
              <IconMail size={16} /> Liên hệ
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
