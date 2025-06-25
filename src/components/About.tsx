"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

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
        <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20">
          <h3 className="text-sm uppercase tracking-widest text-gray-300">
            Get to know about AIFicent
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold my-4">
            We are passionate about our work
          </h2>
          <Paragraph className="text-gray-200 text-justify">
            Trong bối cảnh các doanh nghiệp đang tăng tốc chuyển đổi số và tìm
            kiếm giải pháp tối ưu hóa hoạt động dựa trên dữ liệu, AIFicent ra
            đời với mục tiêu mang trí tuệ nhân tạo (AI) đến gần hơn với thực
            tiễn kinh doanh.
          </Paragraph>
        </div>
      </div>
      {/* Section Text | Ảnh (text trái, ảnh phải) */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h4 className="text-gray-400 text-lg font-medium mb-2">Our Vision</h4>
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
            src="/images/sidefolio-algochurn-2.png"
            alt="Mission"
            width={420}
            height={300}
            className="rounded-lg object-cover w-[420px] h-[300px]"
          />
        </div>
      </div>
      {/* Our Values Section */}
      <div className="mt-20 bg-blue-950/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
        <h4 className="text-gray-400 text-lg font-medium mb-2">Our Values</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          We are building a culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1 */}
          <div>
            <div className="text-4xl mb-2">🧩</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-1">
              Problem identification
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tempus malesuada viverra
              rhoncus at tortor massa justo lectus.
            </p>
          </div>
          {/* 2 */}
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-1">
              Customer service
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tempus malesuada viverra
              rhoncus at tortor massa justo lectus.
            </p>
          </div>
          {/* 3 */}
          <div>
            <div className="text-4xl mb-2">🌱</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-1">Growth</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tempus malesuada viverra
              rhoncus at tortor massa justo lectus.
            </p>
          </div>
          {/* 4 */}
          <div>
            <div className="text-4xl mb-2">💡</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-1">
              Innovation
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tempus malesuada viverra
              rhoncus at tortor massa justo lectus.
            </p>
          </div>
          {/* 5 */}
          <div>
            <div className="text-4xl mb-2">🏃‍♂️</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-1">
              Agility
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tempus malesuada viverra
              rhoncus at tortor massa justo lectus.
            </p>
          </div>
          {/* 6 (empty for layout balance) */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
