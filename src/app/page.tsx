import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">🤖</span>
      <Heading className="font-black">Chào mừng đến với <span className="text-sky-400">AIFicent</span></Heading>

      <Paragraph className="max-w-xl mt-4">
        <Highlight>AIFicent</Highlight> là công ty công nghệ ứng dụng 
        <Highlight> trí tuệ nhân tạo</Highlight>, cung cấp các 
        <Highlight> giải pháp linh hoạt</Highlight> giúp doanh nghiệp 
        <Highlight> tăng hiệu suất</Highlight>, 
        <Highlight> cải thiện trải nghiệm khách hàng</Highlight> và 
        <Highlight> ra quyết định dựa trên dữ liệu</Highlight>.
      </Paragraph>

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
          <div className="flex items-center justify-center mb-4 text-3xl">★</div>
          <h3 className="font-bold text-lg mb-2">Chất Lượng Cao</h3>
          <p className="text-gray-600 mb-4 flex-1">Chúng tôi cam kết mang đến sản phẩm với chất lượng vượt trội, kiểm định nghiêm ngặt qua từng khâu, đáp ứng mọi tiêu chuẩn khắt khe nhất.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-200 rounded-xl shadow-md p-6 flex-1 max-w-sm mx-auto flex flex-col">
          <div className="flex items-center justify-center mb-4 text-3xl">⚡</div>
          <h3 className="font-bold text-lg mb-2">Hiệu Suất Tối Ưu</h3>
          <p className="text-gray-600 mb-4 flex-1">Hiệu suất vận hành mạnh mẽ, tối ưu hóa cho mọi quy mô doanh nghiệp, giúp bạn luôn dẫn đầu trong mọi cuộc cạnh tranh.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-200 rounded-xl shadow-md p-6 flex-1 max-w-sm mx-auto flex flex-col">
          <div className="flex items-center justify-center mb-4 text-3xl">💰</div>
          <h3 className="font-bold text-lg mb-2">Giá Cả Hợp Lý</h3>
          <p className="text-gray-600 mb-4 flex-1">Giải pháp tối ưu chi phí, cam kết mức giá cạnh tranh nhất thị trường, giúp bạn đầu tư hiệu quả mà vẫn đảm bảo chất lượng.</p>
        </div>
      </div>
      <TechStack />
    </Container>
  );
}
