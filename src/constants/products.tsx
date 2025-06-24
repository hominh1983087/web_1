import sidefolioAceternity from "public/images/product1.jpg";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "/contact",
    title: "Hệ thống chatbot / kho tri thức thông minh",
    description:
      "Giải pháp trợ lý ảo giúp doanh nghiệp nâng cao hiệu suất làm việc, tối ưu quản lý tri thức nội bộ và hỗ trợ khách hàng 24/7 với chi phí vận hành thấp.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <h2>1. Hệ thống chatbot / kho tri thức thông minh</h2>
        <h3>1.1 Cho nhân viên công ty </h3>
        <h4>Truy cập thông tin nhanh chóng và chính xác</h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tìm kiếm thông tin từ nhiều nguồn nội bộ chỉ trong vài giây</li>
          <li>
            Cung cấp câu trả lời chính xác từ tài liệu chính thức của công ty
          </li>
        </ul>
        <h4>Đẩy nhanh quá trình đào tạo nhân viên mới </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Rút ngắn thời gian hòa nhập cho nhân viên mới</li>
          <li>Giảm gánh nặng đào tạo cho nhân viên cấp cao</li>
        </ul>
        <h4>Duy trì kiến thức tổ chức </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Lưu giữ kinh nghiệm và kiến thức của nhân viên dày dạn</li>
          <li>Đảm bảo kiến thức không bị mất đi khi nhân sự nghỉ việc</li>
        </ul>
        <h4>Tăng hiệu suất làm việc </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Giảm thời gian tìm kiếm thông tin (trung bình 30% thời gian làm
            việc)
          </li>
          <li>
            Giảm gián đoạn công việc do phải chờ đợi phản hồi từ đồng nghiệp
          </li>
        </ul>
        <h4>Chuẩn hóa quy trình và thông tin </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Đảm bảo mọi người đều nhận được thông tin nhất quán</li>
          <li>Giảm sai sót do hiểu sai hoặc thiếu thông tin</li>
        </ul>
        <h4>Hỗ trợ ra quyết định </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Cung cấp dữ liệu và thông tin cần thiết cho việc ra quyết định{" "}
          </li>
          <li>
            Truy xuất các tiền lệ và kinh nghiệm xử lý tình huống trong quá khứ{" "}
          </li>
        </ul>
        <h4> </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li> </li>
          <li> </li>
        </ul>
        <h4>Tối ưu hóa quản lý tri thức </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tự động cập nhật kho tri thức từ các nguồn nội bộ </li>
          <li>
            Phân tích các câu hỏi thường gặp để xác định khoảng trống kiến thức{" "}
          </li>
        </ul>
        <h4>Phá vỡ rào cản thông tin giữa các phòng ban </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tạo điều kiện chia sẻ kiến thức xuyên phòng ban </li>
          <li>Cải thiện hợp tác nội bộ qua việc tiếp cận thông tin chung </li>
        </ul>
        <h4>Giảm áp lực cho đội ngũ IT và quản lý </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Giảm số lượng yêu cầu hỗ trợ thông tin cơ bản </li>
          <li>
            Tự động hóa việc giải đáp các câu hỏi thường gặp về công nghệ, quy
            trình{" "}
          </li>
        </ul>
        <h4> </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li> </li>
          <li> </li>
        </ul>
        <h4>Đo lường và cải thiện hiệu suất làm việc </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Theo dõi các chủ đề được tìm kiếm nhiều nhất </li>
          <li>
            Xác định các lĩnh vực cần đào tạo thêm hoặc cải thiện quy trình{" "}
          </li>
        </ul>
        <h3>1.2 Cho khách hàng của công ty </h3>
        <h4>Hỗ trợ khách hàng 24/7 </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Phản hồi tức thì mọi lúc, không bị giới hạn bởi giờ làm việc </li>
          <li>
            Giải quyết các câu hỏi thường gặp ngay lập tức, không cần thời gian
            chờ đợi{" "}
          </li>
        </ul>
        <h4>Tối ưu hóa nguồn lực nhân sự </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Giảm tải công việc cho nhân viên CSKH, giúp họ tập trung vào các vấn
            đề phức tạp{" "}
          </li>
          <li>Tiết kiệm chi phí thuê nhân sự hỗ trợ khách hàng cơ bản </li>
        </ul>
        <h4>Nâng cao trải nghiệm khách hàng </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tương tác nhất quán và chuyên nghiệp </li>
          <li>
            Cá nhân hóa trải nghiệm dựa trên lịch sử giao dịch và hành vi khách
            hàng{" "}
          </li>
        </ul>
        <h4>Thu thập dữ liệu và phân tích xu hướng </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Hiểu rõ nhu cầu khách hàng thông qua phân tích các câu hỏi thường
            gặp{" "}
          </li>
          <li>Phát hiện các vấn đề lặp lại để cải thiện sản phẩm/dịch vụ </li>
        </ul>
        <h4>Tăng tỷ lệ chuyển đổi và bán hàng </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tư vấn sản phẩm/dịch vụ phù hợp dựa trên nhu cầu khách hàng </li>
          <li>Hỗ trợ quá trình mua hàng, giải đáp thắc mắc tức thời </li>
        </ul>
        <h4>Tiết kiệm chi phí vận hành dài hạn </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Đầu tư một lần, sử dụng lâu dài với chi phí duy trì thấp </li>
          <li>Mở rộng quy mô dễ dàng mà không cần tăng chi phí tuyến tính </li>
        </ul>
        <h4>Đa dạng kênh tương tác </h4>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Tích hợp trên website, ứng dụng, mạng xã hội, Zalo, Messenger{" "}
          </li>
          <li>Tạo trải nghiệm nhất quán trên mọi kênh giao tiếp </li>
        </ul>
        <p> từ 2.990.000₫</p>{" "}
      </div>
    ),
  },
  {
    href: "/contact",
    title: "Algochurn",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "/contact",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
