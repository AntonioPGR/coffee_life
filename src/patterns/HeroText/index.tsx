import { animate, motion } from "framer-motion";

export default function HeroText() {
	return (
		<article className='text-text-800 text-center flex flex-col gap-4'>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.3 }}
				className='font-hero text-5xl'
			>
				We can take over the world <br /> if we have coffee
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.3 }}
				className='font-text text-xl'
			>
				Awaken your senses with the perfect coffee - our passion, your pleasure
			</motion.p>
		</article>
	);
}
