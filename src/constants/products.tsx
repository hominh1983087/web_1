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
    stack: ["Hỗ trợ khách hàng", "Chatbot"],
    slug: "aceternity",
    content: (
      <div className="space-y-8">
        {/* Ứng dụng nội bộ cho nhân viên */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🏢</span>
            <span className="font-bold text-blue-900 text-lg">Ứng dụng nội bộ cho nhân viên</span>
          </div>
          <ul className="space-y-3 pl-2">
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Truy cập & tìm kiếm thông tin nhanh chóng:</span>
              <span className="block text-gray-700 ml-7">Tìm tài liệu, quy trình, thông tin từ nhiều nguồn chỉ trong vài giây. Trả lời chính xác dựa trên tài liệu nội bộ chính thống.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Tăng hiệu quả đào tạo & quản lý nhân sự:</span>
              <span className="block text-gray-700 ml-7">Hỗ trợ onboarding, giảm gánh nặng đào tạo, lưu giữ và kế thừa kiến thức tổ chức.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Tăng năng suất làm việc:</span>
              <span className="block text-gray-700 ml-7">Giảm 30% thời gian tìm kiếm thông tin, hạn chế gián đoạn do chờ phản hồi.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Đảm bảo thông tin nhất quán:</span>
              <span className="block text-gray-700 ml-7">Chuẩn hóa câu trả lời, quy trình, giảm sai sót do hiểu nhầm.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Hỗ trợ ra quyết định:</span>
              <span className="block text-gray-700 ml-7">Gợi ý từ dữ liệu, tiền lệ, kinh nghiệm thực tế. Phân tích xu hướng câu hỏi.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Tăng cường hợp tác liên phòng ban:</span>
              <span className="block text-gray-700 ml-7">Phá bỏ rào cản thông tin, tăng chia sẻ tri thức nội bộ.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Giảm tải cho IT & quản lý:</span>
              <span className="block text-gray-700 ml-7">Tự động giải đáp các câu hỏi về hệ thống, quy trình, giảm yêu cầu hỗ trợ lặp lại.</span>
            </li>
          </ul>
        </div>
        {/* Ứng dụng cho khách hàng */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💬</span>
            <span className="font-bold text-blue-900 text-lg">Ứng dụng cho khách hàng</span>
          </div>
          <ul className="space-y-3 pl-2">
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Hỗ trợ 24/7:</span>
              <span className="block text-gray-700 ml-7">Phản hồi tức thời, tự động xử lý các câu hỏi phổ biến.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Tiết kiệm chi phí & tối ưu nguồn lực:</span>
              <span className="block text-gray-700 ml-7">Giảm tải cho đội ngũ CSKH, tối ưu chi phí nhờ tự động hóa.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Nâng cao trải nghiệm khách hàng:</span>
              <span className="block text-gray-700 ml-7">Tương tác nhất quán, thân thiện, cá nhân hóa phản hồi.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Tăng trưởng & bán hàng:</span>
              <span className="block text-gray-700 ml-7">Gợi ý sản phẩm phù hợp, hỗ trợ quyết định mua nhanh chóng.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Phân tích & cải tiến dịch vụ:</span>
              <span className="block text-gray-700 ml-7">Thu thập dữ liệu tương tác, phát hiện vấn đề lặp lại, cải thiện dịch vụ.</span>
            </li>
            <li>
              <span className="text-green-500 mr-2"></span>
              <span className="font-semibold">Dễ dàng mở rộng & tích hợp đa kênh:</span>
              <span className="block text-gray-700 ml-7">Tích hợp linh hoạt: Website, App, Zalo, Messenger, Facebook... Mở rộng quy mô dễ dàng.</span>
            </li>
          </ul>
        </div>
        <p className="text-blue-900 font-bold text-lg mt-6">Từ 2.990.000₫</p>
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
    stack: ["Trực quan hóa dữ liệu","Dự đoán","Trí tuệ doanh nghiệp (BI)"],
    slug: "tools",
    content: (
      <div className="space-y-8">
        <ul className="space-y-5 pl-2">
          <li>
            <span className="text-xl mr-2">📊</span>
            <span className="font-semibold">Ra quyết định dựa trên dữ liệu</span>
            <div className="text-gray-700 ml-7">
              Loại bỏ cảm tính – Dựa vào phân tích khách quan, đáng tin cậy.<br/>
              Dự báo xu hướng thị trường, hành vi khách hàng để điều chỉnh chiến lược đúng lúc.<br/>
              Giảm rủi ro, tăng tỷ lệ thành công trong các quyết định kinh doanh.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">📦</span>
            <span className="font-semibold">Quản lý tồn kho & chuỗi cung ứng thông minh</span>
            <div className="text-gray-700 ml-7">
              Dự đoán chính xác nhu cầu để giảm tồn kho dư thừa hoặc thiếu hàng.<br/>
              Tối ưu chi phí lưu kho, luân chuyển vốn hiệu quả hơn.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🎯</span>
            <span className="font-semibold">Phân khúc khách hàng & cá nhân hóa chiến lược</span>
            <div className="text-gray-700 ml-7">
              Xác định nhóm khách hàng giá trị cao.<br/>
              Tùy chỉnh chiến dịch marketing, ưu đãi và sản phẩm theo từng phân khúc.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">💸</span>
            <span className="font-semibold">Tối ưu giá bán & doanh thu</span>
            <div className="text-gray-700 ml-7">
              Phân tích độ nhạy cảm với giá để đề xuất mức giá tối ưu.<br/>
              Tăng lợi nhuận mà không làm mất khách hàng.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🔐</span>
            <span className="font-semibold">Phát hiện gian lận & bất thường</span>
            <div className="text-gray-700 ml-7">
              Tự động nhận diện giao dịch bất thường, dấu hiệu rủi ro.<br/>
              Tăng cường bảo mật và giảm tổn thất tài chính.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🏭</span>
            <span className="font-semibold">Tối ưu hiệu suất vận hành</span>
            <div className="text-gray-700 ml-7">
              Phân tích quy trình để xác định các điểm nghẽn, lãng phí.<br/>
              Đề xuất cải tiến cụ thể dựa trên dữ liệu thực tế.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">💰</span>
            <span className="font-semibold">Dự báo dòng tiền & quản trị tài chính</span>
            <div className="text-gray-700 ml-7">
              Mô hình hóa các kịch bản tài chính để chuẩn bị trước cho biến động.<br/>
              Đảm bảo dòng tiền ổn định cho hoạt động lâu dài.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🏁</span>
            <span className="font-semibold">Phân tích đối thủ & cạnh tranh thị trường</span>
            <div className="text-gray-700 ml-7">
              Theo dõi hiệu suất, chiến lược của đối thủ cạnh tranh.<br/>
              Phát hiện các thị trường ngách và cơ hội chưa được khai thác.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">📈</span>
            <span className="font-semibold">Đo lường & tối ưu chiến dịch marketing</span>
            <div className="text-gray-700 ml-7">
              Tính toán ROI cho từng kênh, từng chiến dịch.<br/>
              Phân bổ ngân sách thông minh để đạt hiệu quả cao nhất.
            </div>
          </li>
        </ul>
        <p className="text-blue-900 font-bold text-lg mt-6">Từ 2.990.000₫</p>
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
    stack: ["AI agent", "Tự động hóa","Quản lý quy trình"],
    slug: "moonbeam",
    content: (
      <div className="space-y-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🤖</span>
          <span className="font-bold text-blue-900 text-lg">AI Agent – Tự động hóa quy trình doanh nghiệp</span>
        </div>
        <ul className="space-y-5 pl-2">
          <li>
            <span className="text-xl mr-2">🔁</span>
            <span className="font-semibold">Tự động hóa công việc lặp lại</span>
            <div className="text-gray-700 ml-7">
              Thay thế tác vụ thủ công tốn thời gian.<br/>
              Giải phóng nhân viên cho công việc giá trị cao.<br/>
              Vận hành 24/7, không gián đoạn.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">✅</span>
            <span className="font-semibold">Chính xác & nhất quán</span>
            <div className="text-gray-700 ml-7">
              Loại bỏ sai sót do con người.<br/>
              Đảm bảo thực thi đúng quy trình.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">⚡</span>
            <span className="font-semibold">Tiết kiệm chi phí, tăng tốc độ</span>
            <div className="text-gray-700 ml-7">
              Tăng năng suất mà không tăng nhân lực.<br/>
              Giảm chi phí vận hành dài hạn.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🔗</span>
            <span className="font-semibold">Kết nối hệ thống – Chuẩn hóa quy trình</span>
            <div className="text-gray-700 ml-7">
              Tích hợp phần mềm rời rạc.<br/>
              Tạo luồng công việc xuyên suốt.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">📊</span>
            <span className="font-semibold">Phân tích & cải tiến</span>
            <div className="text-gray-700 ml-7">
              Theo dõi hiệu suất quy trình.<br/>
              Phát hiện điểm nghẽn, đề xuất tối ưu.<br/>
              Tự động hóa báo cáo & lưu trữ.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">🚀</span>
            <span className="font-semibold">Linh hoạt mở rộng</span>
            <div className="text-gray-700 ml-7">
              Dễ nhân rộng quy trình mà không tăng chi phí tuyến tính.<br/>
              Thích ứng nhanh với sự tăng trưởng.
            </div>
          </li>
          <li>
            <span className="text-xl mr-2">📌</span>
            <span className="font-semibold">Ứng dụng tiêu biểu</span>
            <div className="text-gray-700 ml-7">
              Nhập liệu & đồng bộ dữ liệu (email, Excel, PDF).<br/>
              Tự động hóa quy trình hóa đơn, thanh toán, mua hàng.<br/>
              Hỗ trợ tuyển dụng: lọc CV, gửi lịch, phản hồi.<br/>
              Tạo báo cáo định kỳ & dashboard.<br/>
              Quản lý đơn hàng, chăm sóc khách hàng.
            </div>
          </li>
        </ul>
        <p className="text-blue-900 font-bold text-lg mt-6">Từ 2.990.000₫</p>
      </div>
    ),
  },
];
