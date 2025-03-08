export const variants = {
    textEffect: {
        initial: { opacity: 0, y: -50 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
            }
        }
    },
}