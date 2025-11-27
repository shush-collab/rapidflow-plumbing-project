import { motion } from 'framer-motion';

interface FloatingIconProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

export default function FloatingIcon({
    children,
    duration = 3,
    delay = 0
}: FloatingIconProps) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}
