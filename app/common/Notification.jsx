import { motion } from "framer-motion";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react"; 

export default function Notification({ title, message, phone, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose && onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            className="fixed bottom-4 right-4 z-[9999] 
                       bg-gradient-to-r from-[#7400FA] to-[#BC13F7] 
                       text-white p-4 rounded-2xl shadow-2xl max-w-xs"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
        >
            <div className="flex items-start space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                    {title && (
                        <h4 className="font-semibold mb-1">{title}</h4>
                    )}
                    <p className="text-sm text-white/90">{message}</p>

                    {phone && (
                        <p className="font-semibold mt-1 flex items-center gap-1">
                            📞 {phone}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}