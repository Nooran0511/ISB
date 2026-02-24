import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/923124891113"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.92 }}
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-white p-4 rounded-full shadow-[0_4px_20px_hsl(142_70%_45%/0.5)] animate-whatsapp-ring"
  >
    <MessageCircle className="w-6 h-6" />
  </motion.a>
);

export default WhatsAppButton;
