"use client";
import React, { useState } from "react";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import toast from "react-hot-toast";
import CustomToast from "./CustomToast";

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
          type="tel"
          placeholder="Your phone number"
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
  );
};
