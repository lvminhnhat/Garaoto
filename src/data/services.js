// src/data/services.js
import { FaCogs, FaTools, FaCarBattery, FaCog, FaSprayCan, FaWrench } from 'react-icons/fa';
import React from 'react';

export const servicesData = [
  {
    id: 1,
    title: "Đại Tu Động Cơ",
    icon: <FaCogs className="text-4xl text-primary" />,
    description: "Dịch vụ đại tu và phục hồi động cơ chuyên nghiệp",
    image: "/dai-tu-dong-co.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Chúng tôi cung cấp dịch vụ đại tu động cơ toàn diện, bao gồm:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kiểm tra và đánh giá tình trạng động cơ</li>
          <li>Tháo lắp và kiểm tra các chi tiết động cơ</li>
          <li>Thay thế các phụ tùng hỏng hóc</li>
          <li>Phục hồi các chi tiết có thể tái sử dụng</li>
          <li>Lắp ráp và hiệu chỉnh động cơ</li>
        </ul>
      </div>
    )
  },
  {
    id: 2,
    title: "Xử Lý Khung Gầm",
    icon: <FaWrench className="text-4xl text-primary" />,
    description: "Xử lý tiếng kêu, gầm bệ và bạc đạn may ơ",
    image: "/xu-ly-khung-gam.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ xử lý khung gầm chuyên nghiệp, giải quyết các vấn đề:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Khắc phục tiếng kêu từ hệ thống treo</li>
          <li>Thay thế và sửa chữa bạc đạn may ơ</li>
          <li>Kiểm tra và xử lý giảm xóc</li>
          <li>Bảo dưỡng hệ thống gầm bệ</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: "Vệ Sinh Chuyên Sâu",
    icon: <FaSprayCan className="text-4xl text-primary" />,
    description: "Vệ sinh động cơ, khung gầm và phủ gầm",
    image: "/ve-sinh-chuyen-sau.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ vệ sinh chuyên sâu toàn diện cho xe:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vệ sinh khoang động cơ</li>
          <li>Làm sạch và bảo dưỡng khung gầm</li>
          <li>Phủ gầm chống gỉ sét</li>
          <li>Vệ sinh nội thất chuyên sâu</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "Bảo Dưỡng Động Cơ",
    icon: <FaTools className="text-4xl text-primary" />,
    description: "Xúc kim phun và vệ sinh buồng đốt bằng dung dịch Liqui Moly",
    image: "/bao-duong-dong-co.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ bảo dưỡng động cơ chuyên nghiệp:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vệ sinh kim phun xăng/dầu</li>
          <li>Xúc rửa buồng đốt bằng dung dịch Liqui Moly của Đức</li>
          <li>Kiểm tra và điều chỉnh hệ thống điện động cơ</li>
          <li>Tối ưu hóa hiệu suất động cơ</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "Điện Ô Tô",
    icon: <FaCarBattery className="text-4xl text-primary" />,
    description: "Sửa chữa điện điều hòa và điện thân xe",
    image: "/dien-o-to.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Sửa chữa điện ô tô toàn diện:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sửa chữa và bảo dưỡng điều hòa</li>
          <li>Xử lý các vấn đề về điện thân xe</li>
          <li>Kiểm tra và sửa chữa hệ thống điện</li>
          <li>Nâng cấp hệ thống điện</li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: "Sửa Chữa Hộp Số",
    icon: <FaCog className="text-4xl text-primary" />,
    description: "Đại tu và sửa chữa hộp số sàn và tự động",
    image: "/sua-chua-hop-so.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ sửa chữa hộp số chuyên nghiệp:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Đại tu hộp số sàn và tự động</li>
          <li>Thay dầu hộp số bằng máy thay dầu tuần hoàn</li>
          <li>Sửa chữa và thay thế linh kiện hộp số</li>
          <li>Kiểm tra và chẩn đoán lỗi hộp số</li>
        </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "Dịch Vụ Sơn Xe",
    icon: <FaSprayCan className="text-4xl text-primary" />,
    description: "Sơn xe toàn diện và sơn dặm",
    image: "/son-xe-o-to.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ sơn xe chuyên nghiệp:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sơn xe toàn bộ</li>
          <li>Sơn dặm vết xước</li>
          <li>Đánh bóng và phục hồi lớp sơn</li>
          <li>Sơn phủ bảo vệ</li>
        </ul>
      </div>
    )
  },
  {
    id: 8,
    title: "Dịch Vụ Làm Đồng",
    icon: <FaTools className="text-4xl text-primary" />,
    description: "Sửa chữa và phục hồi các vết móp, méo trên thân xe",
    image: "/lam-dong-o-to.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ làm đồng chuyên nghiệp:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sửa chữa các vết móp, méo trên thân xe</li>
          <li>Làm đồng và kéo nắn khung gầm</li>
          <li>Phục hồi các chi tiết biến dạng</li>
          <li>Xử lý các vết va chạm</li>
          <li>Kiểm tra và điều chỉnh độ cân bằng thân xe</li>
        </ul>
      </div>
    )
  },
  {
    id: 9,
    title: "Dịch Vụ Độ Xe",
    icon: <FaCog className="text-4xl text-primary" />,
    description: "Độ xe chuyên nghiệp, nâng cấp và thay đổi ngoại thất, nội thất",
    image: "/do-xe-o-to.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Dịch vụ độ xe chuyên nghiệp:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Độ đèn xe (LED, Xenon, Bi-cam)</li>
          <li>Độ âm thanh và hệ thống giải trí</li>
          <li>Nâng cấp nội thất (ghế da, taplo, trần xe)</li>
          <li>Độ body kit và phụ kiện ngoại thất</li>
          <li>Nâng cấp động cơ và hiệu suất xe</li>
          <li>Độ phuộc và hệ thống treo</li>
        </ul>
      </div>
    )
  }
];