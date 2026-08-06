import { motion } from "framer-motion";

const cards = [
  {
    title: "Graphic Designer",
    icon: "🎨",
    position: "top-8 -left-14",
  },
  {
    title: "Motion Designer",
    icon: "🎬",
    position: "top-1/2 -right-20",
  },
  {
    title: "Content Creator",
    icon: "📈",
    position: "bottom-8 left-0",
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: index * 0.25,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute ${card.position}`}
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/10
              px-5
              py-4
              backdrop-blur-2xl
              shadow-[0_15px_40px_rgba(0,0,0,.25)]
            "
          >
            <span className="text-2xl">
              {card.icon}
            </span>

            <div>
              <p className="text-sm font-semibold text-white">
                {card.title}
              </p>

              <p className="text-xs text-gray-300">
                Available for work
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}