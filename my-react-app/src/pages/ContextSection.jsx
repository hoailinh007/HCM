import { motion } from "framer-motion";
import { ComputerDesktopIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function ContextSection() {
  const contextData = [
    {
      icon: <ComputerDesktopIcon className="w-8 h-8 text-beige" />,
      title: "Đặc điểm",
      description:
        "Thông tin đa chiều, mạng xã hội phát triển, giới trẻ tiếp nhận nhiều trào lưu toàn cầu, dễ bị ảnh hưởng bởi tin giả.",
      bg: "bg-gray-800",
    },
    {
      icon: <ExclamationTriangleIcon className="w-8 h-8 text-beige" />,
      title: "Thách thức",
      description:
        "Niềm tin vào các thiết chế xã hội, kể cả Đảng, có thể bị thử thách nếu không kịp đổi mới phương thức lãnh đạo và gần gũi với nhân dân.",
      bg: "bg-red-800",
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-gray-900 text-beige"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-beige mb-12 text-center drop-shadow-md">
        Bối cảnh thời đại 4.0
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {contextData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`p-6 rounded-xl shadow-lg ${item.bg} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.8 }}
          >
            <div className="absolute -top-5 -left-5 opacity-20">{item.icon}</div>
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold ml-3 text-beige">{item.title}</h3>
            </div>
            <p className="text-beige/90">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 max-w-3xl mx-auto text-center text-beige/70 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Thời đại 4.0 đòi hỏi Đảng và các thiết chế xã hội phải đổi mới tư duy, gần gũi hơn với người dân, đặc biệt là thế hệ trẻ.
      </motion.p>
    </motion.section>
  );
}
