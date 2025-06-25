import sidefolioAceternity from "public/images/product1.jpg";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/product2.jpg";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/product3.jpg";
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
    stack: ["AI agent", "Chatbot"],
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
    title: "Công cụ phân tích dữ liệu và dự báo",
    description:
      "Ứng dụng phân tích dữ liệu giúp doanh nghiệp ra quyết định chính xác, tối ưu vận hành, tăng lợi nhuận và nắm bắt cơ hội thị trường hiệu quả.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["AI Agent", "Công cụ AI"],
    slug: "tools",
    content: (
      <div>
        <h3>2.1 Ra quyết định dựa trên dữ liệu</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Thay thế cảm tính bằng phân tích khách quan</li>
          <li>
            Giảm thiểu rủi ro trong quá trình ra quyết định kinh doanh. Dự báo
            xu hướng thị trường
          </li>
          <li>Nhận diện xu hướng tiêu dùng trước khi chúng trở nên phổ biến</li>
          <li>Điều chỉnh chiến lược kinh doanh kịp thời để nắm bắt cơ hội</li>
        </ul>
        <h3>2.2 Quản lý tồn kho tối ưu</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Dự báo nhu cầu chính xác để tránh tình trạng thừa hoặc thiếu hàng
          </li>
          <li>Giảm chi phí lưu kho và tối ưu vốn lưu động</li>
        </ul>
        <h3>2.3 Phân khúc khách hàng hiệu quả</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Nhận diện các nhóm khách hàng có giá trị cao nhất</li>
          <li>Điều chỉnh chiến lược marketing phù hợp với từng phân khúc</li>
        </ul>
        <h3>2.4 Tối ưu hóa giá bán</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Phân tích độ nhạy cảm về giá của khách hàng</li>
          <li>Đề xuất cấu trúc giá tối ưu để tăng doanh thu và lợi nhuận</li>
        </ul>
        <h3>2.5 Phát hiện gian lận và bất thường</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Tự động phát hiện các giao dịch đáng ngờ</li>
          <li>Bảo vệ doanh nghiệp khỏi các rủi ro tài chính</li>
        </ul>
        <h3>2.6 Tối ưu hiệu quả hoạt động</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Xác định các điểm nghẽn trong quy trình vận hành</li>
          <li>Đề xuất giải pháp cải thiện dựa trên phân tích dữ liệu</li>
        </ul>
        <h3>2.7 Dự báo dòng tiền</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Mô hình hóa các kịch bản tài chính khác nhau</li>
          <li>Chuẩn bị trước cho các thách thức về dòng tiền</li>
        </ul>
        <h3>2.8 Phân tích cạnh tranh</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Theo dõi và so sánh hoạt động với đối thủ</li>
          <li>Xác định cơ hội thị trường chưa được khai thác</li>
        </ul>
        <h3>2.9 Đo lường hiệu quả marketing</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Phân tích ROI của các chiến dịch marketing</li>
          <li>Phân bổ ngân sách marketing hiệu quả hơn</li>
        </ul>{" "}
      </div>
    ),
  },
  {
    href: "/contact",
    title: "AI Agent, tự động hóa quy trình kinh doanh (RPA)",
    description:
      "Tự động hóa giúp tăng hiệu suất, giảm chi phí và sai sót, đồng thời cải thiện trải nghiệm và mở rộng quy mô dễ dàng.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["AI agent", "Kinh doanh"],
    slug: "moonbeam",
    content: (
      <div>
        <h3>Tự động hóa công việc lặp lại</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Thay thế các tác vụ thủ công, đơn điệu và tốn thời gian</li>
          <li>
            Giải phóng nhân viên để tập trung vào công việc sáng tạo và giá trị
            cao
          </li>
        </ul>
        <h3>Giảm thiểu lỗi con người</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Thực hiện các quy trình với độ chính xác cao và nhất quán</li>
          <li>Loại bỏ sai sót do mệt mỏi hoặc thiếu tập trung</li>
        </ul>
        <h3>Tăng tốc độ xử lý công việc</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Hoàn thành các nhiệm vụ nhanh hơn nhiều lần so với con người</li>
          <li>Vận hành 24/7 không cần nghỉ ngơi</li>
        </ul>
        <h3>Tiết kiệm chi phí vận hành</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Giảm chi phí nhân sự cho các công việc giá trị thấp</li>
          <li>Tăng năng suất mà không cần tăng nhân lực</li>
        </ul>
        <h3>Tích hợp các hệ thống phân mảnh</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Kết nối các phần mềm và hệ thống không tương thích</li>
          <li>Tạo quy trình làm việc xuyên suốt giữa các nền tảng</li>
        </ul>
        <h3>Cải thiện trải nghiệm khách hàng</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Phản hồi nhanh chóng các yêu cầu của khách hàng</li>
          <li>Đảm bảo dịch vụ nhất quán và chuyên nghiệp</li>
        </ul>
        <h3>Phân tích quy trình và tối ưu hóa</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Thu thập dữ liệu về hiệu suất quy trình</li>
          <li>Phát hiện điểm nghẽn và đề xuất cải tiến</li>
        </ul>
        <h3>Mở rộng quy mô dễ dàng</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Nhân rộng quy trình tự động mà không cần tăng chi phí tuyến tính
          </li>
          <li>Thích ứng nhanh với tăng trưởng kinh doanh</li>
        </ul>
        <h3>Tuân thủ quy định và báo cáo</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Đảm bảo tuân thủ các quy trình chuẩn</li>
          <li>Tự động tạo báo cáo và lưu trữ hồ sơ</li>
        </ul>
        <h3>Nâng cao khả năng ra quyết định</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>Cung cấp dữ liệu chính xác và kịp thời cho quản lý</li>
          <li>Phân tích xu hướng và đưa ra cảnh báo sớm</li>
        </ul>
        <h3>Các ứng dụng phổ biến trong doanh nghiệp vừa và nhỏ</h3>
        <ul className="product-description" style={{ listStyleType: "circle" }}>
          <li>
            Tự động hóa nhập liệu và xử lý dữ liệu: Chuyển thông tin từ email,
            PDF, Excel vào hệ thống
          </li>
          <li>
            Xử lý hóa đơn và thanh toán: Tự động kiểm tra, phê duyệt và thanh
            toán hóa đơn
          </li>
          <li>
            Quy trình tuyển dụng: Sàng lọc hồ sơ, lên lịch phỏng vấn, gửi thông
            báo
          </li>
          <li>
            Quản lý đơn hàng: Từ tiếp nhận đến xử lý và theo dõi giao hàng
          </li>
          <li>
            Báo cáo và phân tích: Tự động tạo báo cáo định kỳ và dashboard
          </li>
          <li>Quy trình mua hàng: Từ yêu cầu đến phê duyệt và đặt hàn</li>
        </ul>{" "}
      </div>
    ),
  },
];
