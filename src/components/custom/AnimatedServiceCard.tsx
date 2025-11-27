import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}

export default function AnimatedServiceCard({
    icon,
    title,
    description,
    delay = 0
}: AnimatedServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.03, y: -5 }}
        >
            <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-6">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: delay + 0.2,
                            type: "spring",
                            stiffness: 200
                        }}
                        className="mb-4"
                    >
                        {icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
