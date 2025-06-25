import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { FaMedal, FaBolt, FaMoneyBillWave } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] flex items-center justify-center min-h-[90vh] !mt-0">
        {/* Ảnh nền */}
        <Image
          src="/images/AdobeStock_1208418995_Preview.jpeg"
          alt="AI Illustration"
          fill
          className="object-cover w-full h-full"
          style={{ zIndex: 1 }}
          priority
        />
        {/* Overlay tối mờ */}
        <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }}></div>
        {/* Nội dung chữ + nút */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ zIndex: 3 }}>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-4 drop-shadow-lg">
            Nền tảng AI dành riêng cho doanh nghiệp hiện đại
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8">
            Hỗ trợ tự động hóa quy trình, giảm thiểu chi phí vận hành và mang đến trải nghiệm khách hàng liền mạch, thông minh hơn bao giờ hết
          </p>
          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-8 py-3 bg-sky-400 text-white font-bold rounded-lg shadow hover:bg-sky-500 transition"
            >
              Bắt đầu ngay
            </a>
            <a
              href="/about"
              className="px-8 py-3 border border-gray-300 text-white font-bold rounded-lg shadow hover:bg-white/10 transition"
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>

      <Container>
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          Our Products
        </Heading>
        <Products />

        {/* Section Lý do chọn chúng tôi */}
        <Heading
          as="h2"
          className="font-black text-lg md:text-xl mb-8 text-center mt-16"
        >
          Lý do chọn chúng tôi
        </Heading>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-12">
          {/* Card 1 */}
          <div className="bg-gray-200 rounded-xl shadow-md p-6 flex-1 max-w-sm mx-auto flex flex-col">
            <div className="flex items-center justify-center mb-4 text-3xl text-[#7479fb]">
              <FaMedal />
            </div>
            <h3 className="font-bold text-lg mb-2">Chất Lượng Cao</h3>
            <p className="text-gray-600 mb-4 flex-1">Chúng tôi cam kết mang đến sản phẩm với chất lượng vượt trội, kiểm định nghiêm ngặt qua từng khâu, đáp ứng mọi tiêu chuẩn khắt khe nhất.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-200 rounded-xl shadow-md p-6 flex-1 max-w-sm mx-auto flex flex-col">
            <div className="flex items-center justify-center mb-4 text-3xl text-[#7479fb]">
              <FaBolt />
            </div>
            <h3 className="font-bold text-lg mb-2">Hiệu Suất Tối Ưu</h3>
            <p className="text-gray-600 mb-4 flex-1">Hiệu suất vận hành mạnh mẽ, tối ưu hóa cho mọi quy mô doanh nghiệp, giúp bạn luôn dẫn đầu trong mọi cuộc cạnh tranh.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-200 rounded-xl shadow-md p-6 flex-1 max-w-sm mx-auto flex flex-col">
            <div className="flex items-center justify-center mb-4 text-3xl text-[#7479fb]">
              <FaMoneyBillWave />
            </div>
            <h3 className="font-bold text-lg mb-2">Giá Cả Hợp Lý</h3>
            <p className="text-gray-600 mb-4 flex-1">Giải pháp tối ưu chi phí, cam kết mức giá cạnh tranh nhất thị trường, giúp bạn đầu tư hiệu quả mà vẫn đảm bảo chất lượng.</p>
          </div>
        </div>
        <TechStack />
      </Container>
    </>
  );
}
