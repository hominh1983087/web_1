import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <div className="bg-slate-100 min-h-screen">
      <Container>
        <span className="text-4xl">📝</span>
        <Heading className="font-black pb-4">
          Góc nhìn của AIFicent về Lĩnh Vực
        </Heading>
        <Paragraph className="pb-10">
          Các <Highlight>trích dẫn</Highlight>, <Highlight>nhận định</Highlight>{" "}
          và <Highlight>chia sẻ</Highlight> từ đồng sáng lập AIFicent và các{" "}
          <Highlight>chuyên gia trong ngành</Highlight> – về{" "}
          <Highlight>xu hướng</Highlight>, <Highlight>công nghệ</Highlight> và
          hành trình <Highlight>đổi mới</Highlight>.
        </Paragraph>
        <Blogs blogs={data} />
      </Container>
    </div>
  );
}
