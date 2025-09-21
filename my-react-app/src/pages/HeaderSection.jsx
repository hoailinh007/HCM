// src/pages/HeaderSection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HeaderSection() {
  return (
    <div className="p-8 md:p-12 min-h-full">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* MODIFIED: All text colors are now light for the dark background */}
        <motion.h1
          className="relative text-4xl md:text-5xl font-extrabold text-white mb-6"
          // ...
        >
          “Đảng ta là đạo đức, là văn minh” – Hồ Chí Minh
        </motion.h1>

        <motion.p
          className="relative text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10"
          // ...
        >
          Ngay từ khi thành lập, Hồ Chí Minh nhấn mạnh rằng Đảng Cộng sản Việt
          Nam phải là đạo đức, văn minh, gắn bó máu thịt với nhân dân, tránh
          quan liêu, tham nhũng, và thoái hóa biến chất. Đây là kim chỉ nam cho
          toàn bộ sự nghiệp cách mạng của Đảng.
        </motion.p>
        
        <motion.div /* ... */ >
          {/* MODIFIED: Button styled for a dark theme */}
          <Link
            to="/blog"
            className="inline-block bg-white/10 text-black px-4 py-2 rounded-full font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
          >
            Khám Phá Các Tấm Gương Sáng
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          // ...
        >
          {/* MODIFIED: Highlight tags styled for a dark theme */}
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Thành lập 1930
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Sứ mệnh: Gắn bó với nhân dân
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Nguyên tắc: Chống quan liêu & tham nhũng
          </span>
        </motion.div>
      </div>
    </div>
  );
}