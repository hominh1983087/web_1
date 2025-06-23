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

      <Paragraph className="max-w-xl mt-4">
        Chúng tôi cam kết mang đến 
        <Highlight> sản phẩm chất lượng cao</Highlight>, 
        <Highlight> hiệu suất ổn định</Highlight> với 
        <Highlight> mức chi phí hợp lý</Highlight>, phù hợp với 
        <Highlight> mọi quy mô doanh nghiệp</Highlight>.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
