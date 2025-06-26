"use client";
import React, { useState } from "react";
import {
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
  IconBuilding,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import toast from "react-hot-toast";
import CustomToast from "./CustomToast";
import { motion } from "framer-motion";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phone: {
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

  //backend
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          phone: formData.phone.value,
          message: formData.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.custom((t) => (
          <CustomToast
            t={t}
            message="Gửi liên hệ thành công!"
            type="success"
            duration={4000}
            onClose={() => toast.dismiss(t.id)}
          />
        ));
        setFormData(defaultFormState);
      } else {
        toast.custom((t) => (
          <CustomToast
            t={t}
            message={data.error || "Có lỗi xảy ra, vui lòng thử lại."}
            type="error"
            duration={4000}
            onClose={() => toast.dismiss(t.id)}
          />
        ));
      }
    } catch (err) {
      toast.custom((t) => (
        <CustomToast
          t={t}
          message="Không thể kết nối máy chủ, vui lòng thử lại sau."
          type="error"
          duration={4000}
          onClose={() => toast.dismiss(t.id)}
        />
      ));
    }
  };

  //frontend
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Tên của bạn"
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
            type="tel"
            placeholder="Số điện thoại"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.phone.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Địa chỉ Email"
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
            placeholder="Ghi chú"
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
          Submit
        </button>
      </form>
      <motion.section
        whileHover={{
          // scale: 1.03,
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
          backgroundColor: "rgba(255,255,255,0.35)",
        }}
        className="relative z-10 bg-gradient-to-br from-blue-200/40 via-white/30 to-purple-200/40 bg-white/30 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-8 mb-8 mt-8 transition-all duration-300"
      >
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
      </motion.section>
    </>
  );
};
