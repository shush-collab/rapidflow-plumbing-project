import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface AnimatedCheckmarkProps {
    title: string;
    description: string;
    delay?: number;
}

export default function AnimatedCheckmark({ title, description, delay = 0 }: AnimatedCheckmarkProps) {
    return (
        <motion.li
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: delay + 0.2
                }}
            >
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
            </motion.div>
            <div>
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </motion.li>
    );
}
