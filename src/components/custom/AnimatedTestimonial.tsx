import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface AnimatedTestimonialProps {
    rating: number;
    review: string;
    author: string;
    location: string;
    delay?: number;
}

export default function AnimatedTestimonial({
    rating,
    review,
    author,
    location,
    delay = 0
}: AnimatedTestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
        >
            <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                    <motion.div
                        className="flex gap-1 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.2 }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: delay + 0.3 + (i * 0.05),
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <Star
                                    className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <p className="mb-4 text-muted-foreground italic">"{review}"</p>
                    <div>
                        <p className="font-semibold">{author}</p>
                        <p className="text-sm text-muted-foreground">{location}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
