import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | AIFICIENT",
  description:
    "AIFICIENT là một công ty phát triển phần mềm và dịch vụ kỹ thuật số. Chúng tôi cung cấp các giải pháp phần mềm và dịch vụ kỹ thuật số cho các doanh nghiệp và cá nhân.",
};

export default function Projects() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Container>
        <span className="text-4xl">✉️</span>
        <Heading className="font-black mb-2">Liên hệ với chúng tôi</Heading>
        <Paragraph className="mb-10 max-w-xl">
          Hãy liên hệ với chúng tôi qua email hoặc điền form liên hệ. Chúng tôi
          sẽ sớm phản hồi bạn{" "}
        </Paragraph>
        <Contact />
      </Container>
    </div>
  );
}
