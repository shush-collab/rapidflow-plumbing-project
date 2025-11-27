import { motion } from 'framer-motion';

export default function WaterWaves() {
    return (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none h-48">
            {/* Wave 1 - Darkest Blue */}
            <motion.div
                className="absolute bottom-0 w-[200%] h-48"
                animate={{
                    x: ['-50%', '0%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0,40 C150,100 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
                        fill="rgba(59, 130, 246, 0.6)"
                    />
                </svg>
            </motion.div>

            {/* Wave 2 - Medium Blue */}
            <motion.div
                className="absolute bottom-0 w-[200%] h-48"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z"
                        fill="rgba(96, 165, 250, 0.5)"
                    />
                </svg>
            </motion.div>

            {/* Wave 3 - Light Blue (Fastest) */}
            <motion.div
                className="absolute bottom-0 w-[200%] h-48"
                animate={{
                    x: ['-50%', '0%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0,80 C300,120 500,40 600,80 C700,120 900,40 1200,80 L1200,120 L0,120 Z"
                        fill="rgba(147, 197, 253, 0.4)"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
