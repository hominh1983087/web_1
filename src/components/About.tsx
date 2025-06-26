"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";

export default function About() {
  return (
    <div>
      <div className="relative bg-blue-950 text-white p-8 md:p-16 lg:p-24 rounded-lg overflow-hidden my-10">
        {/* Background Images with rounded corners and borders */}
        <div className="absolute top-8 left-8 w-32 h-24 md:w-48 md:h-36 opacity-80">
          <Image
            src="/images/about.webp"
            alt="Office 1"
            fill
            className="object-cover rounded-2xl border-2 border-white/20"
          />
        </div>
        <div className="absolute bottom-8 left-20 w-32 h-24 md:w-48 md:h-36 opacity-80">
          <Image
            src="/images/product1.jpg"
            alt="Office 2"
            fill
            className="object-cover rounded-2xl border-2 border-white/20"
          />
        </div>
        <div className="absolute top-8 right-8 w-32 h-24 md:w-48 md:h-36 opacity-80">
          <Image
            src="/images/sidefolio-aceternity.png"
            alt="Office 3"
            fill
            className="object-cover rounded-2xl border-2 border-white/20"
          />
        </div>
        <div className="absolute bottom-8 right-20 w-32 h-24 md:w-48 md:h-36 opacity-80">
          <Image
            src="/images/sidefolio-algochurn.png"
            alt="Office 4"
            fill
            className="object-cover rounded-2xl border-2 border-white/20"
          />
        </div>

        {/* Glassmorphism Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20">
            <h3 className="text-sm uppercase tracking-widest text-gray-300">
              Về chúng tôi
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold my-4">AIFicent</h2>
            <Paragraph className="text-gray-200 text-justify">
              AIFicent là công ty công nghệ ứng dụng trí tuệ nhân tạo, cung cấp
              các giải pháp linh hoạt giúp doanh nghiệp tăng hiệu suất, cải
              thiện trải nghiệm khách hàng và ra quyết định dựa trên dữ liệu.
            </Paragraph>
          </div>
        </motion.div>
      </div>
      {/* Section Text | Ảnh (text trái, ảnh phải) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 mt-16">
          <div className="flex-1">
            <h4 className="text-gray-400 text-lg font-medium mb-2">
              Tầm nhìn của chúng tôi
            </h4>
            <h3 className="text-xl font-semibold mb-2">
              Giải pháp công nghệ linh hoạt, hiệu quả cao
            </h3>
            <Paragraph>
              AIFicent cung cấp giải pháp công nghệ linh hoạt, giúp doanh nghiệp
              tối ưu vận hành, nâng cao trải nghiệm khách hàng và ra quyết định
              chính xác nhờ dữ liệu. Mỗi sản phẩm được thiết kế từ hiểu biết sâu
              sắc về bài toán thực tiễn, đảm bảo tính ứng dụng cao và bền vững.
            </Paragraph>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/AI_image.jpg"
              alt="Mission"
              width={420}
              height={300}
              className="rounded-lg object-cover w-[420px] h-[300px]"
            />
          </div>
        </div>
      </motion.div>
      {/* Our Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mt-20">
          <h4 className="text-gray-400 text-lg font-medium mb-2">
            Giá trị cốt lõi
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Chúng tôi đang xây dựng một văn hóa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl mb-2">🧩</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Nhận diện vấn đề
              </h3>
              <p className="text-gray-500">
                Chúng tôi đặt khách hàng làm trọng tâm, tạo ra giải pháp phù hợp
                với nhu cầu của họ.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🤝</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Dịch vụ khách hàng
              </h3>
              <p className="text-gray-500">
                Chúng tôi cung cấp dịch vụ khách hàng tốt nhất, đảm bảo sự hài
                lòng lòng và tối ưu hóa trải nghiệm.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Phát triển
              </h3>
              <p className="text-gray-500">
                Chúng tôi đẩy mạnh sự phát triển, tối ưu hóa hoạt động và đảm
                bảo tính bền vững.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Chairman Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mt-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 border-l-4 border-blue-500 pl-6">
              "AI là một công cụ, và nếu chứng minh được hiệu quả vượt trội về
              kết quả, việc tăng lương là hoàn toàn chính đáng theo chính sách
              công ty"
            </blockquote>
            <p className="mt-4 text-right font-bold text-blue-900 text-lg">
              — Nguyễn Gia Hy, Co-Founder AIFicent
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/images/Nguyen_Gia_Hy_COF.png"
              alt="Chairman of AIFicent"
              width={350}
              height={350}
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* {Customer Section} */}
      <CustomerSection />

      {/* Call To Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mt-24 bg-blue-900/90 rounded-2xl p-10 text-center text-white shadow-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Bạn đã sẵn sàng chuyển đổi số?
          </h2>
          <p className="mb-6 text-lg">
            Đăng ký nhận tư vấn miễn phí từ chuyên gia AI của AIFicent để bứt
            phá doanh nghiệp của bạn!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition"
          >
            Đăng ký tư vấn miễn phí
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function CustomerSection() {
  const customers = [
    {
      name: "Nguyễn Văn A",
      title: "CEO, Công ty ABC",
      image: "/images/customer1.jpg",
      quote:
        "Nhờ giải pháp AI của AIFicent, chúng tôi đã tối ưu hóa quy trình vận hành, tiết kiệm 30% chi phí và nâng cao trải nghiệm khách hàng vượt trội.",
    },
    {
      name: "Trần Thị B",
      title: "Giám đốc Marketing, XYZ",
      image: "/images/customer2.jpg",
      quote:
        "AIFicent đã giúp chúng tôi phân tích dữ liệu khách hàng hiệu quả, từ đó xây dựng chiến lược marketing cá nhân hóa và tăng trưởng doanh thu rõ rệt.",
    },
    {
      name: "Lê Quốc C",
      title: "CTO, DEF Solutions",
      image: "/images/customer3.jpg",
      quote:
        "Đội ngũ AIFicent rất chuyên nghiệp, hỗ trợ tận tình và luôn đưa ra giải pháp phù hợp với nhu cầu thực tế của doanh nghiệp chúng tôi.",
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
            <p className="text-gray-700 flex-1">"{cus.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
