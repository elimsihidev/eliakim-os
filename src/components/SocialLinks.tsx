import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/in/elimsihi",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/elimsihi",
    label: "Instagram",
  },
  {
    icon: <FaBehance />,
    href: "https://behance.net/elimsihi",
    label: "Behance",
  },
  {
    icon: <FaTiktok />,
    href: "https://tiktok.com/@elimsihi",
    label: "TikTok",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/elimsihi",
    label: "X",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex items-center justify-center"
      style={{
        gap: "clamp(1rem, 1.2vw, 1.3rem)",
      }}
    >
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.label}
          whileHover={{
            y: -10,
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 18,
          }}
          className="
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/10
            backdrop-blur-2xl
            text-white
            cursor-pointer
            transition-all
            duration-300
            hover:border-cyan-400/50
            hover:bg-cyan-400/15
            hover:text-cyan-300
            hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
          "
          style={{
            width: "clamp(3.2rem, 3.6vw, 3.6rem)",
            height: "clamp(3.2rem, 3.6vw, 3.6rem)",
            fontSize: "clamp(1.25rem, 1.5vw, 1.55rem)",
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}