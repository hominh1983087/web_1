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
import validator from "validator";

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name.value.trim()) {
      errors.name = "Vui lòng nhập tên của bạn.";
    }

    if (!formData.email.value.trim()) {
      errors.email = "Vui lòng nhập địa chỉ email.";
    } else if (!validator.isEmail(formData.email.value)) {
      errors.email = "Địa chỉ email không hợp lệ.";
    }

    if (!formData.phone.value.trim()) {
      errors.phone = "Vui lòng nhập số điện thoại.";
    }

    if (!formData.message.value.trim()) {
      errors.message = "Vui lòng nhập ghi chú.";
    }

    if (errors.name || errors.email || errors.phone || errors.message) {
      setFormData({
        name: { ...formData.name, error: errors.name },
        email: { ...formData.email, error: errors.email },
        phone: { ...formData.phone, error: errors.phone },
        message: { ...formData.message, error: errors.message },
      });
      return;
    }

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
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="bg-white focus:outline-none focus:ring-2 focus:ring-neutral-400 px-2 py-2 rounded-md text-sm text-neutral-700 w-full border border-neutral-300"
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
            {formData.name.error && (
              <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="bg-white focus:outline-none focus:ring-2 focus:ring-neutral-400 px-2 py-2 rounded-md text-sm text-neutral-700 w-full border border-neutral-300"
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
            {formData.phone.error && (
              <p className="text-red-500 text-xs mt-1">
                {formData.phone.error}
              </p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Địa chỉ Email"
              className="bg-white focus:outline-none focus:ring-2 focus:ring-neutral-400 px-2 py-2 rounded-md text-sm text-neutral-700 w-full border border-neutral-300"
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
            {formData.email.error && (
              <p className="text-red-500 text-xs mt-1">
                {formData.email.error}
              </p>
            )}
          </div>
        </div>
        <div>
          <textarea
            placeholder="Ghi chú"
            rows={10}
            className="bg-white focus:outline-none focus:ring-2 focus:ring-neutral-400 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full border border-neutral-300"
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
          {formData.message.error && (
            <p className="text-red-500 text-xs mt-1">
              {formData.message.error}
            </p>
          )}
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-white rounded-md font-bold text-neutral-500 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          type="submit"
        >
          Gửi
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
          <span className="font-semibold">
            AIFICIENT TECHNOLOGY SERVICES TRADE COMPANY LIMITED
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <IconMapPin size={20} className="text-pink-500" />
          Số Nhà LK B10 Đường Gia Hưng Embassy Garden KĐT Tây Hồ Tây, Phường
          Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
        </div>
        <div className="flex items-center gap-2 mb-2">
          <IconMail size={20} className="text-sky-500" />
          Email:
          <a
            href="mailto:contact@aificent.com"
            className="underline hover:text-sky-600 transition-colors"
          >
            aificient@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <IconPhone size={20} className="text-green-500" />
          Điện thoại:
          <a
            href="tel:+84359655166"
            className="underline hover:text-green-600 transition-colors"
          >
            0359 655 166
          </a>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="/about"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-purple-400 text-white text-xs font-semibold shadow hover:scale-105 transition-transform"
          >
            <IconInfoCircle size={16} /> Về chúng tôi
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
};
