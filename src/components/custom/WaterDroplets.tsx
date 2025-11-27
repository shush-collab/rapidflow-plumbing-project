import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Droplet {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
}

export default function WaterDroplets() {
    const [droplets, setDroplets] = useState<Droplet[]>([]);

    useEffect(() => {
        // Generate random water droplets
        const generateDroplets = () => {
            const newDroplets: Droplet[] = [];
            for (let i = 0; i < 20; i++) {
                newDroplets.push({
                    id: i,
                    x: Math.random() * 100, // Random horizontal position
                    delay: Math.random() * 5, // Random start delay
                    duration: 8 + Math.random() * 10, // Random fall duration
                    size: 4 + Math.random() * 8, // Random size
                });
            }
            setDroplets(newDroplets);
        };

        generateDroplets();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {droplets.map((droplet) => (
                <motion.div
                    key={droplet.id}
                    className="absolute"
                    style={{
                        left: `${droplet.x}%`,
                        top: '-5%',
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        opacity: [0, 0.6, 0.6, 0],
                    }}
                    transition={{
                        duration: droplet.duration,
                        delay: droplet.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {/* Water Droplet Shape */}
                    <div
                        className="relative"
                        style={{
                            width: `${droplet.size}px`,
                            height: `${droplet.size * 1.5}px`,
                        }}
                    >
                        {/* Main droplet */}
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/40 to-blue-600/60"
                            style={{
                                filter: 'blur(1px)',
                            }}
                        />
                        {/* Highlight */}
                        <div
                            className="absolute top-[20%] left-[30%] w-[30%] h-[30%] rounded-full bg-white/40"
                            style={{
                                filter: 'blur(1px)',
                            }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
