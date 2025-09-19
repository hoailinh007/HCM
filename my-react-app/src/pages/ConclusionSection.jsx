import { motion } from "framer-motion";

export function ConclusionSection() {
  return (
    <motion.section
      className="relative py-20 px-6 bg-gradient-to-br from-red-700 via-red-500 to-yellow-100 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative star */}
      <div className="absolute top-4 right-4 text-yellow-300 text-6xl opacity-20 select-none">★</div>

      <motion.div
        className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border-l-8 border-red-700"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-red-800 mb-6">
          Thông điệp cốt lõi
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Tư tưởng Hồ Chí Minh về Đảng vẫn mang giá trị thời sự sâu sắc.  
          Đảng vừa giữ vai trò lãnh đạo, vừa phải đổi mới, tự chỉnh đốn để xứng đáng là <strong>“đạo đức, là văn minh”</strong>.  
          <br /><br />
          Con đường đúng đắn: <strong className="text-red-700">giữ vững bản chất cách mạng – đổi mới phương thức lãnh đạo – gắn bó với nhân dân – phát huy vai trò thanh niên.</strong>
        </p>
      </motion.div>
    </motion.section>
  );
}
