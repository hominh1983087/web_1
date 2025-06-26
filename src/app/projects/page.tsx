import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sản phẩm | AIFicient",
  description:
    "AIFicient is a company that provides AI solutions for businesses.",
};

export default function Projects() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Container>
        <span className="text-4xl">⚡</span>
        <Heading className="font-black mb-10"> Sản phẩm/Dịch vụ</Heading>

        <Products />
      </Container>
    </div>
  );
}
