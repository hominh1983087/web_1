import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Bệnh viện Chợ Rẫy",
      src: "/images/logos/Cho_ray.png",
      className: "h-20 w-20 scale-100", // để nguyên vì đã đẹp
    },
    {
      title: "Đại học KHXH & NV Hà Nội",
      src: "/images/logos/VNU.png",
      className: "h-20 w-20 scale-150", // để nguyên
    },
    {
      title: "Du học SET",
      src: "/images/logos/SET.png",
      className: "h-20 w-20 scale-150", // scale lên 125% cho dễ đọc
    },
    {
      title: "MLE",
      src: "/images/logos/MLE.png",
      className: "h-20 w-20 scale-125", // scale lớn nhất để rõ chữ
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
            <div className="flex flex-wrap gap-6 justify-center items-center">
        {stack.map((item) => (
          <div
            key={item.src}
            className="w-32 h-28 overflow-hidden flex items-center justify-center bg-white rounded-md shadow"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={120}
              height={120}
              className={twMerge("object-contain", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
