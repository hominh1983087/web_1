"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full flex justify-center mb-12">
        <Image
          src="/images/sidefolio-aceternity.png"
          alt="Hero"
          width={900}
          height={350}
          className="rounded-xl object-cover w-full max-w-4xl h-64 md:h-80"
        />
      </div>

      {/* Section Text */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Về AIFicent</h2>
        <Paragraph className="text-justify">
        Trong bối cảnh các doanh nghiệp đang tăng tốc chuyển đổi số và tìm kiếm giải pháp tối ưu hóa hoạt động dựa trên dữ liệu, AIFicent ra đời với mục tiêu mang trí tuệ nhân tạo (AI) đến gần hơn với thực tiễn kinh doanh.
        </Paragraph>
      </div>

      {/* Section Text | Ảnh (text trái, ảnh phải) */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Giải pháp công nghệ linh hoạt, hiệu quả cao</h3>
          <Paragraph>
          AIFicent cung cấp giải pháp công nghệ linh hoạt, giúp doanh nghiệp tối ưu vận hành, nâng cao trải nghiệm khách hàng và ra quyết định chính xác nhờ dữ liệu. Mỗi sản phẩm được thiết kế từ hiểu biết sâu sắc về bài toán thực tiễn, đảm bảo tính ứng dụng cao và bền vững.
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

      {/* Section Ảnh | Text (ảnh trái, text phải) */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <Image
            src="/images/sidefolio-algochurn-2.png"
            alt="Vision"
            width={420}
            height={300}
            className="rounded-lg object-cover w-[420px] h-[300px]"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-xl font-semibold mb-2"> Đồng hành cùng doanh nghiệp trong kỷ nguyên số</h3>
          <Paragraph>
          Chúng tôi cam kết mang đến giải pháp chất lượng, dễ tích hợp, chi phí hợp lý – phù hợp với mọi quy mô doanh nghiệp. AIFicent không chỉ cung cấp công nghệ, mà còn đồng hành khai thác giá trị từ dữ liệu và AI để doanh nghiệp phát triển bền vững trong kỷ nguyên số.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
