import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.75 }}

        >
            <img className="mt-16 z-10 w-full" src="https://i.ibb.co/p1k7XqT/04.jpg" alt="FlavourFly" />
        </motion.div>
    );
};

export default Banner;