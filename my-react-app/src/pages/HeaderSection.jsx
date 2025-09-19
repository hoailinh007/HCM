import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <motion.section
      className="py-24 px-6 text-center bg-red-900 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Decorative dark circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-gray-800 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>

      {/* Main Quote */}
      <motion.h1
        className="relative text-4xl md:text-5xl font-extrabold text-beige mb-6 drop-shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        “Đảng ta là đạo đức, là văn minh” – Hồ Chí Minh
      </motion.h1>

      {/* Introductory paragraph */}
      <motion.p
        className="relative text-lg md:text-xl max-w-3xl mx-auto text-beige/90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Ngay từ khi thành lập, Hồ Chí Minh nhấn mạnh rằng Đảng Cộng sản Việt Nam phải là đạo đức, văn minh,
        gắn bó máu thịt với nhân dân, tránh quan liêu, tham nhũng, và thoái hóa biến chất. Đây là kim chỉ
        nam cho toàn bộ sự nghiệp cách mạng của Đảng.
      </motion.p>

      {/* Highlights */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="bg-beige/20 text-beige px-4 py-2 rounded-full font-semibold shadow-md">
          Thành lập 1930
        </span>
        <span className="bg-beige/20 text-beige px-4 py-2 rounded-full font-semibold shadow-md">
          Sứ mệnh: Gắn bó với nhân dân
        </span>
        <span className="bg-beige/20 text-beige px-4 py-2 rounded-full font-semibold shadow-md">
          Nguyên tắc: Chống quan liêu & tham nhũng
        </span>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="mt-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-beige/70 italic">Cuộn xuống để tìm hiểu thêm về tư tưởng Hồ Chí Minh</p>
      </motion.div>
    </motion.section>
  );
}
