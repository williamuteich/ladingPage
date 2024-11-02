import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

export function SubBanner(){

    const { ref, inView } = useInView({ triggerOnce: true });
    return(
        <motion.div 
            className="mt-12 text-center bg-gray-900"
            ref={ref}
            initial={{ opacity: 0, x: -100 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
        >
            <img 
                src="/subbanner.webp" 
                alt="sub banner" 
                className='w-full h-44 object-cover opacity-35'
            />
        </motion.div>
    )
}