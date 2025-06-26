"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function CustomerSlider() {
  const sliderRef = useRef(null);
  const [slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  const customers = [
    {
      name: "Trịnh Vũ Nghĩa",
      title: "Bệnh Viện Chợ Rẫy",
      image: "/images/customer4.jpg",
      quote:
        "Tôi thật sự ấn tượng với sản phẩm AI của AIFicent – hệ thống có khả năng tiếp thu hàng ngàn trang tài liệu, vượt xa giới hạn vài trăm trang trên thị trường.",
    },
    {
      name: "Anh Nghĩa ",
      title: "Trường đại học khoa học xã hôi & nhân văn ",
      image: "/images/customer2.jpg",
      quote:
        "AIficient quá ấn tượng! Sản phẩm tùy chỉnh cực linh hoạt, xử lý đa ngôn ngữ mượt mà, dù khối lượng tài liệu lớn vẫn chạy êm ru. Hiệu suất đỉnh cao, đáng để đầu tư!",
    },
    {
      name: "Ethan Wilson",
      title: "mle consulting services",
      image: "/images/customer3.jpg",
      quote:
        "AIficient is truly impressive! Its flexible customization and seamless multilingual processing handle massive document volumes with ease. Exceptional performance, perfect for sustained use.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <h4 className="text-gray-400 text-lg font-medium mb-2">
          Câu chuyện thành công
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Khách hàng nói về chúng tôi
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {customers.map((cus) => (
          <div
            key={cus.name}
            className="bg-white/80 rounded-xl p-6 shadow-xl flex flex-col h-full hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              <Image
                src={cus.image}
                alt={cus.name}
                width={56}
                height={56}
                className="rounded-full w-14 h-14 object-cover border-2 border-blue-200"
              />
              <div className="ml-4">
                <p className="font-semibold text-blue-900">{cus.name}</p>
                <p className="text-gray-500 text-sm">{cus.title}</p>
              </div>
            </div>
            <p className="text-gray-700 flex-1">&ldquo;{cus.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
