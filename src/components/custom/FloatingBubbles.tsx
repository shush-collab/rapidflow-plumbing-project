import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Bubble {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    endX: number;
}

export default function FloatingBubbles() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        const generateBubbles = () => {
            const newBubbles: Bubble[] = [];
            for (let i = 0; i < 15; i++) {
                const startX = Math.random() * 100;
                newBubbles.push({
                    id: i,
                    x: startX,
                    endX: startX + (Math.random() - 0.5) * 20, // Drift left or right
                    delay: Math.random() * 8,
                    duration: 10 + Math.random() * 15,
                    size: 10 + Math.random() * 30,
                });
            }
            setBubbles(newBubbles);
        };

        generateBubbles();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute"
                    style={{
                        left: `${bubble.x}%`,
                        bottom: '-10%',
                    }}
                    animate={{
                        y: [0, -window.innerHeight * 1.2],
                        x: [`0%`, `${bubble.endX - bubble.x}%`],
                        opacity: [0, 0.7, 0.7, 0],
                    }}
                    transition={{
                        duration: bubble.duration,
                        delay: bubble.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    {/* Bubble */}
                    <div
                        className="relative rounded-full"
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(96, 165, 250, 0.6))',
                            boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(59, 130, 246, 0.5)',
                            border: '2px solid rgba(255, 255, 255, 0.5)',
                        }}
                    >
                        {/* Shine effect */}
                        <div
                            className="absolute top-[20%] left-[25%] w-[35%] h-[35%] rounded-full bg-white/80"
                            style={{
                                filter: 'blur(3px)',
                            }}
                        />
                        <div
                            className="absolute bottom-[15%] right-[20%] w-[20%] h-[20%] rounded-full bg-white/60"
                            style={{
                                filter: 'blur(2px)',
                            }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
