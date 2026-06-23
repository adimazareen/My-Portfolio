import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { statusbar: 0.6, endDate: 0.6, ease: 'easeInOut' } }
};

const SectionWrapper = ({ children, id, className }: { children: ReactNode, id: string, className: string }) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            id={id}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </motion.section>
    )
}

export default SectionWrapper