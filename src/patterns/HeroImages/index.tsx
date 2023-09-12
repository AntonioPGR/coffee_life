import { motion } from "framer-motion";

const coffe_cup_1 = "images/coffe_cup_1.png";
const coffe_cup_2 = "images/coffe_cup_2.png";

export default function HeroImages() {
	return (
		<section className='flex w-full items-center justify-center'>
			<motion.img
				initial={{ opacity: 0, y: 30, x: 20 }}
				animate={{ opacity: [0, 0.9, 1], y: 0, x: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.5,
					opacity: {
						ease: "easeIn",
					},
				}}
				layout
				className='z-0 right-[-4rem] relative drop-shadow-[-10px_50px_15px_rgba(0,0,0,.3)]'
				src={coffe_cup_1}
				alt="brown coffe paper cup in the background with the phrase 'There's always time for coffe' written in its frontal part"
			/>
			<motion.img
				initial={{ opacity: 0, y: 30, x: -20 }}
				animate={{ opacity: [0, 0.9, 1], y: 0, x: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.5,
					opacity: {
						ease: "easeIn",
					},
				}}
				className='z-10 right-[4rem] relative scale-110 drop-shadow-[-5px_40px_15px_rgba(0,0,0,.3)]'
				src={coffe_cup_2}
				alt="white coffe paper cup in the foregroud with plants drawwed in it and with the phrase 'Coffe cup mock up' written in its frontal part"
			/>
		</section>
	);
}
