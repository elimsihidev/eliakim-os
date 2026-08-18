import { motion } from "framer-motion";
import { FaBehance, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/elimsihi", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com/elimsihi", label: "Instagram" },
  { icon: <FaBehance />, href: "https://behance.net/elimsihi", label: "Behance" },
  { icon: <FaTiktok />, href: "https://tiktok.com/@elitalked", label: "TikTok" },
  { icon: <MdEmail />, href: "mailto:elimsihi@gmail.com", label: "Email" },
];

export default function MobileSocials() {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="inline-flex items-center gap-2 text-xs text-white/48 transition-colors hover:text-cyan-300"
          title={social.label}
        >
          <span className="text-sm">{social.icon}</span>
          <span>{social.label}</span>
        </a>
      ))}
    </motion.div>
  );
}
