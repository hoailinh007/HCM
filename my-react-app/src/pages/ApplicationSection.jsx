import { motion } from "framer-motion";

export function ApplicationSection() {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
        Vận dụng tư tưởng Hồ Chí Minh
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {/** Grid Items với hover animation **/}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-4">
            1. Giữ vững bản chất cách mạng
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Xây dựng Đảng trong sạch, vững mạnh.</li>
            <li>Đấu tranh chống tham nhũng, quan liêu, lợi ích nhóm.</li>
            <li>Nêu gương cán bộ, đảng viên: “Một tấm gương sống còn có giá trị hơn trăm bài diễn văn”.</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-4">
            2. Đổi mới thời đại 4.0
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Chuyển đổi số, minh bạch, tiếp cận gần gũi với nhân dân và giới trẻ.</li>
            <li>Sử dụng mạng xã hội, truyền thông số để lan tỏa giá trị tích cực và phản bác thông tin sai lệch.</li>
            <li>Đổi mới nội dung giáo dục chính trị, tư tưởng phù hợp với ngôn ngữ và phong cách của thanh niên.</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-4">
            3. Khơi dậy niềm tin và vai trò thanh niên
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Tạo cơ hội cho thanh niên tham gia xây dựng đất nước.</li>
            <li>Đào tạo, bồi dưỡng lực lượng kế tục sự nghiệp cách mạng.</li>
            <li>Chú trọng lợi ích thiết thực: học tập, việc làm, khởi nghiệp, đổi mới sáng tạo, công bằng xã hội.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
