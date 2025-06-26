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
      name: "Nguyễn Hoàng Long",
      title: "Giám đốc Điều hành Bệnh Viện, Bệnh Viện Chợ Rẫy",
      image: "/images/customer4.jpg",
      quote:
        "Giải pháp tự động hóa quy trình bằng AI của AIFicent đã giúp chúng tôi giảm 30% chi phí vận hành và tăng độ chính xác trong chuỗi cung ứng. Một bước đột phá thực sự cho ngành logistics.",
    },
    {
      name: "Trần Minh Anh",
      title: "Trưởng phòng Marketing, Sendo Retail",
      image: "/images/customer2.jpg",
      quote:
        "Nhờ hệ thống phân tích hành vi khách hàng của AIFicent, chúng tôi đã xây dựng được các chiến dịch marketing cá nhân hóa hiệu quả, giúp tăng tỷ lệ chuyển đổi lên 40% và doanh thu tăng trưởng rõ rệt.",
    },
    {
      name: "Lê Quốc Bảo",
      title: "Giám đốc Công nghệ, TechNext Solutions",
      image: "/images/customer3.jpg",
      quote:
        "Đội ngũ AIFicent không chỉ cung cấp một giải pháp AI tùy chỉnh mạnh mẽ mà còn hợp tác chặt chẽ như một phần của đội ngũ chúng tôi. Năng lực kỹ thuật và sự hỗ trợ tận tâm của họ đã giúp chúng tôi rút ngắn thời gian ra mắt sản phẩm xuống một nửa.",
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
