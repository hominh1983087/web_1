"use client";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative w-full h-[60px] flex items-center justify-center overflow-hidden border-t border-neutral-100">
      {/* Ảnh nền */}
      <Image
        src="/images/Universe.png" 
        alt="Footer background"
        fill
        className="object-cover w-full h-full"
        style={{ zIndex: 1 }}
        priority
      />
      {/* Overlay tối mờ nếu muốn */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }}></div>
      {/* Chữ footer */}
      <div className="relative z-10 text-center w-full">
        <span className="text-xs text-white">
          © 2025 AIFicient. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
